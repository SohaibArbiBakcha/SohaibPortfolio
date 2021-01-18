import React, { Component } from "react"
import Layout from "../components/Layout"
import Working from "../components/working"
// import { graphql } from "gatsby"

class about extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Layout>
          <Working />
          {/* <h1>title : {this.props.data.site.siteMetadata.title}</h1> */}
        </Layout>
      </div>
    )
  }
}
// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         description
//         author
//       }
//     }
//   }
// `

export default about
