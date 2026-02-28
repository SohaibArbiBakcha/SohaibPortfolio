import React from "react"
import styles from "../../css/contact.module.css"

const Contact = () => (
  <section className={styles.contact}>
    <div className={styles.center}>
      {/* Left info panel */}
      <div className={styles.info}>
        <p className={styles.tagline}>// let&apos;s work together</p>
        <p>
          Whether you&apos;re looking for an ERP implementation partner, a
          full-stack developer, an IoT collaborator, or just want to say hi
          &mdash; I&apos;d love to hear from you.
        </p>
        <div className={styles.contactItems}>
          <div className={styles.contactItem}>
            <span>📍</span>
            <span>Morocco</span>
          </div>
          <div className={styles.contactItem}>
            <span>🏢</span>
            <span>ATNER · ATLAS ENERGIE</span>
          </div>
          <div className={styles.contactItem}>
            <span>💼</span>
            <span>Open to ERP, Full-Stack &amp; IoT projects</span>
          </div>
        </div>
      </div>

      {/* Right form */}
      <form
        action="https://submit-form.com/jhunDdQi"
        target="_self"
        className={styles.form}
      >
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className={styles.formControl}
            placeholder="Your name"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className={styles.formControl}
            placeholder="your@email.com"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="6"
            className={styles.formControl}
            placeholder="Tell me about your project or idea..."
          />
        </div>
        <input type="submit" value="Send Message" className={styles.submit} />
      </form>
    </div>
  </section>
)

export default Contact
