import React from "react"
import { StaticQuery, graphql } from "gatsby"

const myQuery = graphql`
  query SecondSQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const RegulerHeader = () => {
  return (
    <StaticQuery
      query={myQuery}
      render={data => {
        console.log(data)
        return (
          <div>
            <h2>title : {data.site.siteMetadata.title}</h2>
            <h5>author : {data.site.siteMetadata.author}</h5>
          </div>
        )
      }}
    />
  )
}

export default RegulerHeader
