import React, { Component } from "react"
import Layout from "../components/Layout"
import PageBanner from "../components/PageBanner"
import GithubProjects from "../components/Project/GithubProjects"
import SEO from "../components/SEO"

export default class project extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Projects" />
        <PageBanner label="// what i've built" title="Projects" />
        <GithubProjects />
      </Layout>
    )
  }
}
