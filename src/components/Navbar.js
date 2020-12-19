import React, { useState } from "react"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons"
import links from "../constants/Links"
import socialIcon from "../constants/socialIcon"
import logo from "../images/logo.svg"

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
          <button type="button" className={styles.navBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
