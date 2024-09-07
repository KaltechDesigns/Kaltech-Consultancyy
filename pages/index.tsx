import { About } from "@/components/About/About";
import { Blog } from "@/components/Blog/Blog";
import { HomeFooter } from "@/components/common/Footers/HomeFooter";
import { Hero } from "@/components/Hero/Hero";
import { Portfolio } from "@/components/Portfolio/Portfolio";
import { Services } from "@/components/Services/Services";
import { Testimonial } from "@/components/Testimonial/Testimonial";
import { SideNav } from "@/components/common/SideNav";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Navbar } from "@/components/common/Navbar";
import Head from "next/head";

// dynamic imports starts here ...
const WhyChooseUs = dynamic(() =>
  import("../components/WhyChooseUs/WhyChooseUs").then((mod) => mod.WhyChooseUs)
);

export default function Home() {
  /* The `useEffect` hook in React is used to perform side effects in function components. In this
  specific code snippet: */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Head>        
        <link rel="icon" href="/KaltechFavIcon.png" />
        <title>Kaltech Consultancy - Home</title>
      </Head>
      <SideNav />

      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonial />
      <Blog />
      <HomeFooter />
    </>
  );
}
