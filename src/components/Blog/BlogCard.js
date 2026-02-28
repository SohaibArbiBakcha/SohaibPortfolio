import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"
import styles from "../../css/blog-card.module.css"

const BlogCard = ({ blog }) => {
  const { slug, title, image, published } = blog

  // Some builds (SSR) can receive `image` as null. Guard against it to avoid
  // build-time crashes (see Netlify build error: "Cannot read property 'fluid' of null").
  const hasFluid =
    image &&
    (image.fluid || (image.childImageSharp && image.childImageSharp.fluid))

  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        {hasFluid ? (
          <Image
            fluid={image.fluid || image.childImageSharp.fluid}
            className={styles.img}
            alt={`blog about ${title}`}
          />
        ) : (
          // Fallback element when image data is missing during SSR/build.
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
