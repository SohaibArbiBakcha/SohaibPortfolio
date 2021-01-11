import React from "react"
import Particles from "react-particles-js"

function App({ children }) {
  return (
    <div className="App">
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
          },
        }}
      >
        {children}
      </Particles>
    </div>
  )
}

export default App
