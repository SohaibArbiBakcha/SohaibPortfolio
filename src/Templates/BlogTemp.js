import React from "react"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const BlogTemp = ({ data }) => {
  const { title, published, text } = data.post
  const images = text.references
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div className={styles.imgContainer}>
            <Image fluid={images[0].fluid} className={styles.img} alt={title} />
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <SEO title={title} />
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4> published at : {published}</h4>
          <article>{renderRichText(text, options)}</article>
          <AniLink swipe to="/blog" className="btn-primary">
            All post
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do , YYYY")
      text {
        raw
        references {
          ... on ContentfulAsset {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default BlogTemp
