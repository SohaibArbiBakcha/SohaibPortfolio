import React from "react"
import styles from "../../css/project.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// Contentful projects replaced by GitHub repos (GithubProjects component)
const Project = ({ project }) => {
  const { projectName, slug } = project
  return (
    <article className={styles.project}>
      <div className={styles.imgContainer}>
        <AniLink
          cover
          bg="#111"
          direction="right"
          className={styles.link}
          to={`/projects${slug}`}
        >
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{projectName}</h3>
      </div>
    </article>
  )
}

export default Project
