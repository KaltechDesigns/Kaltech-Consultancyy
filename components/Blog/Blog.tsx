import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { blogData } from "@/blogData";

import BlogBg from "../../assets/images/BlogBg.png";

import { motion, useAnimate } from "framer-motion";

export const Blog = () => {
  const [scope, animate] = useAnimate();
  const router = useRouter();

  const handleHoverAnimate = async (btnID: any) => {};
  const handleLeaveAnimate = async (btnID: any) => {};

  return (
    <>
      <div className="h-screen hidden justify-center items-center relative overflow-hidden md:hidden 2xl:flex lg:landscape:flex lg:portrait:hidden xl:flex">
        <Image fill src={BlogBg} alt="blog-bg-image" />
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center ">
          <div className="w-[85%] h-full flex flex-col justify-center items-center gap-7 2xl:gap-14">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.6, ease: "circInOut" }}
              className="flex justify-between items-center w-full"
            >
              <div className="bg-[#D9D9D9] w-[30%] h-[2px]" />
              <h3 className="text-[#121212] 2xl:text-5xl lg:text-3xl xl:text-4xl AzonixFont font-[Azonix,Oxanium] uppercase flex-shrink-0">
                Our Blogs
              </h3>
              <div className="bg-[#D9D9D9] w-[30%] h-[2px]" />
            </motion.div>

            <div
              ref={scope}
              className="flex justify-between items-start gap-5 w-full"
            >
              <div className="w-[50%] flex justify-center items-center ">
                <motion.div
                  initial={{ y: "95%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.6, ease: "circInOut" }}
                  className="w-[95%] border border-[#D9D9D9] blogShadow"
                >
                  <div className="relative h-80 2xl:h-96">
                    <Image
                      className="object-cover"
                      fill
                      src={`/${blogData[0].featureImg}`}
                      alt="blog-image"
                    />
                  </div>
                  <div className="w-[90%] mx-auto my-5 2xl:my-10">
                    <h4 className="font-[Oxanium] text-lg 2xl:text-2xl font-[700]">
                      {blogData[0].mainTitle}
                    </h4>
                    <p className="font-[Oxanium] text-base 2xl:text-base lg:text-sm xl:text-sm 2xl:font-[400] xl:font-[300] my-1 2xl:my-3 line-clamp-3">
                      {blogData[0].mainInfo}
                    </p>

                    <div className="border-t-2 border-[#D9D9D9] flex justify-between items-center p-3 mt-3 2xl:mt-10">
                      <div className="flex justify-start items-center gap-2">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_43_5091)">
                              <path
                                d="M6.66667 6.66634C6.84348 6.66634 7.01305 6.5961 7.13807 6.47108C7.2631 6.34605 7.33333 6.17649 7.33333 5.99967V1.99967C7.33333 1.82286 7.2631 1.65329 7.13807 1.52827C7.01305 1.40325 6.84348 1.33301 6.66667 1.33301C6.48986 1.33301 6.32029 1.40325 6.19526 1.52827C6.07024 1.65329 6 1.82286 6 1.99967V5.99967C6 6.17649 6.07024 6.34605 6.19526 6.47108C6.32029 6.5961 6.48986 6.66634 6.66667 6.66634Z"
                                fill="#202020"
                              />
                              <path
                                d="M20.0008 9.00008C18.6747 9.00008 17.403 8.47329 16.4653 7.53561C15.5276 6.59793 15.0008 5.32616 15.0008 4.00008H8.13416V6.00008C8.13416 6.38906 7.97963 6.76211 7.70458 7.03717C7.42953 7.31222 7.05647 7.46674 6.66749 7.46674C6.27851 7.46674 5.90545 7.31222 5.6304 7.03717C5.35535 6.76211 5.20082 6.38906 5.20082 6.00008V4.00008H2.53416C2.3755 3.99827 2.2181 4.0283 2.07126 4.08838C1.92441 4.14847 1.79111 4.23739 1.67923 4.34989C1.56735 4.4624 1.47917 4.59619 1.4199 4.74336C1.36063 4.89054 1.33147 5.0481 1.33416 5.20674V20.1267C1.33151 20.2826 1.35959 20.4374 1.41679 20.5824C1.47399 20.7274 1.55919 20.8597 1.66753 20.9718C1.77587 21.0838 1.90522 21.1734 2.0482 21.2355C2.19118 21.2975 2.34498 21.3308 2.50082 21.3334H21.5008C21.6567 21.3308 21.8105 21.2975 21.9534 21.2355C22.0964 21.1734 22.2258 21.0838 22.3341 20.9718C22.4425 20.8597 22.5277 20.7274 22.5849 20.5824C22.6421 20.4374 22.6701 20.2826 22.6675 20.1267V8.22674C21.8702 8.73279 20.9452 9.00105 20.0008 9.00008ZM6.66749 17.3334H5.33416V16.0001H6.66749V17.3334ZM6.66749 14.0001H5.33416V12.6667H6.66749V14.0001ZM6.66749 10.6667H5.33416V9.33341H6.66749V10.6667ZM10.6675 17.3334H9.33416V16.0001H10.6675V17.3334ZM10.6675 14.0001H9.33416V12.6667H10.6675V14.0001ZM10.6675 10.6667H9.33416V9.33341H10.6675V10.6667ZM14.6675 17.3334H13.3342V16.0001H14.6675V17.3334ZM14.6675 14.0001H13.3342V12.6667H14.6675V14.0001ZM14.6675 10.6667H13.3342V9.33341H14.6675V10.6667ZM18.6675 17.3334H17.3342V16.0001H18.6675V17.3334ZM18.6675 14.0001H17.3342V12.6667H18.6675V14.0001ZM18.6675 10.6667H17.3342V9.33341H18.6675V10.6667Z"
                                fill="#202020"
                              />
                              <path
                                d="M19.9993 7.33366C21.8403 7.33366 23.3327 5.84127 23.3327 4.00033C23.3327 2.15938 21.8403 0.666992 19.9993 0.666992C18.1584 0.666992 16.666 2.15938 16.666 4.00033C16.666 5.84127 18.1584 7.33366 19.9993 7.33366Z"
                                fill="#202020"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_43_5091">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <h4 className="font-[Kanit] text-md font-[300]">
                          {blogData[0].createdDate}
                        </h4>
                      </div>
                      <button
                        id="BTN-1"
                        onClick={() =>
                          router.push(
                            `blog/${blogData[0].id}?bn=${blogData[0].mainTitle}`
                          )
                        }
                        onMouseEnter={() => handleHoverAnimate("BTN-1")}
                        onMouseLeave={() => handleLeaveAnimate("BTN-1")}
                        className="font-[Kanit] flex justify-center items-center gap-2 text-md font-[300] underline"
                      >
                        Read More
                        <span id="arrow" className="opacity-0 -rotate-90">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="16" cy="16" r="16" fill="black" />
                            <path
                              d="M8.60927 16.6667C8.43244 16.6667 8.26285 16.5965 8.13782 16.4715C8.01278 16.3464 7.94253 16.1768 7.94253 16C7.94253 15.8232 8.01278 15.6536 8.13782 15.5285C8.26285 15.4035 8.43244 15.3333 8.60927 15.3333H16.8323V10.6661C16.8324 10.5344 16.8716 10.4056 16.9448 10.296C17.0181 10.1865 17.1222 10.1011 17.244 10.0507C17.3657 10.0003 17.4997 9.9871 17.6289 10.0128C17.7582 10.0385 17.8769 10.1019 17.9702 10.195L23.304 15.5288C23.4289 15.6539 23.499 15.8233 23.499 16C23.499 16.1767 23.4289 16.3461 23.304 16.4712L17.9702 21.805C17.8769 21.8981 17.7582 21.9615 17.6289 21.9872C17.4997 22.0129 17.3657 21.9997 17.244 21.9493C17.1222 21.8989 17.0181 21.8135 16.9448 21.704C16.8716 21.5944 16.8324 21.4656 16.8323 21.3339V16.6667H8.60927Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.6, ease: "circInOut", delay: 0.7 }}
                className="w-[50%] flex flex-col justify-start items-start gap-3 2xl:gap-6"
              >
                {blogData.slice(1, 4).map((cur, id) => (
                  <div
                    key={id}
                    className="2xl:p-6 p-3 border border-[#D9D9D9] blogShadow w-full"
                  >
                    <div className="flex justify-start items-center gap-4">
                      <div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_43_5091)">
                            <path
                              d="M6.66667 6.66634C6.84348 6.66634 7.01305 6.5961 7.13807 6.47108C7.2631 6.34605 7.33333 6.17649 7.33333 5.99967V1.99967C7.33333 1.82286 7.2631 1.65329 7.13807 1.52827C7.01305 1.40325 6.84348 1.33301 6.66667 1.33301C6.48986 1.33301 6.32029 1.40325 6.19526 1.52827C6.07024 1.65329 6 1.82286 6 1.99967V5.99967C6 6.17649 6.07024 6.34605 6.19526 6.47108C6.32029 6.5961 6.48986 6.66634 6.66667 6.66634Z"
                              fill="#202020"
                            />
                            <path
                              d="M20.0008 9.00008C18.6747 9.00008 17.403 8.47329 16.4653 7.53561C15.5276 6.59793 15.0008 5.32616 15.0008 4.00008H8.13416V6.00008C8.13416 6.38906 7.97963 6.76211 7.70458 7.03717C7.42953 7.31222 7.05647 7.46674 6.66749 7.46674C6.27851 7.46674 5.90545 7.31222 5.6304 7.03717C5.35535 6.76211 5.20082 6.38906 5.20082 6.00008V4.00008H2.53416C2.3755 3.99827 2.2181 4.0283 2.07126 4.08838C1.92441 4.14847 1.79111 4.23739 1.67923 4.34989C1.56735 4.4624 1.47917 4.59619 1.4199 4.74336C1.36063 4.89054 1.33147 5.0481 1.33416 5.20674V20.1267C1.33151 20.2826 1.35959 20.4374 1.41679 20.5824C1.47399 20.7274 1.55919 20.8597 1.66753 20.9718C1.77587 21.0838 1.90522 21.1734 2.0482 21.2355C2.19118 21.2975 2.34498 21.3308 2.50082 21.3334H21.5008C21.6567 21.3308 21.8105 21.2975 21.9534 21.2355C22.0964 21.1734 22.2258 21.0838 22.3341 20.9718C22.4425 20.8597 22.5277 20.7274 22.5849 20.5824C22.6421 20.4374 22.6701 20.2826 22.6675 20.1267V8.22674C21.8702 8.73279 20.9452 9.00105 20.0008 9.00008ZM6.66749 17.3334H5.33416V16.0001H6.66749V17.3334ZM6.66749 14.0001H5.33416V12.6667H6.66749V14.0001ZM6.66749 10.6667H5.33416V9.33341H6.66749V10.6667ZM10.6675 17.3334H9.33416V16.0001H10.6675V17.3334ZM10.6675 14.0001H9.33416V12.6667H10.6675V14.0001ZM10.6675 10.6667H9.33416V9.33341H10.6675V10.6667ZM14.6675 17.3334H13.3342V16.0001H14.6675V17.3334ZM14.6675 14.0001H13.3342V12.6667H14.6675V14.0001ZM14.6675 10.6667H13.3342V9.33341H14.6675V10.6667ZM18.6675 17.3334H17.3342V16.0001H18.6675V17.3334ZM18.6675 14.0001H17.3342V12.6667H18.6675V14.0001ZM18.6675 10.6667H17.3342V9.33341H18.6675V10.6667Z"
                              fill="#202020"
                            />
                            <path
                              d="M19.9993 7.33366C21.8403 7.33366 23.3327 5.84127 23.3327 4.00033C23.3327 2.15938 21.8403 0.666992 19.9993 0.666992C18.1584 0.666992 16.666 2.15938 16.666 4.00033C16.666 5.84127 18.1584 7.33366 19.9993 7.33366Z"
                              fill="#202020"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_43_5091">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h4 className="font-[Kanit] text-md font-[300]">
                        {cur.createdDate}
                      </h4>
                    </div>
                    <h3 className="font-[Oxanium] lg:text-base 2xl:text-2xl font-[700] my-5">
                      {cur.mainTitle}
                    </h3>
                    <p className="font-[Oxanium] text-sm 2xl:text-base lg:text-sm xl:text-sm 2xl:font-[400] xl:font-[300] my-1 2xl:my-3 line-clamp-1">
                      {cur.mainInfo}
                    </p>

                    <button
                      id={`BTN-${id + 2}`}
                      onClick={() =>
                        router.push(`blog/${cur.id}?bn=${cur.mainTitle}`)
                      }
                      onMouseEnter={() => handleHoverAnimate(`BTN-${id + 2}`)}
                      onMouseLeave={() => handleLeaveAnimate(`BTN-${id + 2}`)}
                      className="font-[Kanit] text-md font-[300] flex justify-center items-center gap-2 underline"
                    >
                      Read More
                      <span id="arrow" className="opacity-0 -rotate-90">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="16" cy="16" r="16" fill="black" />
                          <path
                            d="M8.60927 16.6667C8.43244 16.6667 8.26285 16.5965 8.13782 16.4715C8.01278 16.3464 7.94253 16.1768 7.94253 16C7.94253 15.8232 8.01278 15.6536 8.13782 15.5285C8.26285 15.4035 8.43244 15.3333 8.60927 15.3333H16.8323V10.6661C16.8324 10.5344 16.8716 10.4056 16.9448 10.296C17.0181 10.1865 17.1222 10.1011 17.244 10.0507C17.3657 10.0003 17.4997 9.9871 17.6289 10.0128C17.7582 10.0385 17.8769 10.1019 17.9702 10.195L23.304 15.5288C23.4289 15.6539 23.499 15.8233 23.499 16C23.499 16.1767 23.4289 16.3461 23.304 16.4712L17.9702 21.805C17.8769 21.8981 17.7582 21.9615 17.6289 21.9872C17.4997 22.0129 17.3657 21.9997 17.244 21.9493C17.1222 21.8989 17.0181 21.8135 16.9448 21.704C16.8716 21.5944 16.8324 21.4656 16.8323 21.3339V16.6667H8.60927Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <BlogTab />
      <BlogMob />
    </>
  );
};

const BlogTab = () => {
  const router = useRouter();
  return (
    <>
      <div className="h-screen lg:portrait:h-[80vh]  overflow-hidden hidden md:flex relative xl:hidden lg:portrait:flex lg:landscape:hidden 2xl:hidden">
        <Image fill src={BlogBg} alt="blog-bg-image" />
        <div className="absolute  w-full h-full left-0 top-0 z-10 flex justify-center items-center">
          <div className="w-[90%]">
            <div className="flex justify-between items-center w-full my-5">
              <div className="h-[2px] w-[30%] bg-[#D9D9D9]" />
              <h4 className="text-4xl font-[400] AzonixFont font-[Azonix,Oxanium] uppercase">
                Our Blog
              </h4>
              <div className="h-[2px] w-[30%] bg-[#D9D9D9]" />
            </div>

            <div>
              <div className="h-80 flex justify-center items-start border border-[#D9D9D9] blogShadow">
                <div className="relative h-full w-[50%]">
                  <Image
                    src={`/${blogData[0].featureImg}`}
                    fill
                    alt="blogImg"
                    className="object -cover"
                  />
                </div>
                <div className="w-[50%] p-3">
                  <h4 className="font-[Oxanium] text-2xl font-[700]">
                    {blogData[0].mainTitle}
                  </h4>
                  <p className="text-base font-[400] font-[Oxanium] my-1 line-clamp-6">
                    {blogData[0].mainInfo}
                  </p>
                  <div className="border-t-2 border-[#D9D9D9] flex justify-between items-center p-3 mt-4">
                    <div className="flex justify-start items-center gap-2">
                      <div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_43_5091)">
                            <path
                              d="M6.66667 6.66634C6.84348 6.66634 7.01305 6.5961 7.13807 6.47108C7.2631 6.34605 7.33333 6.17649 7.33333 5.99967V1.99967C7.33333 1.82286 7.2631 1.65329 7.13807 1.52827C7.01305 1.40325 6.84348 1.33301 6.66667 1.33301C6.48986 1.33301 6.32029 1.40325 6.19526 1.52827C6.07024 1.65329 6 1.82286 6 1.99967V5.99967C6 6.17649 6.07024 6.34605 6.19526 6.47108C6.32029 6.5961 6.48986 6.66634 6.66667 6.66634Z"
                              fill="#202020"
                            />
                            <path
                              d="M20.0008 9.00008C18.6747 9.00008 17.403 8.47329 16.4653 7.53561C15.5276 6.59793 15.0008 5.32616 15.0008 4.00008H8.13416V6.00008C8.13416 6.38906 7.97963 6.76211 7.70458 7.03717C7.42953 7.31222 7.05647 7.46674 6.66749 7.46674C6.27851 7.46674 5.90545 7.31222 5.6304 7.03717C5.35535 6.76211 5.20082 6.38906 5.20082 6.00008V4.00008H2.53416C2.3755 3.99827 2.2181 4.0283 2.07126 4.08838C1.92441 4.14847 1.79111 4.23739 1.67923 4.34989C1.56735 4.4624 1.47917 4.59619 1.4199 4.74336C1.36063 4.89054 1.33147 5.0481 1.33416 5.20674V20.1267C1.33151 20.2826 1.35959 20.4374 1.41679 20.5824C1.47399 20.7274 1.55919 20.8597 1.66753 20.9718C1.77587 21.0838 1.90522 21.1734 2.0482 21.2355C2.19118 21.2975 2.34498 21.3308 2.50082 21.3334H21.5008C21.6567 21.3308 21.8105 21.2975 21.9534 21.2355C22.0964 21.1734 22.2258 21.0838 22.3341 20.9718C22.4425 20.8597 22.5277 20.7274 22.5849 20.5824C22.6421 20.4374 22.6701 20.2826 22.6675 20.1267V8.22674C21.8702 8.73279 20.9452 9.00105 20.0008 9.00008ZM6.66749 17.3334H5.33416V16.0001H6.66749V17.3334ZM6.66749 14.0001H5.33416V12.6667H6.66749V14.0001ZM6.66749 10.6667H5.33416V9.33341H6.66749V10.6667ZM10.6675 17.3334H9.33416V16.0001H10.6675V17.3334ZM10.6675 14.0001H9.33416V12.6667H10.6675V14.0001ZM10.6675 10.6667H9.33416V9.33341H10.6675V10.6667ZM14.6675 17.3334H13.3342V16.0001H14.6675V17.3334ZM14.6675 14.0001H13.3342V12.6667H14.6675V14.0001ZM14.6675 10.6667H13.3342V9.33341H14.6675V10.6667ZM18.6675 17.3334H17.3342V16.0001H18.6675V17.3334ZM18.6675 14.0001H17.3342V12.6667H18.6675V14.0001ZM18.6675 10.6667H17.3342V9.33341H18.6675V10.6667Z"
                              fill="#202020"
                            />
                            <path
                              d="M19.9993 7.33366C21.8403 7.33366 23.3327 5.84127 23.3327 4.00033C23.3327 2.15938 21.8403 0.666992 19.9993 0.666992C18.1584 0.666992 16.666 2.15938 16.666 4.00033C16.666 5.84127 18.1584 7.33366 19.9993 7.33366Z"
                              fill="#202020"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_43_5091">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h4 className="font-[Kanit] text-md font-[300]">
                        {blogData[0].createdDate}
                      </h4>
                    </div>
                    <button
                      onClick={() =>
                        router.push(
                          `blog/${blogData[0].id}?bn=${blogData[0].mainTitle}`
                        )
                      }
                      className="font-[Kanit] text-md font-[300] underline"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.6, ease: "circInOut", delay: 0.7 }}
                className="w-full flex flex-col justify-start items-start gap-4 mt-4"
              >
                {blogData.slice(1, 4).map((cur, id) => (
                  <div
                    key={id}
                    className="2xl:p-6 p-3 border border-[#D9D9D9] blogShadow w-full"
                  >
                    <div className="flex justify-start items-center gap-4">
                      <div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_43_5091)">
                            <path
                              d="M6.66667 6.66634C6.84348 6.66634 7.01305 6.5961 7.13807 6.47108C7.2631 6.34605 7.33333 6.17649 7.33333 5.99967V1.99967C7.33333 1.82286 7.2631 1.65329 7.13807 1.52827C7.01305 1.40325 6.84348 1.33301 6.66667 1.33301C6.48986 1.33301 6.32029 1.40325 6.19526 1.52827C6.07024 1.65329 6 1.82286 6 1.99967V5.99967C6 6.17649 6.07024 6.34605 6.19526 6.47108C6.32029 6.5961 6.48986 6.66634 6.66667 6.66634Z"
                              fill="#202020"
                            />
                            <path
                              d="M20.0008 9.00008C18.6747 9.00008 17.403 8.47329 16.4653 7.53561C15.5276 6.59793 15.0008 5.32616 15.0008 4.00008H8.13416V6.00008C8.13416 6.38906 7.97963 6.76211 7.70458 7.03717C7.42953 7.31222 7.05647 7.46674 6.66749 7.46674C6.27851 7.46674 5.90545 7.31222 5.6304 7.03717C5.35535 6.76211 5.20082 6.38906 5.20082 6.00008V4.00008H2.53416C2.3755 3.99827 2.2181 4.0283 2.07126 4.08838C1.92441 4.14847 1.79111 4.23739 1.67923 4.34989C1.56735 4.4624 1.47917 4.59619 1.4199 4.74336C1.36063 4.89054 1.33147 5.0481 1.33416 5.20674V20.1267C1.33151 20.2826 1.35959 20.4374 1.41679 20.5824C1.47399 20.7274 1.55919 20.8597 1.66753 20.9718C1.77587 21.0838 1.90522 21.1734 2.0482 21.2355C2.19118 21.2975 2.34498 21.3308 2.50082 21.3334H21.5008C21.6567 21.3308 21.8105 21.2975 21.9534 21.2355C22.0964 21.1734 22.2258 21.0838 22.3341 20.9718C22.4425 20.8597 22.5277 20.7274 22.5849 20.5824C22.6421 20.4374 22.6701 20.2826 22.6675 20.1267V8.22674C21.8702 8.73279 20.9452 9.00105 20.0008 9.00008ZM6.66749 17.3334H5.33416V16.0001H6.66749V17.3334ZM6.66749 14.0001H5.33416V12.6667H6.66749V14.0001ZM6.66749 10.6667H5.33416V9.33341H6.66749V10.6667ZM10.6675 17.3334H9.33416V16.0001H10.6675V17.3334ZM10.6675 14.0001H9.33416V12.6667H10.6675V14.0001ZM10.6675 10.6667H9.33416V9.33341H10.6675V10.6667ZM14.6675 17.3334H13.3342V16.0001H14.6675V17.3334ZM14.6675 14.0001H13.3342V12.6667H14.6675V14.0001ZM14.6675 10.6667H13.3342V9.33341H14.6675V10.6667ZM18.6675 17.3334H17.3342V16.0001H18.6675V17.3334ZM18.6675 14.0001H17.3342V12.6667H18.6675V14.0001ZM18.6675 10.6667H17.3342V9.33341H18.6675V10.6667Z"
                              fill="#202020"
                            />
                            <path
                              d="M19.9993 7.33366C21.8403 7.33366 23.3327 5.84127 23.3327 4.00033C23.3327 2.15938 21.8403 0.666992 19.9993 0.666992C18.1584 0.666992 16.666 2.15938 16.666 4.00033C16.666 5.84127 18.1584 7.33366 19.9993 7.33366Z"
                              fill="#202020"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_43_5091">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h4 className="font-[Kanit] text-md font-[300]">
                        {cur.createdDate}
                      </h4>
                    </div>
                    <h3 className="font-[Oxanium] text-lg 2xl:text-2xl font-[700] my-5">
                      {cur.mainTitle}
                    </h3>
                    <p className="text-sm font-[Oxanium] font-[400] line-clamp-1">
                      {cur.mainInfo}
                    </p>

                    <button
                      onClick={() =>
                        router.push(`blog/${cur.id}?bn=${cur.mainTitle}`)
                      }
                      className="font-[Kanit] text-md font-[300] underline"
                    >
                      Read More
                    </button>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BlogMob = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center items-center py-8 w-screen 2xl:hidden xl:hidden lg:hidden md:hidden">
        <div className="w-[90%] max-h-[90%] mx-auto">
          <div className="flex justify-between items-center w-full my-5">
            <div className="h-[2px] w-[30%] bg-[#D9D9D9]" />
            <h4 className="text-2xl font-[400] AzonixFont font-[Azonix,Oxanium] uppercase">
              Our Blog
            </h4>
            <div className="h-[2px] w-[30%] bg-[#D9D9D9]" />
          </div>

          <div>
            <div className="h-96 flex flex-col justify-center items-start border border-[#D9D9D9] blogShadow">
              <div className="relative h-[50%] w-full">
                <Image
                  src={`/${blogData[0].featureImg}`}
                  fill
                  alt="blogImg"
                  className="object-cover"
                />
              </div>
              <div className="w-full h-[50%] p-2">
                <h4 className="font-[Oxanium] text-base font-[700]">
                  {blogData[0].mainTitle}
                </h4>
                <p className="text-[13px] font-[400] font-[Oxanium] my-1 line-clamp-4">
                  {blogData[0].mainInfo}
                </p>
                <div className="border-t-2 border-[#D9D9D9] flex justify-between items-center py-3 px-0 mt-1">
                  <div className="flex justify-start items-center gap-1">
                    <div>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_43_5091)">
                          <path
                            d="M6.66667 6.66634C6.84348 6.66634 7.01305 6.5961 7.13807 6.47108C7.2631 6.34605 7.33333 6.17649 7.33333 5.99967V1.99967C7.33333 1.82286 7.2631 1.65329 7.13807 1.52827C7.01305 1.40325 6.84348 1.33301 6.66667 1.33301C6.48986 1.33301 6.32029 1.40325 6.19526 1.52827C6.07024 1.65329 6 1.82286 6 1.99967V5.99967C6 6.17649 6.07024 6.34605 6.19526 6.47108C6.32029 6.5961 6.48986 6.66634 6.66667 6.66634Z"
                            fill="#202020"
                          />
                          <path
                            d="M20.0008 9.00008C18.6747 9.00008 17.403 8.47329 16.4653 7.53561C15.5276 6.59793 15.0008 5.32616 15.0008 4.00008H8.13416V6.00008C8.13416 6.38906 7.97963 6.76211 7.70458 7.03717C7.42953 7.31222 7.05647 7.46674 6.66749 7.46674C6.27851 7.46674 5.90545 7.31222 5.6304 7.03717C5.35535 6.76211 5.20082 6.38906 5.20082 6.00008V4.00008H2.53416C2.3755 3.99827 2.2181 4.0283 2.07126 4.08838C1.92441 4.14847 1.79111 4.23739 1.67923 4.34989C1.56735 4.4624 1.47917 4.59619 1.4199 4.74336C1.36063 4.89054 1.33147 5.0481 1.33416 5.20674V20.1267C1.33151 20.2826 1.35959 20.4374 1.41679 20.5824C1.47399 20.7274 1.55919 20.8597 1.66753 20.9718C1.77587 21.0838 1.90522 21.1734 2.0482 21.2355C2.19118 21.2975 2.34498 21.3308 2.50082 21.3334H21.5008C21.6567 21.3308 21.8105 21.2975 21.9534 21.2355C22.0964 21.1734 22.2258 21.0838 22.3341 20.9718C22.4425 20.8597 22.5277 20.7274 22.5849 20.5824C22.6421 20.4374 22.6701 20.2826 22.6675 20.1267V8.22674C21.8702 8.73279 20.9452 9.00105 20.0008 9.00008ZM6.66749 17.3334H5.33416V16.0001H6.66749V17.3334ZM6.66749 14.0001H5.33416V12.6667H6.66749V14.0001ZM6.66749 10.6667H5.33416V9.33341H6.66749V10.6667ZM10.6675 17.3334H9.33416V16.0001H10.6675V17.3334ZM10.6675 14.0001H9.33416V12.6667H10.6675V14.0001ZM10.6675 10.6667H9.33416V9.33341H10.6675V10.6667ZM14.6675 17.3334H13.3342V16.0001H14.6675V17.3334ZM14.6675 14.0001H13.3342V12.6667H14.6675V14.0001ZM14.6675 10.6667H13.3342V9.33341H14.6675V10.6667ZM18.6675 17.3334H17.3342V16.0001H18.6675V17.3334ZM18.6675 14.0001H17.3342V12.6667H18.6675V14.0001ZM18.6675 10.6667H17.3342V9.33341H18.6675V10.6667Z"
                            fill="#202020"
                          />
                          <path
                            d="M19.9993 7.33366C21.8403 7.33366 23.3327 5.84127 23.3327 4.00033C23.3327 2.15938 21.8403 0.666992 19.9993 0.666992C18.1584 0.666992 16.666 2.15938 16.666 4.00033C16.666 5.84127 18.1584 7.33366 19.9993 7.33366Z"
                            fill="#202020"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_43_5091">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <h4 className="font-[Kanit] text-[12px] font-[300]">
                      {blogData[0].createdDate}
                    </h4>
                  </div>
                  <button
                    onClick={() =>
                      router.push(
                        `blog/${blogData[0].id}?bn=${blogData[0].mainTitle}`
                      )
                    }
                    className="font-[Kanit] text-[14px] font-[300] underline"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.6, ease: "circInOut", delay: 0.7 }}
              className="w-full flex flex-col justify-start items-start gap-2 mt-2"
            >
              {blogData.slice(1, 4).map((cur, id) => (
                <div
                  key={id}
                  className="p-4 border border-[#D9D9D9] blogShadow w-full"
                >
                  <div className="flex justify-start items-center gap-4">
                    <div>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_43_5091)">
                          <path
                            d="M6.66667 6.66634C6.84348 6.66634 7.01305 6.5961 7.13807 6.47108C7.2631 6.34605 7.33333 6.17649 7.33333 5.99967V1.99967C7.33333 1.82286 7.2631 1.65329 7.13807 1.52827C7.01305 1.40325 6.84348 1.33301 6.66667 1.33301C6.48986 1.33301 6.32029 1.40325 6.19526 1.52827C6.07024 1.65329 6 1.82286 6 1.99967V5.99967C6 6.17649 6.07024 6.34605 6.19526 6.47108C6.32029 6.5961 6.48986 6.66634 6.66667 6.66634Z"
                            fill="#202020"
                          />
                          <path
                            d="M20.0008 9.00008C18.6747 9.00008 17.403 8.47329 16.4653 7.53561C15.5276 6.59793 15.0008 5.32616 15.0008 4.00008H8.13416V6.00008C8.13416 6.38906 7.97963 6.76211 7.70458 7.03717C7.42953 7.31222 7.05647 7.46674 6.66749 7.46674C6.27851 7.46674 5.90545 7.31222 5.6304 7.03717C5.35535 6.76211 5.20082 6.38906 5.20082 6.00008V4.00008H2.53416C2.3755 3.99827 2.2181 4.0283 2.07126 4.08838C1.92441 4.14847 1.79111 4.23739 1.67923 4.34989C1.56735 4.4624 1.47917 4.59619 1.4199 4.74336C1.36063 4.89054 1.33147 5.0481 1.33416 5.20674V20.1267C1.33151 20.2826 1.35959 20.4374 1.41679 20.5824C1.47399 20.7274 1.55919 20.8597 1.66753 20.9718C1.77587 21.0838 1.90522 21.1734 2.0482 21.2355C2.19118 21.2975 2.34498 21.3308 2.50082 21.3334H21.5008C21.6567 21.3308 21.8105 21.2975 21.9534 21.2355C22.0964 21.1734 22.2258 21.0838 22.3341 20.9718C22.4425 20.8597 22.5277 20.7274 22.5849 20.5824C22.6421 20.4374 22.6701 20.2826 22.6675 20.1267V8.22674C21.8702 8.73279 20.9452 9.00105 20.0008 9.00008ZM6.66749 17.3334H5.33416V16.0001H6.66749V17.3334ZM6.66749 14.0001H5.33416V12.6667H6.66749V14.0001ZM6.66749 10.6667H5.33416V9.33341H6.66749V10.6667ZM10.6675 17.3334H9.33416V16.0001H10.6675V17.3334ZM10.6675 14.0001H9.33416V12.6667H10.6675V14.0001ZM10.6675 10.6667H9.33416V9.33341H10.6675V10.6667ZM14.6675 17.3334H13.3342V16.0001H14.6675V17.3334ZM14.6675 14.0001H13.3342V12.6667H14.6675V14.0001ZM14.6675 10.6667H13.3342V9.33341H14.6675V10.6667ZM18.6675 17.3334H17.3342V16.0001H18.6675V17.3334ZM18.6675 14.0001H17.3342V12.6667H18.6675V14.0001ZM18.6675 10.6667H17.3342V9.33341H18.6675V10.6667Z"
                            fill="#202020"
                          />
                          <path
                            d="M19.9993 7.33366C21.8403 7.33366 23.3327 5.84127 23.3327 4.00033C23.3327 2.15938 21.8403 0.666992 19.9993 0.666992C18.1584 0.666992 16.666 2.15938 16.666 4.00033C16.666 5.84127 18.1584 7.33366 19.9993 7.33366Z"
                            fill="#202020"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_43_5091">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <h4 className="font-[Kanit] text-[12px] font-[300]">
                      {cur.createdDate}
                    </h4>
                  </div>
                  <h3 className="font-[Oxanium] text-sm font-[700] my-2">
                    {cur.mainTitle}
                  </h3>
                  <p className="line-clamp-1 font-[Oxanium] text-[12px] font-[400]">
                    {cur.mainInfo}
                  </p>

                  <button
                    onClick={() =>
                      router.push(`blog/${cur.id}?bn=${cur.mainTitle}`)
                    }
                    className="font-[Kanit] text-sm font-[300] underline"
                  >
                    Read More
                  </button>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
