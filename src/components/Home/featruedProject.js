import React from "react"
import Project from "../Project/Project"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/items.module.css"
const FeatruedProject = () => {
  const response = useStaticQuery(getProject)
  const projects = response.projectFeatrued.edges

  return (
    <section className={styles.projects}>
      <div className={styles.center}>
        {projects.map(({ node }) => {
          return <Project key={node.contentful_id} project={node} />
        })}
      </div>

      <AniLink
        cover
        bg="#111"
        direction="right"
        to="/project"
        className="btn-primary"
      >
        ALl Projects
      </AniLink>
    </section>
  )
}

const getProject = graphql`
  query {
    projectFeatrued: allContentfulProjects(filter: { featrue: { eq: true } }) {
      edges {
        node {
          contentful_id
          projectName
          slug
          projectImages {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default FeatruedProject
