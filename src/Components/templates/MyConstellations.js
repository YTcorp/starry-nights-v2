import React from "react";
import { useSelector } from "react-redux";
import { BiTrash } from "react-icons/bi";
import LiElement from "../molecules/LiElement/LiElement";
import Spinner from "../atoms/Spinner/Spinner";

export default function MyConstellations() {
  const { favConstellations, favLoading } = useSelector(
    (state) => state.userData
  );

  return (
    <main className="Main MyConstellations">
      <h1 className="Title Page-Title">Mes Constellations</h1>
      <div className="Block myconstellation">
        <div className="myconstellation-container">
          <h2 className="myconstellation-title">Ouvrir</h2>
          <h2 className="myconstellation-title">Effacer</h2>
          {favLoading && <Spinner />}
          {favConstellations.map((favConstellation) => {
            return (
              <div
                className="myconstellation-inner-container"
                key={`key-${favConstellation.id}`}
              >
                <LiElement
                  key={`myconstellation-${favConstellation.id}`}
                  customClass="myconstellation-element"
                  data={favConstellation}
                />
                <BiTrash
                  key={`myconstellation-icon-${favConstellation.id}`}
                  className="myconstellation-icon"
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
