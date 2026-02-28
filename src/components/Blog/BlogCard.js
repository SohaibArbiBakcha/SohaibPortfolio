import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../../css/blog-card.module.css"

const BlogCard = ({ blog }) => {
  const { slug, title, image, published } = blog
  const imgUrl = image && image.file && image.file.url

  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        {imgUrl ? (
          <img
            src={`https:${imgUrl}`}
            className={styles.img}
            alt={`blog about ${title}`}
          />
        ) : (
          <div className={styles.img} aria-hidden="true" />
        )}
        <AniLink
          cover
          bg="#111"
          direction="right"
          className={styles.link}
          to={`/blog${slug}`}
        >
          read more
        </AniLink>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default BlogCard
