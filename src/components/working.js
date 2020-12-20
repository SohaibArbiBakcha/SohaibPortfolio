import React from "react"
import img from "../images/working.png"
import styles from "../css/workin.module.css"

const working = () => {
  return (
    <div>
      <img src={img} alt="facking pic" className={styles.displayed} />
    </div>
  )
}

export default working
