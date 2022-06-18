import React from "react";
import { useEffect } from "react";
import celestial from "d3-celestial";
import { config } from "../../../assets/celestial/config";

export default function Celestial({ latitude, longitude, datetime }) {
  console.log("lat:", latitude, "log:", longitude, "date:", datetime);
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
    <div className="Map-InteractiveMap Container">
      <div id="celestial-map"></div>
    </div>
  );
}
