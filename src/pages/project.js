import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Projects from "../components/Project/Projects"
import SEO from "../components/SEO"

export default class project extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Project" />
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />
        <Projects />
      </Layout>
    )
  }
}
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "simpleHero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
