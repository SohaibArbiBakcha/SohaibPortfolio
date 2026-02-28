import React from "react"
import Title from "../Title"
import styled from "styled-components"
import styles from "../../css/about.module.css"
import TimeLine from "./TimeLine"
import profileImg from "../../images/profile.jpg"

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
  return (
    <section className={styles.about}>
      <Title label="// who i am" title="About Me" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={profileImg} alt="Sohaib Arbi Bakcha" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <div className={styles.roleRow}>
            <h3 className={styles.role}>
              Backend Developer &amp; Frontend Developer
            </h3>
            <span className={styles.openToWork}>Open to Work</span>
          </div>
          <p className={styles.company}>
            📍 Morocco &nbsp;·&nbsp; ATNER (ATLAS ENERGIE)
          </p>
          <p className={styles.bio}>
            Full-Stack Developer with solid experience building end-to-end web
            applications — from REST APIs and server-side logic with Node.js
            &amp; Express, to modern reactive UIs with React. I also manage and
            customize ERP systems (Odoo, Sage) and build IoT integrations, GPS
            tracking systems, and automation workflows. Currently open to new
            opportunities.
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
