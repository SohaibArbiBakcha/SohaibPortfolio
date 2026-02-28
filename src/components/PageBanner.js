import React from "react"
import styles from "../css/page-banner.module.css"

const PageBanner = ({ label, title }) => (
  <section className={styles.banner}>
    {/* Grid background */}
    <div className={styles.grid} aria-hidden="true" />

    <div className={styles.content}>
      <span className={styles.label}>{label}</span>
      <h1 className={styles.title}>
        <span className={styles.bracket}>&lt;</span>
        {title}
        <span className={styles.bracket}> /&gt;</span>
      </h1>
      <div className={styles.line} />
    </div>
  </section>
)

export default PageBanner
