import React, { Component } from "react"
import styles from "../css/error.module.css"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import SEO from "../components/SEO"
export default class error extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Error" />
        <header className={styles.error}>
          <Banner title="oops it's a dead end">
            <Link to="/" className="btn-white">
              back to home page
            </Link>
          </Banner>
        </header>
      </Layout>
    )
  }
}
