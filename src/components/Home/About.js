import React from "react"
import Title from "../Title"
import styled from "styled-components"
import photo from "../../images/profile.jpg"
import styles from "../../css/about.module.css"
const About = ({ className }) => {
  return (
    <section className={styles.about}>
      <Title titel="<About" subtitel="Me/>" />
      <div className={styles.aboutCenter}>
        <article cle className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={photo} alt="Sohaib Arbi Bakcha" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <p>
            My name is Sohaib Arbi Bakcha, I have{" "}
            {new Date().getFullYear() - 1995} Years Old, I live in Morocco
          </p>
          <p>
            I started learning Programing in 2017, If you wanna know more about
            me press the button blow
          </p>
          <button type="button" className="btn-primary">
            Know More
          </button>
        </article>
      </div>
    </section>
  )
}

export default styled(About)`
  background: var(--mainBlack);
`
