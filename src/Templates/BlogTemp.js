import React from "react"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import SEO from "../components/SEO"

const BlogTemp = ({ data }) => {
  const { title, published, text } = data.post
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const asset = node.data.target
        const url = asset && asset.file && asset.file.url
        if (!url) return null
        return (
          <div className={styles.imgContainer}>
            <img src={`https:${url}`} className={styles.img} alt={title} />
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
          <div className={styles.meta}>
            <span className={styles.date}>📅 {published}</span>
          </div>
          <h1>{title}</h1>
          <article>{renderRichText(text, options)}</article>
          <div className={styles.backRow}>
            <AniLink
              cover
              bg="#111"
              direction="right"
              to="/blog"
              className="btn-primary"
            >
              ← All Posts
            </AniLink>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default BlogTemp
