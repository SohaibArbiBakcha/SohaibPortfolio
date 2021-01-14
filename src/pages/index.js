import React, { Component } from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SimpleHero from "../components/simpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
export default class index extends Component {
  render() {
    return (
      <Layout>
        <SimpleHero>
          <Banner text="">
            <Link className="btn-white" to="/project">
              {" "}
              tell me Your idea
            </Link>
          </Banner>
        </SimpleHero>
        <About />
      </Layout>
    )
  }
}
