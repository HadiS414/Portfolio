import React from "react";
import Typed from "react-typed";
import Particles from "react-tsparticles";

const Home = () => {
    return (
      <div id="home" className="home-wrapper">
        <div className="main-info">
          <h1> Hadi Salameh </h1>
          <Typed
            className="typed-text"
            strings={["Software Engineer", "Software Developer", "Leader", "Innovator"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </div>
        <Particles className="tsparticles-canvas-el"
          options={{
            fullScreen: {
              enable: false,
              zIndex: 0
            },
            particles: {
              number: {
                value: 15,
                density: {
                  enable: true,
                  value_area: 1000
                }
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: true,
                speed: 4,
                straight: false,
              },
              links: {
                color: "#ffffff",
                distance: 225,
                enable: true,
                opacity: 0.5,
                width: .6,
              },
              shape: {
                type: "circle",
                stroke: {
                  width: .75,
                  color: "#f9ab00"
                }
              },
              size: {
                value: 2
              },
              opacity: {
                value: .3
              }
            }
          }}
        /> 
      </div>
    )
}

export default Home