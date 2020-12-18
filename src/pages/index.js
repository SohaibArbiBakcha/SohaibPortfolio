import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default class index extends Component {
  render() {
    return (
      <Layout>
        <h5>Hello World</h5>
        <Link to="/blog">Go to Blog</Link>
      </Layout>
    )
  }
}
