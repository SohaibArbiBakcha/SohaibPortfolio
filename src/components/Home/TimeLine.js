import React, { useRef, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import Title from "../Title"
import { MdWork, MdSchool } from "react-icons/md"
import { FaCode, FaBuilding } from "react-icons/fa"

const entries = [
  {
    date: "2022 – Present",
    live: true,
    label: "WORK",
    title: "Full-Stack Developer & ERP Solutions Architect",
    subtitle: "ATNER · ATLAS ENERGIE, Morocco",
    description:
      "Building MERN stack applications and custom Odoo modules for French business compliance. Implemented facial recognition access control (Raspberry Pi 4 + ESP32 + RFID), GPS tracking (Traccar), cheque/card payment systems, and automated PowerShell database backups.",
    tags: [
      "React",
      "Node.js",
      "Odoo",
      "MongoDB",
      "ESP32",
      "Traccar",
      "PowerShell",
      "Python",
    ],
    icon: <FaBuilding />,
    type: "work",
    side: "right",
  },
  {
    date: "Ongoing",
    live: true,
    label: "EDUCATION",
    title: "Bachelor's in IT Management & Engineering",
    subtitle: "ISMAGI, Morocco",
    description:
      "Pursuing higher education combining IT management, business administration, and computer science engineering.",
    tags: ["Management", "IT Engineering", "Computer Science"],
    icon: <MdSchool />,
    type: "edu",
    side: "left",
  },
  {
    date: "2021 – 2022",
    live: false,
    label: "WORK",
    title: "Freelance Developer & Self-Learning",
    subtitle: "Remote",
    description:
      "Delivered medium-scale web projects. Deepened expertise in the MERN stack, REST APIs, responsive design, and modern JS tooling.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
    icon: <FaCode />,
    type: "work",
    side: "right",
  },
  {
    date: "2017 – 2020",
    live: false,
    label: "EDUCATION",
    title: "IT Development Techniques Diploma",
    subtitle: "ISTA NTIC · OFPPT, Rabat",
    description:
      "Solid grounding in enterprise programming. JAVA OOP, JSP, JEE, Oracle SGBD — the technical foundation everything else is built on.",
    tags: ["Java", "JSP", "JEE", "Oracle SGBD", "OOP"],
    icon: <MdSchool />,
    type: "edu",
    side: "left",
  },
  {
    date: "2017",
    live: false,
    label: "EDUCATION",
    title: "Baccalaureate — Science",
    subtitle: "Hassan II High School, Rabat",
    description:
      "Scientific baccalaureate providing the analytical and mathematical groundwork for an IT career.",
    tags: ["Mathematics", "Physics", "Science"],
    icon: <MdSchool />,
    type: "edu",
    side: "right",
  },
]

/* ── Animations ── */
const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(245, 229, 27, 0.5); }
  50%       { box-shadow: 0 0 0 8px rgba(245, 229, 27, 0); }
`

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
`

const liveDot = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.5); opacity: 0.5; }
`

/* ── Component ── */
const TimeLine = () => {
  const cardRefs = useRef([])
  const iconRefs = useRef([])
  const lineRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let gsap, ScrollTrigger
    try {
      gsap = require("gsap").gsap || require("gsap")
      ScrollTrigger = require("gsap/ScrollTrigger").ScrollTrigger
    } catch (e) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)
    const kills = []

    /* 1 — Line draws itself downward */
    if (lineRef.current) {
      const t = gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 80%",
        },
      })
      kills.push(t.scrollTrigger)
    }

    /* 2 — Icon circles pop in with scale */
    iconRefs.current.forEach((icon, i) => {
      if (!icon) return
      const t = gsap.from(icon, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(2)",
        delay: i * 0.12,
        scrollTrigger: {
          trigger: icon,
          start: "top 88%",
        },
      })
      kills.push(t.scrollTrigger)
    })

    /* 3 — Cards slide in from their side */
    cardRefs.current.forEach((card, i) => {
      if (!card) return
      const fromLeft = entries[i].side === "left"
      const t = gsap.from(card, {
        x: fromLeft ? -80 : 80,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      })
      kills.push(t.scrollTrigger)
    })

    return () => kills.forEach(t => t && t.kill())
  }, [])

  return (
    <Wrapper ref={wrapperRef}>
      <Title titel="<my" subtitel="experience/>" />
      <Track>
        <Line ref={lineRef} />
        {entries.map((entry, i) => (
          <Row key={i} side={entry.side}>
            <Spacer />
            <IconWrap>
              <IconCircle
                type={entry.type}
                live={entry.live}
                ref={el => (iconRefs.current[i] = el)}
              >
                {entry.icon}
              </IconCircle>
            </IconWrap>
            <Card
              side={entry.side}
              type={entry.type}
              ref={el => (cardRefs.current[i] = el)}
            >
              <CardTop>
                <DateLabel>{entry.date}</DateLabel>
                <TypeBadge type={entry.type}>{entry.label}</TypeBadge>
              </CardTop>
              {entry.live && (
                <LiveBadge>
                  <LiveDot />
                  CURRENT
                </LiveBadge>
              )}
              <CardTitle>{entry.title}</CardTitle>
              <Subtitle>{entry.subtitle}</Subtitle>
              <Desc>{entry.description}</Desc>
              <Tags>
                {entry.tags.map((tag, j) => (
                  <Tag key={j}>{tag}</Tag>
                ))}
              </Tags>
            </Card>
          </Row>
        ))}
      </Track>
    </Wrapper>
  )
}

/* ── Styled Components ── */

const Wrapper = styled.div`
  padding: 3rem 1.5rem 5rem;
  position: relative;
  z-index: 2;
