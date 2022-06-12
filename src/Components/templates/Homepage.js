import React from "react";
import HomeHero from "../organisms/HomeHero/HomeHero";
import Modal from "../organisms/Modal/Modal";

export default function Hompage() {
  return (
    <main className="Main Homepage">
      <HomeHero />
      <Modal />
    </main>
  );
}
