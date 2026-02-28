import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/Links"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import socialIcon from "../constants/socialIcon"
import {
  SiReact,
  SiNodeDotJs,
  SiMongodb,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker,
  SiLinux,
  SiGatsby,
  SiGraphql,
} from "react-icons/si"
import { FaMicrochip } from "react-icons/fa"

const floatingIcons = [
  { Icon: SiReact, label: "React" },
  { Icon: SiNodeDotJs, label: "Node.js" },
  { Icon: SiPython, label: "Python" },
  { Icon: SiMongodb, label: "MongoDB" },
  { Icon: SiJavascript, label: "JavaScript" },
  { Icon: SiHtml5, label: "HTML5" },
  { Icon: SiCss3, label: "CSS3" },
  { Icon: SiGit, label: "Git" },
  { Icon: SiDocker, label: "Docker" },
  { Icon: SiLinux, label: "Linux" },
  { Icon: SiGatsby, label: "Gatsby" },
  { Icon: SiGraphql, label: "GraphQL" },
  { Icon: FaMicrochip, label: "IoT" },
]

const Footer = () => (
  <footer className={styles.footer}>
    {/* Animated background icons */}
    <div className={styles.bg} aria-hidden="true">
      {floatingIcons.map(({ Icon, label }, i) => (
        <span
          key={label}
          className={styles.floatIcon}
          style={{ "--i": i }}
          title={label}
        >
          <Icon />
        </span>
      ))}
    </div>

    {/* Content */}
    <div className={styles.inner}>
      <div className={styles.links}>
        {links.map((item, index) => (
          <AniLink cover bg="#111" direction="right" to={item.path} key={index}>
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
        copyright &copy; <b>Sohaib Arbi Bakcha</b> {new Date().getFullYear()} —
        all rights reserved
      </div>
    </div>
  </footer>
)

export default Footer
