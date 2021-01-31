import React from "react"
import styles from "../../css/project.module.css"
import Images from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Project = ({ project }) => {
  const { projectName, projectImages, slug } = project
  let mainImage = projectImages[0].fluid

  return (
    <article className={styles.project}>
      <div className={styles.imgContainer}>
        <Images fluid={mainImage} className={styles.img} alt={projectName} />
        <AniLink swipe className={styles.link} to={`/projects${slug}`}>
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
