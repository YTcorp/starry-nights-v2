import React from "react";
import { useEffect } from "react";
import celestial from "d3-celestial";
import { config } from "../../../assets/celestial/config";

export default function Celestial({ latitude, longitude, date }) {
  let Celestial = celestial.Celestial();

  useEffect(() => {
    Celestial.display(config);
    Celestial.skyview({
      location: [latitude, longitude],
      date: date,
    });
  }, [Celestial, date, latitude, longitude]);

  return (
    <div className="Map-InteractiveMap Container">
      <div id="celestial-map"></div>
    </div>
  );
}
