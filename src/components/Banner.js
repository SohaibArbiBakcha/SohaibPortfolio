import React from "react"
import styles from "../css/banner.module.css"

const Banner = ({ titel, text, children }) => {
  return (
    <div id="" className={styles.banner}>
      <h1>{titel}</h1>
      <p>{text}</p>
      {children}
    </div>
  )
}

export default Banner
