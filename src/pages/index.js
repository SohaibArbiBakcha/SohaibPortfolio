import React, { Component } from "react"
import Layout from "../components/Layout"
import img from "../images/stillWorking.jpg"
import styles from "../css/workin.module.css"
export default class index extends Component {
  render() {
    return (
      <Layout>
        <h1 className={styles.center}>Sohaib Arbi Portfolio </h1>
        <img src={img} alt="facking pic" className={styles.displayed} />
      </Layout>
    )
  }
}
