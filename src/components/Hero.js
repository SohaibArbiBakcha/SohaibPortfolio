import React from "react"
import styled, { keyframes } from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Typed from "react-typed"
import Particles from "react-particles-js"
import socialIcon from "../constants/socialIcon"

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`

const fadeLeft = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to   { opacity: 1; transform: translateX(0); }
`

const bounce = keyframes`
  0%, 100% { transform: translateY(0) translateX(-50%); }
  50%       { transform: translateY(10px) translateX(-50%); }
`

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(245, 229, 27, 0.3); }
  50%       { box-shadow: 0 0 24px rgba(245, 229, 27, 0.7); }
`

const Wrapper = styled.header`
  position: relative;
  min-height: calc(100vh - 62px);
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const ParticlesBg = styled(Particles)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem 1rem;
`

const Greeting = styled.p`
  color: var(--turbo);
  font-size: 1rem;
  letter-spacing: 10px;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  opacity: 0;
  animation: ${fadeLeft} 0.7s ease 0.2s forwards;
`

const Name = styled.h1`
  color: var(--mainWhite);
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  font-weight: 700;
  letter-spacing: 4px;
  margin-bottom: 1rem;
  opacity: 0;
  animation: ${fadeUp} 0.7s ease 0.5s forwards;
`

const RoleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1.75rem;
  opacity: 0;
  animation: ${fadeUp} 0.6s ease 0.8s forwards;
`

const Terminal = styled.div`
  font-family: "Fira Code", "Courier New", monospace;
  font-size: clamp(0.9rem, 2.5vw, 1.15rem);
  color: #ccc;
  letter-spacing: 1px;

  .prompt {
    color: var(--turbo);
    margin-right: 0.5rem;
    user-select: none;
  }

  .typed-cursor {
    color: var(--turbo);
    font-weight: 300;
  }
`

const OpenBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.35);
  color: #22c55e;
  font-size: 0.65rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 0.22rem 0.65rem;
  border-radius: 999px;
  font-family: "Fira Code", monospace;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22c55e;
    animation: heroBlink 1.4s ease-in-out infinite;
    flex-shrink: 0;
  }

  @keyframes heroBlink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
  }
`

const Divider = styled.div`
  width: 60px;
  height: 3px;
  background: var(--turbo);
  margin: 0 auto 1.75rem;
  opacity: 0;
  animation: ${fadeUp} 0.7s ease 1s forwards;
`

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: ${fadeUp} 0.7s ease 1.2s forwards;

  a {
    color: #888;
    font-size: 1.4rem;
    transition: color 0.3s, transform 0.3s;

    &:hover {
      color: var(--turbo);
      transform: translateY(-4px);
    }
  }
`

const CTAWrapper = styled.div`
  opacity: 0;
  animation: ${fadeUp} 0.7s ease 1.4s forwards;

  a {
    display: inline-block;
    padding: 0.85rem 2.5rem;
    border: 2px solid var(--turbo);
    color: var(--turbo);
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 0.85rem;
    font-family: "Poppins", sans-serif;
    transition: background 0.3s, color 0.3s;
    animation: ${glow} 3s ease 2s infinite;

    &:hover {
      background: var(--turbo);
      color: #111;
    }
  }
`

const ScrollArrow = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  color: #555;
  font-size: 1.6rem;
  animation: ${bounce} 1.6s ease infinite;
  cursor: default;
  user-select: none;

  &::after {
    content: "↓";
  }
`

const particlesConfig = {
  particles: {
    number: { value: 55, density: { enable: true, value_area: 900 } },
    color: { value: "#f5e51b" },
    shape: { type: "circle" },
    opacity: { value: 0.12, random: true },
    size: { value: 2.5, random: true },
    line_linked: {
      enable: true,
      distance: 160,
      color: "#f5e51b",
      opacity: 0.07,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.35 } },
      push: { particles_nb: 3 },
    },
  },
  retina_detect: true,
}

const Hero = () => (
  <Wrapper>
    <ParticlesBg params={particlesConfig} />
    <Content>
      <Greeting>Hello, I&apos;m</Greeting>
      <Name>Sohaib Arbi Bakcha</Name>
      <RoleWrapper>
        <Terminal>
          <span className="prompt">{">"}</span>
          <Typed
            strings={[
              "Full-Stack Developer",
              "ERP Solutions Architect",
              "IoT Engineer",
              "Machine Learning Engineer",
            ]}
            typeSpeed={55}
            backSpeed={35}
            backDelay={2200}
            loop
          />
        </Terminal>
        <OpenBadge>Open to Work</OpenBadge>
      </RoleWrapper>
      <Divider />
      <Socials>
        {socialIcon.map((item, i) => (
          <a key={i} href={item.url} target="_blank" rel="noreferrer">
            {item.icon}
          </a>
        ))}
      </Socials>
      <CTAWrapper>
        <AniLink cover bg="#111" direction="up" to="/contact">
          Tell me your idea
        </AniLink>
      </CTAWrapper>
    </Content>
    <ScrollArrow />
  </Wrapper>
)

export default Hero
