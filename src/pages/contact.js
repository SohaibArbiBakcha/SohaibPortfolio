import React from "react"
import Layout from "../components/Layout"
import TimeLine from "../components/TimeLine"
import Working from "../components/working"
// import Images from "../example/Images"
export default function contact() {
  return (
    <div>
      <Layout>
        <Working />
        {/* <Images /> */}
        <TimeLine />
      </Layout>
    </div>
  )
}
