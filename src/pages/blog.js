import React, { Component } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default class blog extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>welcome to blog page</h1>
        <Footer />
      </div>
    )
  }
}
