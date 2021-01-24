import React from "react"
import styled from "styled-components"

const Title = ({ titel, subtitel, className }) => {
  return (
    <div className={className}>
      <h4>
        <span className="title">{titel}</span>
        <span>{subtitel}</span>
      </h4>
    </div>
  )
}

export default styled(Title)`
  text-transform: uppercase;
  font-size: 1.7rem;
  margin-bottom: 2rem;

  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--turbo);
  }
  .title {
    color: var(--mainWhite);
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      font-size: 2.3rem;
      margin: 0 0.35rem;
    }
  }
`
