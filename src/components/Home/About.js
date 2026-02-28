import React from "react"
import Title from "../Title"
import styled from "styled-components"
import styles from "../../css/about.module.css"
import TimeLine from "./TimeLine"
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

const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Odoo",
  "Sage ERP",
  "Python",
  "JavaScript",
  "Raspberry Pi",
  "ESP32",
  "IoT",
  "Traccar",
  "PowerShell",
  "HTML5 / CSS3",
  "Bootstrap",
  "SASS",
]

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
          <h3 className={styles.role}>
            Full-Stack Developer &amp; ERP Solutions Architect
          </h3>
          <p className={styles.company}>
            📍 Morocco &nbsp;·&nbsp; ATNER (ATLAS ENERGIE)
          </p>
          <p className={styles.bio}>
            I specialize in building robust enterprise solutions that bridge
            modern web technologies with traditional ERP systems. Currently
            developing cutting-edge MERN stack applications while managing and
            customizing Odoo &amp; Sage ERP platforms — including IoT
            integrations, GPS tracking systems, facial recognition access
            control, and automated PowerShell workflows.
          </p>
          <div className={styles.skillsGrid}>
            {skills.map((s, i) => (
              <span key={i} className={styles.skill}>
                {s}
              </span>
            ))}
          </div>
          <a
            href="SohaibArbiBakcha_CV.pdf"
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            My Resume
          </a>
        </article>
      </div>
      <TimeLine />
    </section>
  )
}

export default styled(About)`
  background: var(--mainBlack);
`
