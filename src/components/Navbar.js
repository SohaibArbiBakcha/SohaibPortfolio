import React, { useState } from "react"
import styles from "../css/navbar.module.css"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import socialIcon from "../constants/socialIcon"
import logo from "../images/logo.svg"
import Links from "../constants/Links"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  console.log(isOpen)
  return (
    <nav className={styles.nabvar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="Portfolio logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {Links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcon.map((item, index) => {
            return (
              <a
                key={index}
                href={index.url}
                target="_blank"
                rel="noreferrer noopner"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
