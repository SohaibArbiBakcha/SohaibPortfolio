import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title titel="<Contact" subtitel="Me />" />
      <div className={styles.center}>
        <form className={styles.form}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Sohaib arbi Bakcha"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>
          <div>
            <textarea
              name="massege"
              id="massage"
              rows="10"
              className={styles.formControl}
              placeholder="hello there"
            />
          </div>
          <div>
            <input
              type="submit"
              value="submit here"
              className={styles.formControl}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
