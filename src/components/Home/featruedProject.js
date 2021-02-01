import React from "react"
import Project from "../Project/Project"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/items.module.css"
import Title from "../Title"

const FeatruedProject = () => {
  const response = useStaticQuery(getProject)
  const projects = response.projectFeatrued.edges

  return (
    <section className={styles.projects}>
      <Title titel="<featured" subtitel="projects/>" />
      <div className={styles.center}>
        {projects.map(({ node }) => {
          return <Project key={node.contentful_id} project={node} />
        })}
      </div>

      <AniLink swipe to="/project" className="btn-primary">
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
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default FeatruedProject