`

const Track = styled.div`
  position: relative;
  max-width: 960px;
  margin: 0 auto;
`

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(245, 229, 27, 0.5) 6%,
    rgba(245, 229, 27, 0.5) 94%,
    transparent 100%
  );
  transform: translateX(-50%);

  @media (max-width: 700px) {
    left: 22px;
  }
`

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 3.5rem;
  flex-direction: ${({ side }) => (side === "left" ? "row-reverse" : "row")};

  @media (max-width: 700px) {
    flex-direction: row;
    padding-left: 60px;
  }
`

const Spacer = styled.div`
  flex: 1;

  @media (max-width: 700px) {
    display: none;
  }
`

const IconWrap = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  padding-top: 1.1rem;
  z-index: 2;
  margin: 0 -22px;

  @media (max-width: 700px) {
    position: absolute;
    left: 0;
    margin: 0;
    padding-top: 1rem;
  }
`

const IconCircle = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #141414;
  border: 2px solid ${({ type }) => (type === "work" ? "#f5e51b" : "#666")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ type }) => (type === "work" ? "#f5e51b" : "#999")};
  font-size: 1rem;
  transition: box-shadow 0.3s;
  animation: ${({ live }) => (live ? pulse : "none")} 2.5s ease infinite;
`

const Card = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #1c1c1c 0%, #161616 100%);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-left: ${({ side, type }) =>
    side === "right"
      ? `3px solid ${type === "work" ? "#f5e51b" : "#555"}`
      : "1px solid rgba(255,255,255,0.05)"};
  border-right: ${({ side, type }) =>
    side === "left"
      ? `3px solid ${type === "work" ? "#f5e51b" : "#555"}`
      : "1px solid rgba(255,255,255,0.05)"};
  border-radius: 6px;
  padding: 1.4rem 1.6rem;
  margin: ${({ side }) => (side === "left" ? "0 3rem 0 0" : "0 0 0 3rem")};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 40px rgba(245, 229, 27, 0.07);
  }

  @media (max-width: 700px) {
    margin: 0;
    border-left: 3px solid
      ${({ type }) => (type === "work" ? "#f5e51b" : "#555")};
    border-right: 1px solid rgba(255, 255, 255, 0.05);
  }
`

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`

const DateLabel = styled.span`
  font-size: 0.7rem;
  letter-spacing: 2.5px;
  color: #f5e51b;
  text-transform: uppercase;
  font-family: "Fira Code", monospace;
`

const TypeBadge = styled.span`
  font-size: 0.6rem;
  letter-spacing: 2px;
  padding: 0.15rem 0.55rem;
  border-radius: 2px;
  text-transform: uppercase;
  font-family: "Fira Code", monospace;
  background: ${({ type }) =>
    type === "work" ? "rgba(245,229,27,0.1)" : "rgba(150,150,150,0.1)"};
  color: ${({ type }) => (type === "work" ? "#f5e51b" : "#888")};
  border: 1px solid
    ${({ type }) =>
      type === "work" ? "rgba(245,229,27,0.3)" : "rgba(150,150,150,0.2)"};
`

const LiveBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.6rem;
  letter-spacing: 2px;
  color: #4ade80;
  text-transform: uppercase;
  font-family: "Fira Code", monospace;
  margin-bottom: 0.6rem;
  animation: ${blink} 2.5s ease infinite;
`

const LiveDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  display: inline-block;
  animation: ${liveDot} 1.5s ease infinite;
`

const CardTitle = styled.h3`
  color: #f0f0f0;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  letter-spacing: 0.3px;
  line-height: 1.4;
`

const Subtitle = styled.p`
  color: #666;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  margin-bottom: 0.85rem;
`

const Desc = styled.p`
  color: #999;
  font-size: 0.875rem;
  line-height: 1.75;
  margin-bottom: 1rem;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`

const Tag = styled.span`
  font-size: 0.65rem;
  padding: 0.2rem 0.6rem;
  border-radius: 2px;
  letter-spacing: 1px;
  font-family: "Fira Code", monospace;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #777;
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: #f5e51b;
    border-color: rgba(245, 229, 27, 0.3);
  }
`

export default TimeLine
