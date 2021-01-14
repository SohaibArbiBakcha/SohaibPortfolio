import React from "react"
import Title from "../Title"
import styled from "styled-components"

const About = ({ className }) => {
  return (
    <div className={className}>
      <Title titel="<About" subtitel="Me/>" />
      Hello from About section
    </div>
  )
}

export default styled(About)`
  background: var(--mainBlack);
`
