import React from "react";
import ConstellationsList from "../molecules/ConstellationsList/ConstellationsList";

export default function ConstellationsPage() {
  return (
    <main className="Main Constellations">
      <h1 className="Title Page-Title">Constellations</h1>
      <ConstellationsList />
    </main>
  );
}
