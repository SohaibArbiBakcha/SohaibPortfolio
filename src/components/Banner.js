import React from "react"
import styles from "../css/banner.module.css"
import Typed from "react-typed"
const Banner = ({ text, children }) => {
  return (
    <div id="" className={styles.banner}>
      <h1>Hello, I'm Sohaib Bakcha</h1>
      <h2>
        <Typed
          strings={[
            "Front End Developer",
            "Back End Developer",
            "Open To Work",
          ]}
          typeSpeed={40}
          backSpeed={60}
          stopDelay={5000}
          typeSpeed={40}
          loop={true}
        />
      </h2>
      <p>{text}</p>
      {children}
    </div>
  )
}

export default Banner
