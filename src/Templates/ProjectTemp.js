import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import styles from "../css/template.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"

// Contentful project template — replaced by GithubRepoTemp but kept for schema compat
const ProjectTemp = ({ data }) => {
  const {
    projectName,
    description: { description },
    projectImages,
  } = data.project

  return (
    <Layout>
      <SEO title={projectName} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {projectImages.map((item, index) => (
              <img
                key={index}
                src={item.file && item.file.url ? `https:${item.file.url}` : ""}
                alt={projectName}
              />
            ))}
          </div>
          <h2>{projectName}</h2>
          <p className={styles.desc}>{description}</p>
        </div>
        <AniLink
          cover
          bg="#111"
          direction="right"
          to="/project"
          className="btn-primary"
        >
          Back to projects
        </AniLink>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    project: contentfulProjects(slug: { eq: $slug }) {
      projectName
      description {
        description
      }
      projectImages {
        file {
          url
        }
      }
    }
  }
`

export default ProjectTemp
