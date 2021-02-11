import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import BlogList from "../components/Blog/BlogList"
import SEO from "../components/SEO"

class blog extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Blog" />
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />

        {/* <h1>title : {this.props.data.site.siteMetadata.title}</h1> */}
        <BlogList />
      </Layout>
    )
  }
}
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
