import React from "react"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Image from "gatsby-image"
import BlogCard from "../components/Blog/BlogCard"

const BlogTemp = ({ data }) => {
  const { title, published, text } = data.post

  const images = text.references.filter(image => (image.fluid ? image : null))
  const posts = text.references.filter(post => (post.slug ? post : null))

  const options = {
    renderNode: {
      "embedded-asset-block": () => {
        //console.log(index)
        return (
          <div className={styles.imgContainer}>
            <Image
              fluid={images[0].fluid}
              className={styles.imgg}
              alt={title}
            />
          </div>
        )
      },
      "embedded-entry-block": () => {
        return (
          <section className={styles.blogCard}>
            <h1>this is other posts :</h1>
            <div className={styles.blogCenter}>
              {posts.map(post => {
                return <BlogCard key={text.references.id} blog={post} />
              })}
            </div>
          </section>
        )
      },
    },
  }

  return (
    <Layout>
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
          ... on ContentfulPost {
            id: contentful_id
            slug
            title
            image {
              fluid {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
            published(formatString: "MMMM Do , YYYY")
          }
        }
      }
    }
  }
`

export default BlogTemp
