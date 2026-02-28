import React from "react"
import BlogCard from "./BlogCard"
import styles from "../../css/blog.module.css"
import { useStaticQuery, graphql } from "gatsby"

const getPost = graphql`
  query {
    posts: allContentfulPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id: contentful_id
          title
          slug
          published(formatString: "MMMM Do, yyyy")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const BlogList = () => {
  const { posts } = useStaticQuery(getPost)
  return (
    <section className={styles.blog}>
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogList
