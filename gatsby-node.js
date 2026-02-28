const path = require("path")
const fetch = require("node-fetch")
const { marked } = require("marked")
const crypto = require("crypto")

require("events").EventEmitter.defaultMaxListeners = 30

// Fix for Node 18+ OpenSSL 3.0: md4 is no longer available, use sha256
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    output: {
      hashFunction: "sha256",
    },
  })
}

// ── Schema definitions ────────────────────────────────────────────────────────
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type GithubRepo implements Node {
      repoId:      Int
      name:        String!
      slug:        String!
      description: String
      url:         String!
      homepage:    String
      language:    String
      stars:       Int
      forks:       Int
      topics:      [String!]!
      updatedAt:   String
      readmeHtml:  String
    }
    type GithubContributions implements Node {
      totalContributions: Int
      weeksJson:          String
    }
  `)
}

// ── GitHub source ─────────────────────────────────────────────────────────────
exports.sourceNodes = async ({ actions, reporter }) => {
  const { createNode } = actions
  const username = process.env.GITHUB_USERNAME || "SohaibArbiBakcha"
  const token = process.env.GITHUB_TOKEN || ""

  const restHeaders = {
    Accept: "application/vnd.github.v3+json",
    ...(token ? { Authorization: `token ${token}` } : {}),
  }
  const gqlHeaders = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `bearer ${token}` } : {}),
  }

  // ── 1. Repos ──────────────────────────────────────────────────────────────
  let repos = []
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=50&type=owner`,
      { headers: restHeaders }
    )
    if (!res.ok) throw new Error(`GitHub API responded ${res.status}`)
    repos = await res.json()
  } catch (err) {
    reporter.warn(`[GitHub] Could not fetch repos: ${err.message}`)
  }

  const ownRepos = repos.filter(r => !r.fork)

  const processRepo = async repo => {
    let readmeHtml = ""
    try {
      const readmeRes = await fetch(
        `https://api.github.com/repos/${username}/${repo.name}/readme`,
        { headers: restHeaders }
      )
      if (readmeRes.ok) {
        const readmeData = await readmeRes.json()
        const markdown = Buffer.from(readmeData.content, "base64").toString(
          "utf-8"
        )
        readmeHtml = marked.parse(markdown)
      }
    } catch (_) {}

    const nodeContent = JSON.stringify(repo)
    createNode({
      id: `github-repo-${repo.id}`,
      parent: null,
      children: [],
      internal: {
        type: "GithubRepo",
        content: nodeContent,
        contentDigest: crypto
          .createHash("md5")
          .update(nodeContent)
          .digest("hex"),
      },
      repoId: repo.id,
      name: repo.name,
      slug: repo.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      description: repo.description || "",
      url: repo.html_url,
      homepage: repo.homepage || "",
      language: repo.language || "",
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      topics: repo.topics || [],
      updatedAt: repo.updated_at,
      readmeHtml,
    })
  }

  // Batch of 5 to avoid MaxListeners warning
  const BATCH = 5
  for (let i = 0; i < ownRepos.length; i += BATCH) {
    await Promise.all(ownRepos.slice(i, i + BATCH).map(processRepo))
  }
  reporter.info(`[GitHub] Sourced ${ownRepos.length} repos for ${username}`)

  // ── 2. Contribution graph (requires token) ────────────────────────────────
  if (!token) {
    reporter.warn("[GitHub] No token — skipping contribution graph")
    return
  }

  try {
    const contribRes = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: gqlHeaders,
      body: JSON.stringify({
        query: `{
          user(login: "${username}") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }`,
      }),
    })

    if (!contribRes.ok)
      throw new Error(`GraphQL API responded ${contribRes.status}`)
    const contribData = await contribRes.json()
    const calendar =
      contribData.data.user.contributionsCollection.contributionCalendar

    const weeksJson = JSON.stringify(calendar.weeks)
    createNode({
      id: "github-contributions-1",
      parent: null,
      children: [],
      internal: {
        type: "GithubContributions",
        content: weeksJson,
        contentDigest: crypto.createHash("md5").update(weeksJson).digest("hex"),
      },
      totalContributions: calendar.totalContributions,
      weeksJson,
    })
    reporter.info(
      `[GitHub] Contribution graph fetched (${calendar.totalContributions} contributions)`
    )
  } catch (err) {
    reporter.warn(`[GitHub] Could not fetch contribution graph: ${err.message}`)
  }
}

// ── Page creation ─────────────────────────────────────────────────────────────
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
      githubRepos: allGithubRepo {
        edges {
          node {
            slug
            name
          }
        }
      }
    }
  `)

  if (data.posts) {
    data.posts.edges.forEach(({ node }) => {
      createPage({
        path: `blog${node.slug}`,
        component: path.resolve("./src/Templates/BlogTemp.js"),
        context: { slug: node.slug },
      })
    })
  }

  if (data.githubRepos) {
    data.githubRepos.edges.forEach(({ node }) => {
      createPage({
        path: `github/${node.slug}`,
        component: path.resolve("./src/Templates/GithubRepoTemp.js"),
        context: { slug: node.slug },
      })
    })
  }
}
