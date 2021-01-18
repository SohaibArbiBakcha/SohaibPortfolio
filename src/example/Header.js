import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const myQuery = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(myQuery)

  console.log(siteMetadata)
  return (
    <div>
      <h3>title:{siteMetadata.title}</h3>
      <h3>description:{siteMetadata.description}</h3>
    </div>
  )
}

export default Header
