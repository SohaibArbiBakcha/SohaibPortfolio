import React from "react"
import styled from "styled-components"
import BackgroundImg from "gatsby-background-image"

const StyledHero = ({ img, className, home, children }) => {
  return (
    <BackgroundImg className={className} home={home} fuild={img}>
      {children}
    </BackgroundImg>
  )
}

export default styled(StyledHero)`
  min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
  background: ${props =>
    props.home ? "linear-gradient(rgba() rgba())" : "none"};
  background-position: center;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
