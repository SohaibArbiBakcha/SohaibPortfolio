import React from "react"
import { FaSchool } from "react-icons/fa"
import { MdWork } from "react-icons/md"
import { SiGooglescholar } from "react-icons/si"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import styled from "styled-components"
import Title from "./Title"

const TimeLine = () => {
  return (
    <MyTimeLine>
      <Title titel="<my" subtitel="experience/>" />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work timeLineElemen"
          contentStyle={{
            background: "#B3B3B3",
            color: "#000000",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(175, 175, 175)" }}
          date="present"
          dateClassName="dateColor"
          iconStyle={{ background: "var(--mainBlack)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">FreeLancing</h3>
          <h4 className="vertical-timeline-element-subtitle">
            and Self-learning
          </h4>
          <p>
            Worked at some medium porjects, &nbsp;Started learning to become a
            MERN Stack Developer
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2020"
          dateClassName="dateColor"
          contentStyle={{
            background: "#B3B3B3",
            color: "#000000",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(175, 175, 175)" }}
          iconStyle={{ background: "var(--mainBlack)", color: "#fff" }}
          icon={<SiGooglescholar />}
        >
          <h3 className="vertical-timeline-element-title">
            IT Development Techniques Diploma
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            ISTA NTIC, Rabat
          </h4>
          <p>JAVA OOP,JSP,JEE,Oracle SGBD</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work timeLineElemen"
          contentStyle={{
            background: "#B3B3B3",
            color: "#000000",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(175, 175, 175)" }}
          date="2017"
          dateClassName="dateColor"
          iconStyle={{ background: "var(--mainBlack)", color: "#fff" }}
          icon={<SiGooglescholar />}
        >
          <h3 className="vertical-timeline-element-title">
            Baccalaureate option science
          </h3>
          <br />
          <h4 className="vertical-timeline-element-subtitle">
            Hassan II high school, Rabat
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </MyTimeLine>
  )
}

const MyTimeLine = styled.div`
  padding: 2rem;

  @media (min-width: 1170px) {
    .dateColor {
      color: white;
    }
  }
`

export default TimeLine
