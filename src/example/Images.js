import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/connectBcg.jpeg"
import styled from "styled-components"
import Img from "gatsby-image"

const myQuerys = graphql`
  {
    fixed: file(relativePath: { eq: "simpleHero.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    fluid: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(myQuerys)
  console.log(data)
  return (
    <Wrapper>
      <article>
        <h3>bacis Img</h3>
        <img src={img} className="basic" />
      </article>
      <article>
        <h3>fixed Img / blur</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>fluid Img / svg</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;

  article {
    border: 3px solid black;
    padding: 1rem 0;
  }

  .basic {
    width: 100%;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`

export default Images
