import { HeroSection } from "@/components/AboutUs/HeroSection/HeroSection";
import { HowWeWork } from "@/components/AboutUs/HowWeWork/HowWeWork";
import { OurStory } from "@/components/AboutUs/OurStory/OurStory";
import { OurTeam } from "@/components/AboutUs/OurTeam/OurTeam";
import { WorkWithUs } from "@/components/AboutUs/WorkWithUs/WorkWithUs";
import { AboutFooter } from "@/components/common/Footers/AboutFooter";
import { Navbar } from "@/components/common/Navbar";
import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <>
      <Head>        
        <link rel="icon" href="/KaltechFavIcon.png" />
        <title>Kaltech Consultancy - About</title>
      </Head>
      <Navbar />
      <HeroSection />
      <OurStory />
      <OurTeam />
      <HowWeWork />
      <WorkWithUs />
      <AboutFooter />
    </>
  );
};
export default About;
