import React, { Component } from "react"
import styles from "../css/footer.module.css"
import links from "../constants/Links"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import socialIcon from "../constants/socialIcon"

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.links}>
          {links.map((item, index) => (
            <AniLink swipe to={item.path} key={index}>
              {item.name}
            </AniLink>
          ))}
        </div>
        <div className={styles.icons}>
          {socialIcon.map((icon, index) => (
            <a href={icon.url} key={index} target="_blank" rel="noreferrer">
              {icon.icon}
            </a>
          ))}
        </div>
        <div className={styles.copyright}>
          copyright &copy; <b> BeenAir </b> {new Date().getFullYear()} all right
          reserved
        </div>
      </footer>
    )
  }
}
