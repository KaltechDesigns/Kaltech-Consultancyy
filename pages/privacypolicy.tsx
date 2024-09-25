import { AboutFooter } from "@/components/common/Footers/AboutFooter";
import { Navbar } from "@/components/common/Navbar";
import PrivacyPolicy from "@/components/privacypolicy/privacypolicy";
import React from "react";

const privacypolicy: React.FC = () => {
  return (
    <>
      <Navbar />
      <PrivacyPolicy />
      <AboutFooter />
    </>
  );
};

export default privacypolicy;
