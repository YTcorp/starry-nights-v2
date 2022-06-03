import React from "react";
import ArrowDown from "../../atoms/ArrowDown/ArrowDown";
import Section from "../../molecules/Section/Section";
import sectionHeroHomepage from "../../../assets/data/sectionHeroHomepage.json";

export default function HomeHero() {
  return (
    <Section id="Hero" className={"Hero Section"} data={sectionHeroHomepage[0]}>
      <ArrowDown />
    </Section>
  );
}
