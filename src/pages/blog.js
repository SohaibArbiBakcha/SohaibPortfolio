import React, { Component } from "react"
import Layout from "../components/Layout"
import PageBanner from "../components/PageBanner"
import BlogList from "../components/Blog/BlogList"
import SEO from "../components/SEO"

class blog extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Blog" />
        <PageBanner label="// thoughts & tutorials" title="Blog" />
        <BlogList />
      </Layout>
    )
  }
}

export default blog
