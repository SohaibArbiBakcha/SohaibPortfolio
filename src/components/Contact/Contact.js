import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title titel="<Contact" subtitel="Me />" />
      <div className={styles.center}>
        <p>
          " Whether you want to get in touch, talk about a project
          collaboration, or just say hi,
          <br /> I'd love to hear from you.
          <br /> Simply fill the form and send me an email "
        </p>
        <form className={styles.form} name="Contact" netlify>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Sohaib arbi Bakcha"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>
          <div>
            <label htmlFor="m essage">Message</label>
            <textarea
              name="messege"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="hello there"
            />
          </div>
          <div>
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
