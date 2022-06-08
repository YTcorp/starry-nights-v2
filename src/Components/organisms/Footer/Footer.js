import React from "react";
import Section from "../../molecules/Section/Section";
import Anchor from "../../atoms/Anchor/Anchor";
import sectionFooterDescription from "../../../assets/data/sectionFooterDescription.json";
import sectionFooterPlan from "../../../assets/data/sectionFooterPlan.json";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-Sections">
        <Section
          id="footer-description"
          className="Footer-Sections-Section Description"
          data={sectionFooterDescription[0]}
        />
        <Section
          id="footer-plan"
          className="Footer-Sections-Section Plan"
          data={sectionFooterPlan[0]}
        />
        <p className="Footer-Bottom">
          Cette application a été dévéloppée grâce à la librairie
          <Anchor
            target="_blank"
            url="https://github.com/ofrohn/d3-celestial"
            content=" D3-Celestial "
          />
          d'
          <Anchor
            target="_blank"
            url="https://twitter.com/olaffrohn"
            content="Olaf Frohn"
          />
        </p>
      </div>
    </div>
  );
}
