import React from "react"
import styled from "styled-components"

const Title = ({ title, label, className }) => (
  <div className={className}>
    {label && <span className="label">{label}</span>}
    <h2>
      <span className="bracket">&lt;</span>
      {title}
      <span className="bracket"> /&gt;</span>
    </h2>
    <div className="line" />
  </div>
)

export default styled(Title)`
  text-align: center;
  margin-bottom: 3rem;

  .label {
    display: block;
    font-family: "Fira Code", monospace;
    font-size: 0.72rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #f5e51b;
    opacity: 0.8;
    margin-bottom: 0.75rem;
  }

  h2 {
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    font-weight: 700;
    color: #e8e8e8;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }

  .bracket {
    color: #f5e51b;
    font-weight: 300;
  }

  .line {
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #f5e51b, transparent);
    margin: 0 auto;
    animation: titlePulse 2.5s ease-in-out infinite;
  }

  @keyframes titlePulse {
    0%,
    100% {
      opacity: 0.4;
      width: 40px;
    }
    50% {
      opacity: 1;
      width: 80px;
    }
  }
`
