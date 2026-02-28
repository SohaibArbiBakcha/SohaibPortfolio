import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  FaStar,
  FaCodeBranch,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa"
import styles from "../css/github-repo.module.css"

const GithubRepoTemp = ({ data }) => {
  const {
    name,
    description,
    url,
    homepage,
    language,
    stars,
    forks,
    topics,
    updatedAt,
    readmeHtml,
  } = data.repo

  const updated = new Date(updatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Layout>
      <SEO title={name} />
      <section className={styles.page}>
        <div className={styles.center}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.label}>// github repo</span>
              <span className={styles.updated}>updated {updated}</span>
            </div>
            <h1 className={styles.name}>{name}</h1>
            {description && <p className={styles.description}>{description}</p>}

            {/* Stats row */}
            <div className={styles.stats}>
              {language && <span className={styles.lang}>{language}</span>}
              <span className={styles.stat}>
                <FaStar /> {stars}
              </span>
              <span className={styles.stat}>
                <FaCodeBranch /> {forks}
              </span>
            </div>

            {/* Topics */}
            {topics && topics.length > 0 && (
              <div className={styles.topics}>
                {topics.map(t => (
                  <span key={t} className={styles.topic}>
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Action links */}
            <div className={styles.actions}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={styles.btnGh}
              >
                <FaGithub /> View on GitHub
              </a>
              {homepage && (
                <a
                  href={homepage}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.btnLive}
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>

          {/* README */}
          {readmeHtml ? (
            <article
              className={styles.readme}
              dangerouslySetInnerHTML={{ __html: readmeHtml }}
            />
          ) : (
            <p className={styles.noReadme}>
              No README available for this repository.
            </p>
          )}

          <div className={styles.backRow}>
            <AniLink
              cover
              bg="#111"
              direction="right"
              to="/project"
              className="btn-primary"
            >
              ← All Projects
            </AniLink>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getRepo($slug: String!) {
    repo: githubRepo(slug: { eq: $slug }) {
      name
      description
      url
      homepage
      language
      stars
      forks
      topics
      updatedAt
      readmeHtml
    }
  }
`

export default GithubRepoTemp
