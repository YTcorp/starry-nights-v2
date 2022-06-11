import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function NotFound() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};
  return (
    <main className="Main NotFound">
      <h1 className="card404">
        <strong>404</strong>lost in space !
      </h1>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          detectRetina: true,
          background: {
            image: "url('../../assets/img/Space.jpg')",
            // image: "url('https://particles.js.org/images/background3.jpg')",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: true,
                mode: ["connect"],
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              connect: {
                distance: 800,
                line_linked: {
                  opacity: 0.5,
                },
                radius: 60,
              },
            },
          },
          particles: {
            color: {
              value: ["cddbe8", "e3e8cd", "e8cde0"],
            },
            links: {
              enable: false,
            },
            number: {
              value: 500,
            },
            opacity: {
              value: 0.8,
              random: true,
              anim: {
                enable: true,
                speed: 1.5,
                opacity_min: 0.1,
                sync: false,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 2,
                color: "#000000",
              },
            },
            size: {
              value: { min: 0.1, max: 2.7 },
              random: true,
              anim: {
                enable: true,
                speed: 1,
                size_min: 0.2,
                sync: false,
              },
            },
          },
        }}
      />
    </main>
  );
}
