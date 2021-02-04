const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      projects: allContentfulProjects {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.projects.edges.forEach(({ node }) => {
    createPage({
      path: `projects${node.slug}`,
      component: path.resolve("./src/Templates/ProjectTemp.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog${node.slug}`,
      component: path.resolve("./src/Templates/BlogTemp.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
