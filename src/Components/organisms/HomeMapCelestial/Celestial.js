import React from "react";
import { useEffect } from "react";
import { useWindowSize } from "react-use";
import celestial from "d3-celestial";
import { config } from "../../../assets/celestial/config";
import { useState } from "react";

export default function Celestial({ latitude, longitude, datetime }) {
  let Celestial = celestial.Celestial();
  const { width } = useWindowSize();
  const [projection, setProjection] = useState();
  console.log(width, projection);

  useEffect(() => {
    setProjection(width < 749 ? "eckert3" : "kavrayskiy7");
  }, [width]);

  useEffect(() => {
    Celestial.display(config);
  }, [Celestial]);

  useEffect(() => {
    Celestial.skyview({
      location: [latitude, longitude],
      date: new Date(datetime),
    });
  }, [Celestial, datetime, latitude, longitude]);

  return (
    <div className="Map-Interactive Container">
      <div id="celestial-map"></div>
    </div>
  );
}
