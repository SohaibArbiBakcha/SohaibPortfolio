import React from "react"
import Card from "react-animated-3d-card"

const Cardd = () => {
  return (
    <Card
      style={{
        backgroundColor: "blue",
        width: "150",
        height: "150",
        cursor: "pointer",
      }}
      onClick={() => console.log("Card clicked")}
    />
  )
}

export default Cardd
