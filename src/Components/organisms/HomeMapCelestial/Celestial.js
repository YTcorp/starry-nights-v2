import React from "react";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import celestial from "d3-celestial";
import { defaultConfig, dynamicConfig } from "../../../assets/celestial/config";

export default function Celestial({ latitude, longitude, datetime }) {
  let Celestial = celestial.Celestial();
  const { width } = useWindowSize();
  const [celestialConfig, setCelestialConfig] = useState(defaultConfig);

  useEffect(() => {
    Celestial.display(celestialConfig);
  }, [Celestial, celestialConfig]);

  useEffect(() => {
    if (width < 749) {
      setCelestialConfig(dynamicConfig({ proj: "airy", zoom: 3 }));
    } else {
      setCelestialConfig(dynamicConfig({ proj: "eckert3", zoom: 2.4 }));
    }
  }, [width]);

  useEffect(() => {
    Celestial.skyview({
      date: new Date(datetime),
      location: [latitude, longitude],
    });
  }, [latitude, longitude, datetime, Celestial]);

  return (
    <div className="Map-Interactive Container">
      <div id="celestial-map"></div>
    </div>
  );
}
