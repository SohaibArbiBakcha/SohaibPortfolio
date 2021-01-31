import React from "react"
import ProjectList from "./ProjectList"
import { useStaticQuery, graphql } from "gatsby"

const Projects = () => {
  const { projects } = useStaticQuery(getProject)
  return <ProjectList projects={projects} />
}

const getProject = graphql`
  query {
    projects: allContentfulProjects {
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
export default Projects
