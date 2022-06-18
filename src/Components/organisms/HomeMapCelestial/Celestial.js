import React from "react";
import { useEffect } from "react";
import celestial from "d3-celestial";
import { config } from "../../../assets/celestial/config";

export default function Celestial({ latitude, longitude, datetime }) {
  let Celestial = celestial.Celestial();

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
