import React from "react"
import Layout from "../components/Layout"
import PageBanner from "../components/PageBanner"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"

export default function contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <PageBanner label="// let's work together" title="Contact" />
      <Contact />
    </Layout>
  )
}
