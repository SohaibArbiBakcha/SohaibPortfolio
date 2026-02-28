import React, { Component } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/Home/About"
import GithubProjects from "../components/Project/GithubProjects"
import ContributionGraph from "../components/ContributionGraph"
import SEO from "../components/SEO"

export default class index extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Hero />
        <About />
        <GithubProjects limit={6} />
        <ContributionGraph />
      </Layout>
    )
  }
}
