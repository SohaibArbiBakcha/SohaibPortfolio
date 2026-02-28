import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaStar, FaCodeBranch, FaGithub } from "react-icons/fa"
import styles from "../../css/github-projects.module.css"

const GithubProjects = ({ limit }) => {
  const { repos } = useStaticQuery(graphql`
    query {
      repos: allGithubRepo(sort: { fields: updatedAt, order: DESC }) {
        edges {
          node {
            slug
            name
            description
            url
            language
            stars
            forks
            topics
          }
        }
      }
    }
  `)

  if (!repos || !repos.edges.length) return null

  const displayed = limit ? repos.edges.slice(0, limit) : repos.edges
  const showViewAll = limit && repos.edges.length > limit

  return (
    <section className={styles.section}>
      {limit && (
        <div className={styles.sectionHeader}>
          <span className={styles.label}>// open source</span>
          <h2 className={styles.heading}>
            <span className={styles.bracket}>&lt;</span>
            GitHub
            <span className={styles.bracket}> /&gt;</span>
          </h2>
          <div className={styles.line} />
        </div>
      )}

      <div className={styles.grid}>
        {displayed.map(({ node }) => (
          <div key={node.slug} className={styles.card}>
            <div className={styles.cardTop}>
              <FaGithub className={styles.ghIcon} />
              <div className={styles.stats}>
                <span className={styles.stat}>
                  <FaStar /> {node.stars}
                </span>
                <span className={styles.stat}>
                  <FaCodeBranch /> {node.forks}
                </span>
              </div>
            </div>

            <h3 className={styles.name}>{node.name}</h3>
            {node.description && (
              <p className={styles.desc}>{node.description}</p>
            )}

            <div className={styles.footer}>
              {node.language && (
                <span className={styles.lang}>{node.language}</span>
              )}
              {node.topics &&
                node.topics.slice(0, 3).map(t => (
                  <span key={t} className={styles.topic}>
                    {t}
                  </span>
                ))}
            </div>

            <div className={styles.actions}>
              <AniLink
                cover
                bg="#111"
                direction="up"
                to={`/github/${node.slug}`}
                className={styles.btnReadme}
              >
                Read README
              </AniLink>
              <a
                href={node.url}
                target="_blank"
                rel="noreferrer"
                className={styles.btnGh}
              >
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>

      {showViewAll && (
        <div className={styles.viewAll}>
          <AniLink
            cover
            bg="#111"
            direction="right"
            to="/project"
            className="btn-primary"
          >
            View All Projects
          </AniLink>
        </div>
      )}
    </section>
  )
}

export default GithubProjects
