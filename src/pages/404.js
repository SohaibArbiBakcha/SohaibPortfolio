import React, { Component } from "react"
import i404 from "../images/404.webp"
import styles from "../css/workin.module.css"
export default class error extends Component {
  render() {
    return (
      <div>
        <img src={i404} style={styles.full} alt="" />
      </div>
    )
  }
}
