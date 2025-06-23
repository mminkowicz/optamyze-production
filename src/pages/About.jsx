import React from "react";
import TeamSection from "../components/about/TeamSection";
import AboutHero from "../components/about/AboutHero";
import Mission from "../components/about/Mission";
import Values from "../components/about/Values";

export default function About() {
  return (
    <div className="bg-white">
      <AboutHero />
      <Mission />
      <Values />
      <TeamSection />
    </div>
  );
}