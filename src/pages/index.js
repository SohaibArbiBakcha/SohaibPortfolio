import React, { Component } from "react"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SimpleHero from "../components/simpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Typed from "react-typed"
import FeatruedProject from "../components/Home/featruedProject"

export default class index extends Component {
  render() {
    return (
      <Layout>
        <SimpleHero>
          <Banner
            title="Hello,I'm Sohaib Arbi Bakcha"
            text={
              <Typed
                strings={[
                  "Front End Developer",
                  "Back End Developer",
                  "Open To Work",
                ]}
                typeSpeed={40}
                backSpeed={60}
                stopDelay={5000}
                loop={true}
              />
            }
          >
            <AniLink swipe className="btn-white" to="/contact">
              {" "}
              tell me Your idea
            </AniLink>
          </Banner>
        </SimpleHero>
        <About />
        <FeatruedProject />
      </Layout>
    )
  }
}
