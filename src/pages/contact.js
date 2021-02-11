import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"
// import Images from "../example/Images"
export default function contact({ data }) {
  return (
    <div>
      <Layout>
        <SEO title="Contact" />
        <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
        <Contact />
        {/* <Images /> */}
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "ContactImg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
