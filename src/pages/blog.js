import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

class blog extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Layout>
          <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />

          {/* <h1>title : {this.props.data.site.siteMetadata.title}</h1> */}
        </Layout>
      </div>
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
