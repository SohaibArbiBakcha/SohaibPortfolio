import React from "react"
import styled from "styled-components"
const skillCompenet = ({ className, label, pourcent }) => {
  return (
    <div className={className} pourcent={pourcent}>
      <div className="bar">
        <div className="info">
          <span>{label}</span>
        </div>
        <div className="progress-line">
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default styled(skillCompenet)`
  display: flex;
  .skill-bars .bar {
    margin: 20px 0;
  }
  .skill-bars .bar:first-child {
    margin-top: 0px;
  }
  .skill-bars .bar .info {
    margin-bottom: 5px;
  }
  .skill-bars .bar .info span {
    font-weight: 500;
    font-size: 17px;
    opacity: 0;
    animation: showText 0.5s 1s linear forwards;
  }
  @keyframes showText {
    100% {
      opacity: 1;
    }
  }
  .bar .progress-line {
    height: 10px;
    width: 80%;
    background: #f0f0f0;
    position: relative;
    transform: scaleX(0);
    transform-origin: left;
    border-radius: 10px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05),
      0 1px rgba(255, 255, 255, 0.8);
    animation: animate 1s cubic-bezier(1, 0, 0.5, 1) forwards;
  }
  @keyframes animate {
    100% {
      transform: scaleX(1);
    }
  }
  .bar .progress-line span {
    height: 100%;
    position: absolute;
    border-radius: 10px;
    transform: scaleX(0);
    transform-origin: left;
    background: #6665ee;
    animation: animate 1s 1s cubic-bezier(1, 0, 0.5, 1) forwards;
  }
  .bar .progress-line span {
    width: ${props => (props.pourcent ? props.pourcent : "none")};
  }

  .progress-line span::before {
    position: absolute;
    content: "";
    top: -10px;
    right: 0;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-bottom-width: 0px;
    border-right-width: 0px;
    border-top-color: #000;
    opacity: 0;
    animation: showText2 0.5s 1.5s linear forwards;
  }
  .progress-line span::after {
    position: absolute;
    top: -28px;
    right: 0;
    font-weight: 500;
    background: #000;
    color: #fff;
    padding: 1px 8px;
    font-size: 12px;
    border-radius: 3px;
    opacity: 0;
    animation: showText2 0.5s 1.5s linear forwards;
  }
  @keyframes showText2 {
    100% {
      opacity: 1;
    }
  }
  .progress-line span::after {
    content: ${props => (props.pourcent ? props.pourcent : "none")};
  }
`
