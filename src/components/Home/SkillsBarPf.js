import React from "react"
import SkillBar from "react-skillbars"
import styled from "styled-components"
import Title from "../Title"
const SkillsBar = () => {
  const skills = [
    {
      type: "Javascript",
      level: 60,
      color: {
        bar: "#f7ca18",
        title: {
          text: "#000",
          background: "#f5e51b",
        },
      },
    },
    {
      type: "Java",
      level: 40,
      color: {
        bar: "#d64541",
        title: {
          background: "#f03434",
        },
      },
    },
    {
      type: "html",
      level: 90,
      color: {
        bar: "#f89406",
        title: {
          background: "#e87e04",
        },
      },
    },
    {
      type: "SQL",
      level: 80,
      color: {
        bar: "#23cba7",
        title: {
          background: "#23cba7",
          text: "#000",
        },
      },
    },
    {
      type: "CSS",
      level: 60,
      color: {
        bar: "#1e8bc3",
        title: {
          background: "#1f3a93",
        },
      },
    },
    {
      type: "React",
      level: 55,
      color: {
        bar: "#22a7f0",
        title: {
          background: "#2c82c9",
        },
      },
    },
    {
      type: "Firebase",
      level: 20,
      color: {
        bar: "#f9bf3b",
        title: {
          background: "#f9690e",
        },
      },
    },
    {
      type: "Bootstrap",
      level: 45,
      color: {
        bar: "#947cb0",
        title: {
          background: "#674172",
        },
      },
    },
  ]

  return (
    <Skill>
      <Title titel="<my" subtitel="Skills/>" />
      <div className="skillContiner">
        <SkillBar className="skill" skills={skills} animationDelay={500} />
      </div>
    </Skill>
  )
}

const Skill = styled.div`
  div.skillContiner {
    margin: auto 25%;
  }
  background: var(--mainBlack);
  @media (max-width: 992px) {
    div.skillContiner {
      margin: auto 2rem;
    }
  }
`

export default SkillsBar
