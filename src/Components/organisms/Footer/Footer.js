import React from "react";
import Section from "../../molecules/Section/Section";
import sectionDescription from "../../../assets/data/sectionDescription.json";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-Sections">
        <Section
          className="Footer-Sections-Section Description"
          data={sectionDescription[0]}
        />
      </div>
    </div>
  );
}
