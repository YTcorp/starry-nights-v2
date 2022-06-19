import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../../atoms/Spinner/Spinner";
import LiElement from "../LiElement/LiElement";
import { baseURL } from "../../../utils/axios";

export default function ConstellationsList() {
  const { constellations, loading } = useSelector(
    (state) => state.constellation
  );

  return (
    <ul className="Constellations-List">
      {loading && <Spinner />}
      {constellations.map((constellation, index) => (
        <LiElement
          key={`Constellations-List-Item--${index}`}
          data={constellation}
          customClass="Constellations-List-Item"
        >
          <img
            className="Constellations-List-Item-Image"
            src={`${baseURL}${constellation.img_url}`}
            alt={`Constellation ${constellation.name}`}
          />
          <strong className="Constellations-List-Item-Name">
            {constellation.name}
          </strong>
        </LiElement>
      ))}
    </ul>
  );
}
