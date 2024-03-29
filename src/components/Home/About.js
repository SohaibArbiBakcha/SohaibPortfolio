import React from "react"
import Title from "../Title"
import styled from "styled-components"
import styles from "../../css/about.module.css"
import TimeLine from "./TimeLine"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
// import SkillsBar from "./skills-BarPf"

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
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={data.fluid.childImageSharp.fluid} />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <p>
            Sohaib Arbi Bakcha is a junior Developer, he has{" "}
            {new Date().getFullYear() - 1995} Years Old, He lives in Morocco
          </p>
          <p>
            He Start IT development in 2017 and now trying to develop his skills
            by self-learning and freelancing
          </p>

          <a
            // href="https://drive.google.com/file/d/1VLtlwldv5FAwUD19Qf0q9miXhuZ7_oGW/view"
            href="SohaibArbiBakcha_CV.pdf"
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            My resume
          </a>
        </article>
      </div>

      <TimeLine />
      {/* <SkillsBar /> */}
    </section>
  )
}

export default styled(About)`
  background: var(--mainBlack);
`
