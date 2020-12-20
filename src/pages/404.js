import React, { Component } from "react"
import img from "../images/404.webp"
import styles from "../css/workin.module.css"
export default class error extends Component {
  render() {
    return (
      <div>
        <img src={img} className={styles.full} alt="" />
      </div>
    )
  }
}
