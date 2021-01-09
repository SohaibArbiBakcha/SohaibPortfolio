import React, { Component } from "react"
import styles from "../css/error.module.css"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import { Link } from "gatsby"
export default class error extends Component {
  render() {
    return (
      <Layout>
        <header className={styles.error}>
          <Banner titel="oops it's a dead end">
            <Link to="/" className="btn-white">
              back to home page
            </Link>
          </Banner>
        </header>
      </Layout>
    )
  }
}
