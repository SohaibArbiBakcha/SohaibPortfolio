import React from "react"
import styles from "../css/banner.module.css"

const Banner = ({ title, text, children }) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <h2>{text}</h2>

      {children}
    </div>
  )
}

export default Banner
