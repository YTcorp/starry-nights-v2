import React from "react";
import Section from "../../molecules/Section/Section";
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
      </div>
    </div>
  );
}
