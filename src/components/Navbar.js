import React, { useState } from "react"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import socialIcon from "../constants/socialIcon"
import Links from "../constants/Links"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Logo = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="SB logo"
  >
    <rect width="100" height="100" rx="20" fill="#272727" />
    <path
      d="M30 30 L20 50 L30 70"
      stroke="#f5e51b"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M70 30 L80 50 L70 70"
      stroke="#f5e51b"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <text
      x="50%"
      y="58%"
      textAnchor="middle"
      fontFamily="Fira Code, monospace"
      fontSize="28"
      fill="#fff"
    >
      {"{ SB }"}
    </text>
  </svg>
)

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => setNav(open => !open)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink
            cover
            bg="#111"
            direction="right"
            to="/"
            className={styles.logoLink}
          >
            <Logo />
          </AniLink>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen ? `${styles.navLinks} ${styles.showNav}` : styles.navLinks
          }
        >
          {Links.map((item, index) => (
            <li key={index}>
              <AniLink cover bg="#111" direction="right" to={item.path}>
                {item.name}
              </AniLink>
            </li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcon.map((item, index) => (
            <a key={index} href={item.url} target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
