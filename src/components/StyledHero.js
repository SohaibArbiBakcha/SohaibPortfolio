import React from "react"
import styled from "styled-components"
import BackgroundImg from "gatsby-background-image"

const StyledHero = ({ img, className, home, children }) => {
  return (
    <BackgroundImg className={className} home={home} fluid={img}>
      {children}
    </BackgroundImg>
  )
}

export default styled(StyledHero)`
  min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
  /* filter: grayscale(100%); */
  background: linear-gradient(
    0deg,
    rgba(34, 34, 34, 1) 4%,
    rgba(34, 34, 34, 0.9) 20%,
    rgba(96, 96, 96, 0.5) 52%,
    rgba(255, 255, 255, 0.2) 100%
  );
  /* background: ${props =>
    props.home ? "linear-gradient(rgba() rgba())" : "none"};
  filter: grayscale(100%); */
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
