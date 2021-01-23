import React from "react"
import Layout from "../components/Layout"
import Working from "../components/working"
import Cardd from "../example/Card"
// import Images from "../example/Images"
export default function contact() {
  return (
    <div>
      <Layout>
        <Working />
        {/* <Images /> */}
        <Cardd />
      </Layout>
    </div>
  )
}
