import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"

const ProjectTemp = ({ data }) => {
  const {
    projectName,
    description: { description },
    projectImages,
  } = data.project

  const [mainImage, ...Images] = projectImages

  return (
    <Layout>
      <SEO title={projectName} />
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {Images.map((item, index) => {
              return <Img key={index} fluid={item.fluid} />
            })}
          </div>
          <h2>{projectName}</h2>
          <p className={styles.desc}>{description}</p>
        </div>
        <AniLink swipe to="/project" className="btn-primary">
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
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      createBy {
        test
      }
    }
  }
`

export default ProjectTemp
