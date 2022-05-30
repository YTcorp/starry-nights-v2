import React from "react";
import ArrowDown from "../atoms/ArrowDown/ArrowDown";

export default function Hompage() {
  return (
    <section id="Hero" className="Hero Section">
      <h1 className="Title Hero-Title">Starry Nights</h1>
      <p className="Block Hero-Text">
        Trouvez les constellations visibles sur votre localisation et leur
        mythologie.
      </p>
      <ArrowDown href="#Myth" />
    </section>
  );
}
