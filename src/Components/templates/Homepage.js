import React from "react";
import HomeHero from "../organisms/HomeHero/HomeHero";
import HomeRandomMyth from "../organisms/HomeRandomMyth/HomeRandomMyth";
import HomeMapCelestial from "../organisms/HomeMapCelestial/HomeMapCelestial";

export default function Hompage() {
  return (
    <main className="Main Homepage">
      <HomeHero />
      <HomeRandomMyth />
      <HomeMapCelestial />
    </main>
  );
}
