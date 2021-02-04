import React from "react"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const BlogTemp = ({ data }) => {
  const { title, published } = data.post

  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4> published at : {published}</h4>
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
      #  text {
      #     json
      #   }
    }
  }
`

export default BlogTemp
