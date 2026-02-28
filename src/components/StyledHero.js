import React from "react"
import styled from "styled-components"

// Stub — gatsby-background-image removed. No longer used in any page.
const StyledHero = ({ className, children }) => (
  <div className={className}>{children}</div>
)

export default styled(StyledHero)`
  min-height: 50vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
