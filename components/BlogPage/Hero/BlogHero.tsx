import React, { useEffect, useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import BlogHeroImg2 from "../../../assets/images/BlogHeroImg2.png";
import BlogHeroImg3 from "../../../assets/images/BlogHeroImg3.png";
import BlogHeroImg1 from "../../../assets/images/BlogHeroImg1.png";
import BlogHeroSliderImg2 from "../../../assets/images/BlogHeroSliderImg2.png";
import BlogHeroSliderImg3 from "../../../assets/images/BlogHeroSliderImg3.png";
import BlogHeroSliderImg4 from "../../../assets/images/BlogHeroSliderImg4.png";
import { useRouter } from "next/router";
import Link from "next/link";
import { blogData } from "@/blogData";

const BlogData = [
  {
    image: BlogHeroImg1,
    count: "01",
    heading: "How Important is Branding to Promote Your Business?",
  },
  {
    image: BlogHeroSliderImg2,
    count: "02",
    heading: "The Relevance of Networking to Business Growth",
  },
  {
    image: BlogHeroSliderImg3,
    count: "03",
    heading: "Is Digital Marking is Relevant in 2024",
  },
  {
    image: BlogHeroSliderImg4,
    count: "04",
    heading: "Optimizing Business Efficiency: Strategies and Best Practices",
  },
];

export const BlogHeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    setCurrentIndex((curr) => (curr === BlogData.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    const animationInterval = setInterval(handleNext, 3500);

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <>
      <div className="h-screen hidden justify-center items-center overflow-hidden md:hidden 2xl:flex xl:flex lg:portrait:hidden lg:landscape:flex">
        <div className="2xl:w-[80%] xl:w-[85%] lg:w-[90%] h-[80%] flex flex-col justify-between items-center">
          <div className="w-full flex justify-start items-center h-[30%]">
            <motion.h1
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 0.6, ease: "circInOut", delay: 0.1 }}
              className="uppercase AzonixFont font-[Azonix,Oxanium] font-[400] 2xl:text-7xl xl:text-[30px] text-left lg:text-4xl"
            >
              informative blogs for our digital creatives.
            </motion.h1>
          </div>
          <div className="w-full h-[65%] flex justify-evenly items-center ">
            <motion.div
              initial={{ y: "110%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.6, ease: "circInOut", delay: 0.5 }}
              className="h-full w-[48%] overflow-hidden"
            >
              {blogData.slice(0, 4).map((cur, id) => (
                <motion.div
                  key={id}
                  style={{
                    transform: `translateY(-${currentIndex * 100}%)`,
                  }}
                  className="relative h-full w-full flex-shrink-0 transition-transform duration-200 ease-in-out"
                >
                  <Image
                    // style={{
                    //   transform: `translateY(-${currentIndex * 100}%)`,
                    // }}
                    fill
                    src={`/${cur.featureImg}`}
                    alt="blog-image"
                    loading="lazy"
                    className="transition-transform duration-500 ease-in-out brightness-75 object-cover"
                  />
                  <div className="absolute w-full h-full bg-transparent top-0 left-0 flex justify-end items-end z-10">
                    <div className="w-full h-[50%] p-3 flex flex-col justify-center items-start">
                      <motion.h4
                        animate={{
                          opacity: [0, 1],
                        }}
                        className="text-3xl font-[Oxanium] font-[600] text-[#FFF]"
                      >
                        0{id + 1}
                      </motion.h4>
                      <Link
                        href={`blog/${cur.id}?bn=${cur.mainTitle}`}
                        className="2xl:text-2xl xl:text-xl lg:text-lg font-[Oxanium] font-[700] my-2 text-[#FFF] cursor-pointer"
                      >
                        {cur.mainTitle}
                      </Link>
                      <p className="text-lg font-[Oxanium] font-[400] my-2 text-[#FFF]">
                        {cur.createdDate}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex flex-col justify-between items-center w-[48%] h-full">
              <motion.div
                // onClick={() => router.push(`blog/1`)}
                initial={{ y: "110%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.6, ease: "circInOut", delay: 1.5 }}
                className="relative h-[48%] w-[90%] cursor-pointer"
              >
                <Image
                  fill
                  src={`/${blogData[4].articalImg}`}
                  alt="blog-image"
                  loading="lazy" className="brightness-75"
                />
                <div className="absolute w-full h-full bg-transparent top-0 left-0 flex justify-end items-end">
                  <div className="w-full h-[50%] p-3 flex flex-col justify-center items-start">
                    <Link href={`/blog/${blogData[4].id}?bn=${blogData[4].mainTitle}`} className="2xl:text-2xl xl:text-xl lg:text-lg font-[Oxanium] font-[700] my-2 text-[#FFF]">
                      {blogData[4].mainTitle}
                    </Link>
                    <p className="text-base font-[Oxanium] font-[400] my-2 text-[#FFF]">
                      {blogData[4].createdDate}
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                // onClick={() => router.push(`blog/2`)}
                initial={{ y: "70%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.6, ease: "circInOut", delay: 1 }}
                className="relative h-[48%] w-[90%] cursor-pointer"
              >
                <Image
                  fill
                  src={`/${blogData[5].articalImg}`}
                  alt="blog-image"
                  loading="lazy" className="brightness-75"
                />
                <div className="absolute w-full h-full bg-transparent top-0 left-0 flex justify-end items-end">
                  <div className="w-full h-[50%] p-3 flex flex-col justify-center items-start">
                    <Link href={`/blog/${blogData[5].id}?bn=${blogData[5].mainTitle}`} className="2xl:text-2xl xl:text-xl lg:text-lg font-[Oxanium] font-[700] my-2 text-[#FFF]">
                    {blogData[5].mainTitle}
                    </Link>
                    <p className="text-base font-[Oxanium] font-[400] my-2 text-[#FFF]">
                      {blogData[5].createdDate}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <BlogHeroSectionTab />
      <BlogHeroSectionMob />
    </>
  );
};

const BlogHeroSectionTab = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((curr) => (curr === BlogData.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    const animationInterval = setInterval(handleNext, 3500);

    return () => {
      clearInterval(animationInterval);
    };
  }, []);
  return (
    <>
      <div className="h-screen hidden md:flex  overflow-hidden relative 2xl:hidden xl:hidden lg:portrait:flex lg:landscape:hidden">
        <div className=" h-full flex flex-col justify-center items-center w-[90%] mx-auto">
          <div>
            <motion.h1
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 0.6, ease: "circInOut", delay: 0.1 }}
              className="uppercase AzonixFont font-[Azonix,Oxanium] font-[400] text-7xl"
            >
              informative blogs for our digital creatives.
            </motion.h1>
          </div>

          <div className="w-full h-[65%] flex flex-col justify-center  gap-4 items-center mt-5">
            <motion.div
              initial={{ y: "110%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.6, ease: "circInOut", delay: 0.5 }}
              className="h-[55%] w-full overflow-hidden "
            >
              {BlogData.map((cur, id) => (
                <motion.div
                  key={id}
                  className="relative h-full w-full flex-shrink-0 transition-transform duration-200 ease-in-out"
                >
                  <Image
                    style={{
                      transform: `translateY(-${currentIndex * 100}%)`,
                    }}
                    fill
                    src={cur.image}
                    alt="blog-image"
                    loading="lazy"
                    className="transition-transform duration-500 ease-in-out object-cover"
                  />
                  <div className="absolute w-full h-full bg-transparent top-0 left-0 flex justify-end items-end z-10">
                    <div className="w-full h-[50%] p-3 flex flex-col justify-center items-start">
                      <motion.h4
                        animate={{
                          opacity: [0, 1],
                        }}
                        className="text-3xl font-[Oxanium] font-[600] text-[#FFF]"
                      >
                        {BlogData[currentIndex].count}
                      </motion.h4>
                      <h3 className="text-2xl font-[Oxanium] font-[700] my-2 text-[#FFF]">
                        {BlogData[currentIndex].heading}
                      </h3>
                      <p className="text-lg font-[Oxanium] font-[400] my-2 text-[#FFF]">
                        May 02,2024
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-between items-center gap-4 w-full h-[35%] ">
              <motion.div
                initial={{ y: "110%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.6, ease: "circInOut", delay: 1.5 }}
                className="relative h-full w-[90%]"
              >
                <Image
                  fill
                  src={BlogHeroImg2}
                  alt="blog-image"
                  loading="lazy"
                />
                <div className="absolute w-full h-full bg-transparent top-0 left-0 flex justify-end items-end">
                  <div className="w-full h-[50%] p-3 flex flex-col justify-center items-start">
                    <h3 className="text-xl font-[Oxanium] font-[700] my-2 text-[#FFF]">
                      The Importance of Social Media Marketing in Busniess
                      Growth
                    </h3>
                    <p className="text-base font-[Oxanium] font-[400] my-2 text-[#FFF]">
                      May 02,2024
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ y: "70%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.6, ease: "circInOut", delay: 1 }}
                className="relative h-full w-[90%]"
              >
                <Image
                  fill
                  src={BlogHeroImg3}
                  alt="blog-image"
                  loading="lazy"
                />
                <div className="absolute w-full h-full bg-transparent top-0 left-0 flex justify-end items-end">
                  <div className="w-full h-[50%] p-3 flex flex-col justify-center items-start">
                    <h3 className="text-xl font-[Oxanium] font-[700] my-2 text-[#FFF]">
                      How to Run a Successfull Busniess in a fall?
                    </h3>
                    <p className="text-base font-[Oxanium] font-[400] my-2 text-[#FFF]">
                      May 02,2024
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BlogHeroSectionMob = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((curr) => (curr === BlogData.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    const animationInterval = setInterval(handleNext, 3500);

    return () => {
      clearInterval(animationInterval);
    };
  }, []);
  return (
    <>
      <div className="h-screen overflow-hidden flex justify-center items-center md:hidden lg:hidden xl:hidden 2xl:hidden">
        <div className="w-[90%] h-[90%]">
          <div>
            <motion.h1
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 0.6, ease: "circInOut", delay: 0.1 }}
              className="uppercase AzonixFont font-[Azonix,Oxanium] font-[400] text-3xl"
            >
              informative blogs for our digital creatives.
            </motion.h1>
          </div>
          <div className="w-full h-[70%] flex flex-col justify-center  gap-2 items-center mt-3">
            <motion.div
              initial={{ y: "110%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.6, ease: "circInOut", delay: 0.5 }}
              className="h-[55%] w-full overflow-hidden "
            >
              {BlogData.map((cur, id) => (
                <motion.div
                  key={id}
                  className="relative h-full w-full flex-shrink-0 transition-transform duration-200 ease-in-out"
                >
                  <Image
                    style={{
                      transform: `translateY(-${currentIndex * 100}%)`,
                    }}
                    fill
                    src={cur.image}
                    alt="blog-image"
                    loading="lazy"
                    className="transition-transform duration-500 ease-in-out object-cover"
                  />
                  <div className="absolute w-full h-full bg-transparent top-0 left-0 flex justify-end items-end z-10">
                    <div className="w-full h-[50%] p-3 flex flex-col justify-center items-start">
                      <motion.h4
                        animate={{
                          opacity: [0, 1],
                        }}
                        className="text-2xl font-[Oxanium] font-[600] text-[#FFF]"
                      >
                        {BlogData[currentIndex].count}
                      </motion.h4>
                      <h3 className="text-lg font-[Oxanium] font-[700] my-1 text-[#FFF]">
                        {BlogData[currentIndex].heading}
                      </h3>
                      <p className="text-sm font-[Oxanium] font-[400] my-1 text-[#FFF]">
                        May 02,2024
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-between items-center gap-2 w-full h-[30%] ">
              <motion.div
                initial={{ y: "110%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.6, ease: "circInOut", delay: 1.5 }}
                className="relative h-full w-[90%]"
              >
                <Image
                  fill
                  src={BlogHeroImg2}
                  alt="blog-image"
                  loading="lazy"
                  className="object-cover brightness-75"
                />
                <div className="absolute w-full h-full bg-transparent top-0 left-0 flex justify-end items-end">
                  <div className="w-full h-[60%] p-1 flex flex-col justify-center items-start">
                    <h3 className="text-[12px] font-[Oxanium] font-[700] my-.5 text-[#FFF]">
                      The Importance of Social Media Marketing in Busniess
                      Growth
                    </h3>
                    <p className="text-[12px] font-[Oxanium] font-[400] my-.5 text-[#FFF]">
                      May 02,2024
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ y: "70%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.6, ease: "circInOut", delay: 1 }}
                className="relative h-full w-[90%]"
              >
                <Image
                  fill
                  src={BlogHeroImg3}
                  alt="blog-image"
                  loading="lazy"
                  className="object-cover brightness-75"
                />
                <div className="absolute w-full h-full bg-transparent top-0 left-0 flex justify-end items-end">
                  <div className="w-full h-[60%] p-1 flex flex-col justify-center items-start">
                    <h3 className="text-[12px] font-[Oxanium] font-[700] my-.5 text-[#FFF]">
                      How to Run a Successfull Busniess in a fall?
                    </h3>
                    <p className="text-[12px] font-[Oxanium] font-[400] my-.5 text-[#FFF]">
                      May 02,2024
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
