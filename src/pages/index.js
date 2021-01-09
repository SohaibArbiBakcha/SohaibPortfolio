import React, { Component } from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SimpleHero from "../components/simpleHero"
import Banner from "../components/Banner"
export default class index extends Component {
  render() {
    return (
      <Layout>
        <SimpleHero>
          <Banner
            titel="Welcome"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate."
          >
            <Link className="btn-white" to="/project">
              {" "}
              tell me Your idea
            </Link>
          </Banner>
        </SimpleHero>

        {/* <h1 className={styles.center}>Sohaib Arbi Portfolio </h1>

        <img src={img} alt="facking pic" className={styles.displayed} /> */}
      </Layout>
    )
  }
}
