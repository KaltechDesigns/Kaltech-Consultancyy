import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { useParams } from "next/navigation";

import { Footer } from "@/components/common/Footers/Footer";
import { Navbar } from "@/components/common/Navbar";

import { motion } from "framer-motion";

import BlogImg3 from "../../assets/images/BlogImg3.png";
import BlogImg4 from "../../assets/images/BlogImg4.png";

import { blogData } from "../../blogData";
import { useRouter } from "next/router";

interface blogDataType {
  id: string;
  articalImg: string;
  featureImg: string;
  mainTitle: string;
  mainInfo: string;
  headingFrt: string;
  paraFrt: string;
  headingSec: string;
  paraSec: string;
  headingThr: string;
  paraThr: string;
  headingFur: string;
  paraFor: string;
  headingFiv: string;
  paraFiv: string;
  headingSix: string;
  paraSix: string;
  headingSev: string;
  paraSev: string;
  headingEig: string;
  paraEig: string;
  ConclusionHeading: string;
  conclusion: string;
}

const BlogID = () => {
  const [currentBlog, setCurrentBlog] = useState<blogDataType>();
  const params = useParams<{ id: string }>();
  const router = useRouter();
  useEffect(() => {
    if (params?.id) {
      const blog = blogData.find((b) => b.id === params.id);
      setCurrentBlog(blog);
    }
  }, [params?.id]);
  console.log(currentBlog?.articalImg);

  return (
    <>
      <Head>
        <link rel="icon" href="/KaltechFavIcon.png" />
        <title>Kaltech Consultancy - {router.query.bn}</title>
      </Head>
      <Navbar />
      <div className="">
        <div className="h-screen flex justify-center items-center">
          <div className="2xl:w-[80%] w-[90%] h-[90%] flex flex-col justify-center items-center gap-5">
            <motion.h1
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 0.6, ease: "circInOut", delay: 0.1 }}
              className="uppercase AzonixFont text-center font-[Azonix,Oxanium] font-[400] 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-2xl text-2xl 2xl:my-6 my-3"
            >
              {currentBlog?.mainTitle}
            </motion.h1>
            {/* <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 0.6, ease: "circInOut", delay: 0.1 }}
              className="flex justify-center items-center gap-3 w-[40%] mx-auto my-6"
            >
              <h4 className="  text-center font-[Oxanium] font-[600] text-lg text-[#000000]/60">
                May 02,2024
              </h4>
              <span className="h-1 w-[5%] bg-[#000000]/60 rounded-full" />
              <h4 className="  text-center font-[Oxanium] font-[600] text-lg text-[#000000]/60">
                By David Chappel
              </h4>
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, y: "60%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.5, ease: "backInOut" }}
              className="h-[60%] relative w-full"
            >
              <Image
                src={`/${currentBlog?.articalImg}`}
                fill
                loading="lazy"
                className="object-cover"
                alt={`${currentBlog?.articalImg}`}
              />
            </motion.div>
          </div>
        </div>

        <div className=" flex justify-center items-center">
          <div className="2xl:w-[80%] w-[90%]">
            <h4 className="font-[Oxanium] font-[700] 2xl:text-3xl xl:2xl lg:2xl  md:text-xl text-xl text-[#000000] my-4">
              {currentBlog?.mainTitle}
            </h4>

            <p className="2xl:text-lg xl:text-lg lg:text-base md:text-sm text-sm font-[Oxanium] font-[400] my-5">
              {currentBlog?.mainInfo}
            </p>

            {/* <motion.div
              initial={{ opacity: 0, y: "60%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.5, ease: "backInOut" }}
              className="h-[500px] relative w-full"
            >
              <Image src={BlogImg4} fill loading="lazy" alt="blog-img" />
            </motion.div> */}

            <h4 className="font-[Oxanium] font-[700] 2xl:text-3xl xl:2xl lg:2xl  md:text-xl text-xl text-[#000000] my-4">
              {currentBlog?.headingFrt}
            </h4>

            <p className="2xl:text-lg xl:text-lg lg:text-base md:text-sm text-sm font-[Oxanium] font-[400] my-5">
              {currentBlog?.paraFrt}
            </p>

            <h4 className="font-[Oxanium] font-[700] 2xl:text-3xl xl:2xl lg:2xl  md:text-xl text-xl text-[#000000] my-4">
              {currentBlog?.headingSec}
            </h4>
            <p className="2xl:text-lg xl:text-lg lg:text-base md:text-sm text-sm font-[Oxanium] font-[400] my-5">
              {currentBlog?.paraSec}
            </p>
            <h4 className="font-[Oxanium] font-[700] 2xl:text-3xl xl:2xl lg:2xl  md:text-xl text-xl text-[#000000] my-4">
              {currentBlog?.headingThr}
            </h4>
            <p className="2xl:text-lg xl:text-lg lg:text-base md:text-sm text-sm font-[Oxanium] font-[400] my-5">
              {currentBlog?.paraThr}
            </p>
            <h4 className="font-[Oxanium] font-[700] 2xl:text-3xl xl:2xl lg:2xl  md:text-xl text-xl text-[#000000] my-4">
              {currentBlog?.headingFur}
            </h4>
            <p className="2xl:text-lg xl:text-lg lg:text-base md:text-sm text-sm font-[Oxanium] font-[400] my-5">
              {currentBlog?.paraFor}
            </p>
            <h4 className="font-[Oxanium] font-[700] 2xl:text-3xl xl:2xl lg:2xl  md:text-xl text-xl text-[#000000] my-4">
              {currentBlog?.headingFiv}
            </h4>
            <p className="2xl:text-lg xl:text-lg lg:text-base md:text-sm text-sm font-[Oxanium] font-[400] my-5">
              {currentBlog?.paraFiv}
            </p>
            <h4 className="font-[Oxanium] font-[700] 2xl:text-3xl xl:2xl lg:2xl  md:text-xl text-xl text-[#000000] my-4">
              {currentBlog?.headingSix}
            </h4>
            <p className="2xl:text-lg xl:text-lg lg:text-base md:text-sm text-sm font-[Oxanium] font-[400] my-5">
              {currentBlog?.paraSix}
            </p>
            <h4 className="font-[Oxanium] font-[700] 2xl:text-3xl xl:2xl lg:2xl  md:text-xl text-xl text-[#000000] my-4">
              {currentBlog?.headingSev}
            </h4>
            <p className="2xl:text-lg xl:text-lg lg:text-base md:text-sm text-sm font-[Oxanium] font-[400] my-5">
              {currentBlog?.paraSev}
            </p>
            <h4 className="font-[Oxanium] font-[700] 2xl:text-3xl xl:2xl lg:2xl  md:text-xl text-xl text-[#000000] my-4">
              {currentBlog?.headingEig}
            </h4>
            <p className="2xl:text-lg xl:text-lg lg:text-base md:text-sm text-sm font-[Oxanium] font-[400] my-5">
              {currentBlog?.paraEig}
            </p>
            <h4 className="font-[Oxanium] font-[700] 2xl:text-3xl xl:2xl lg:2xl  md:text-xl text-xl text-[#000000] my-4">
              {currentBlog?.ConclusionHeading}
            </h4>
            <p className="2xl:text-lg xl:text-lg lg:text-base md:text-sm text-sm font-[Oxanium] font-[400] my-5">
              {currentBlog?.conclusion}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogID;
