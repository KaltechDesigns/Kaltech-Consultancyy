import React from "react";
import { Navbar } from "@/components/common/Navbar";
import { BlogHeroSection } from "@/components/BlogPage/Hero/BlogHero";
import { TrendingBlog } from "@/components/BlogPage/TrendingBlog/TrendingBlog";
import { AboutFooter } from "@/components/common/Footers/AboutFooter";
import Head from "next/head";

const blog = () => {
  return (
    <>
       <Head>        
        <link rel="icon" href="/KaltechFavIcon.png" />
        <title>Kaltech Consultancy - Blog</title>
      </Head>
      <Navbar />
      <BlogHeroSection />
      <TrendingBlog />
      <AboutFooter />
    </>
  );
};

export default blog;
