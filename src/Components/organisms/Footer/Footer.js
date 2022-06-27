import React from "react";
import Section from "../../molecules/Section/Section";
import sectionFooterDescription from "../../../assets/data/sectionFooterDescription.json";
import sectionFooterPlan from "../../../assets/data/sectionFooterPlan.json";

export default function Footer() {
  return (
    <div className="Footer">
      <main className="Main">
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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ofrohn/d3-celestial"
            >
              D3-Celestial
            </a>
            d'
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/olaffrohn"
            >
              Olaf Frohn
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
