import React from "react";
import ConstellationsList from "../molecules/ConstellationsList/ConstellationsList";
import Modal from "../organisms/Modal/Modal";

export default function ConstellationsPage() {
  return (
    <main className="Main Constellations">
      <h1 className="Title Page-Title">Constellations</h1>
      <ConstellationsList />
      <Modal />
    </main>
  );
}
