import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useWindowSize } from "react-use";
import celestial from "d3-celestial";
import { defaultConfig, dynamicConfig } from "../../../assets/celestial/config";

export default function Celestial() {
  let Celestial = celestial.Celestial();
  const { width } = useWindowSize();
  const [celestialConfig, setCelestialConfig] = useState(defaultConfig);
  const { location, date } = useSelector((state) => state.address);

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
      date: new Date(date),
      location: [location.latitude, location.longitude],
    });
  }, [location, date, Celestial]);

  return (
    <div className="Map-Interactive Container">
      <div id="celestial-map"></div>
    </div>
  );
}
