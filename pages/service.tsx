import React from "react";
import { Navbar } from "@/components/common/Navbar";
import { DigitalDreams } from "@/components/ServicesPage/DigitalDreams/DigitalDreams";
import { MarketingAndBranding } from "@/components/ServicesPage/MarketingAndBranding/MarketingAndBranding";
import { ProvidedServices } from "@/components/ServicesPage/ProvidedServices/ProvidedServices";
import { ServiceHero } from "@/components/ServicesPage/ServiceHero/ServiceHero";
import { AboutFooter } from "@/components/common/Footers/AboutFooter";
import Head from "next/head";

const Service = () => {
  return (
    <>
       <Head>        
        <link rel="icon" href="/KaltechFavIcon.png" />
        <title>Kaltech Consultancy - Services</title>
      </Head>
      <Navbar />
      <ServiceHero />
      <ProvidedServices />
      <MarketingAndBranding />
      <DigitalDreams />
      <AboutFooter />
    </>
  );
};

export default Service;
