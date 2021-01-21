import React from "react"
import Title from "../Title"
import styled from "styled-components"
import photo from "../../images/profile.jpg"
import styles from "../../css/about.module.css"
import TimeLine from "../TimeLine"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const myQuery = graphql`
  {
    fluid: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
const About = ({ className }) => {
  const data = useStaticQuery(myQuery)
  return (
    <section className={styles.about}>
      <Title titel="<About" subtitel="Me/>" />
      <div className={styles.aboutCenter}>
        <article cle className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={data.fluid.childImageSharp.fluid} />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <p>
            My name is Sohaib Arbi Bakcha, I have{" "}
            {new Date().getFullYear() - 1995} Years Old, I live in Morocco
          </p>
        </article>
      </div>
      <TimeLine />
    </section>
  )
}

export default styled(About)`
  background: var(--mainBlack);
`
