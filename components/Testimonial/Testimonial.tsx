import React, { useState } from "react";
import Image from "next/image";

import TestimonialBg from "../../assets/images/TestimonialBg.png";
import TestimonialBg3 from "../../assets/images/TestimonialBg3.png";
import TestimonialBg2 from "../../assets/images/TestimonialBg2.png";
import personImg1 from "../../assets/images/TABB.jpg";
import personImg2 from "../../assets/images/BlizServices.png";
import personImg3 from "../../assets/images/EltaHealthcare.png";
import personImg4 from "../../assets/images/SaveAViilage.jpg";
import personImg5 from "../../assets/images/KikiVictory.jpg";
import personImg6 from "../../assets/images/UpWealthMagazine.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const testimonialData = [
  {
    image: personImg1,
    name: "Eleanor Jator",
    position: " Ph.D, MT(ASCP)CM.",
    description: ` “The TABB” website built by Kaltech Consultancy is highly functional and easy to navigate. Each requested component was skillfully placed to enhance effectiveness and professionalism. The website was completed promptly within the stipulated deadline, and the customer service addressed inquiries swiftly.
    `,
  },
  {
    image: personImg2,
    name: "Dr.David Etabasi",
    position: "CEO Bliz Services",
    description: `
    I couldn’t be happier with the website design services provided by Kaltech. From the initial consultation to the final launch, the team was professional, creative, and attentive to our needs. They took the time to understand our brand and vision, and the result was a stunning, user-friendly website that exceeded our expectations. The feedback from our customers has been overwhelmingly positive, and we’ve seen a significant increase in traffic and engagement. I highly recommend Kaltech Consultancy to anyone looking for top-notch web design services.`,
  },
  {
    image: personImg3,
    name: "E Voilet",
    position: "CEO Elta Healthcare",
    description: `We are absolutely thrilled with the website designed by Kaltech Consultancy. Their team took the time to understand our brand and goals, and the result is a site that perfectly reflects our identity. The design is clean, modern, and highly engaging. The entire process was smooth and stress-free, thanks to their professionalism and expertise. Our new website has already made a significant impact on our business, and we couldn’t be happier.`,
  },
  {
    image: personImg4,
    name: "A. CONSTANCE",
    position: "CEO Save A Village",
    description: `
    Kaltech Consultancy exceeded all our expectations with their web design services. From the initial consultation to the final launch, they were attentive, creative, and incredibly skilled. Our new website is not only beautiful but also highly functional and user-friendly. We have received positive feedback from our clients. I highly recommend Kaltech Consultancy to anyone in need of a custom designed website.`,
  },
  {
    image: personImg6,
    name: " J. SAKWE",
    position: "CEO UpWealth Magazine",
    description: `
    I am thoroughly impressed with the web design services provided by Kaltech Consultancy. They took our vision and turned it into a reality, creating a website that is both visually stunning and easy to navigate. The team was responsive, professional, and always willing to go the extra mile to ensure our satisfaction. We’ve received countless compliments on our new site.`,
  },
  {
    image: personImg5,
    name: "Christelle",
    position: "CEO Kiki Victory Designs",
    description: `
    Working with Kaltech Consultancy was a game-changer for our business. Their team transformed our outdated website into a modern, sleek, and highly functional platform. The entire process was seamless, and their attention to detail was impeccable. Our new site has not only improved our online presence but also boosted our sales significantly. We couldn’t be more pleased with the results
    `,
  },
];

export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((curr) => (curr === 0 ? testimonialData.length - 1 : curr - 1));
    console.log(currentIndex, "pervious");
  };
  const handleNext = () => {
    setCurrentIndex((curr) => (curr === testimonialData.length - 1 ? 0 : curr + 1));
  };

  return (
    <>
      <div className="h-screen w-full hidden md:hidden 2xl:flex lg:landscape:flex lg:portrait:hidden xl:flex relative">
        <Image
          src={TestimonialBg}
          alt="TestimonialBg-img"
          fill
          loading="lazy"
          className="opacity-50"
        />
        <div className="absolute w-full h-full flex justify-end items-center">
          <div className=" relative h-[85%] w-[90%] flex flex-col justify-center items-start gap-16">
            <div className="flex justify-between items-center w-[80%] ">
              <div className="h-[2px] bg-[#D9D9D9] w-[50%]" />
              <div>
                <h3 className="text-[#121212] 2xl:text-5xl xl:text-4xl lg:text-3xl font-[400] uppercase AzonixFont font-[Azonix,Oxanium]">
                  Testimonials
                </h3>
              </div>
            </div>
            {/* bg-[#ffffff33] */}
            <div className="relative border border-[#FFF] testimonialShadow rounded-md bg-[#ffffff33] w-[85%] h-[75%] flex justify-start items-center gap-5 px-9">
              <div className="absolute -top-16 left-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                >
                  <circle cx="60" cy="60" r="60" fill="black" />
                  <path
                    d="M27 82.2L45 35L57 38L45.2 85H28.8L27 82.2ZM63 82.2L81 35L93 38L81.2 85H64.8L63 82.2Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="w-[40%] h-full flex justify-start items-center">
                <div className="w-[85%] flex flex-col justify-center items-start gap-5 p-2">
                  <h3 className="font-[Oxanium] lg:text-3xl xl:text-3xl 2xl:text-4xl font-[700]">
                    What our clients say about us?
                  </h3>
                  <p className="font-[Oxanium] lg:text-sm xl:text-base 2xl:text-[17px] xl:font-[200] lg:font-[200] 2xl:font-[400]">
                    Our customer testimonials are more than just kind
                    words—they’re a testament to our commitment to excellence.
                    When our clients share their experiences, they provide
                    invaluable insights into the quality, reliability, and
                    effectiveness of what we offer. Let their success stories be
                    your inspiration.
                  </p>

                  <div className="flex justify-start items-center gap-5 my-4">
                    <button onClick={handlePrev}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        viewBox="0 0 52 52"
                        fill="none"
                      >
                        <circle
                          cx="26"
                          cy="26"
                          r="25"
                          stroke="black"
                          stroke-width="2"
                        />
                        <path
                          d="M17.334 26L23.834 32.5M17.334 26L23.834 19.5M17.334 26H28.709M34.6673 26H31.959"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>

                    <button onClick={handleNext}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        viewBox="0 0 53 52"
                        fill="none"
                      >
                        <circle
                          cx="26.8008"
                          cy="26"
                          r="25"
                          transform="rotate(-180 26.8008 26)"
                          stroke="black"
                          stroke-width="2"
                        />
                        <path
                          d="M35.4668 26L28.9668 19.5M35.4668 26L28.9668 32.5M35.4668 26L24.0918 26M18.1335 26H20.8418"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[65%] absolute right-0 h-[75%] bottom-[3.1%]  flex justify-center items-center">
              <div className="relative w-full max-h-full flex justify-start items-start gap-5 overflow-hidden">
                {testimonialData.map((cur, id) => (
                  <div
                    key={id}
                    style={{ transform: `translateX(-${currentIndex * 105}%)` }}
                    className={`testimonialCardBC h-[90%] min-w-[35%] py-5 px-6 flex justify-start items-center flex-col gap-5 transition-transform duration-200 ease-in-out`}
                  >
                    <div className="px-2 py-2 flex justify-start items-center gap-3 w-full  mx-auto borderGradient">
                      <div className="2xl:h-14 2xl:w-14 xl:h-12 xl:w-12 lg:h-10 lg:w-10 relative flex-shrink-0 rounded-full overflow-hidden">
                        <Image
                          fill
                          src={cur.image}
                          alt="personImg1"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h4 className="2xl:text-[22px] lg:text-lg xl:text-xl text-base font-[700] font-[Oxanium]">
                          {cur.name}
                        </h4>
                        <p className="2xl:text-[15px] text-[13px] font-[400] font-[Oxanium]">
                          {cur.position}
                        </p>
                      </div>
                    </div>
                    <p className="font-[Oxanium] 2xl:font-[300] xl:font-[200] lg:font-[200] lg:text-sm xl:text-base 2xl:text-base 2xl:line-clamp-[10] xl:line-clamp-[10] lg:line-clamp-[8]">
                      {cur.description}
                    </p>
                  </div>
                ))}

                <div className="absolute top-0 right-0 bg-transparent w-full h-full flex justify-end items-start">
                  <div className="bg-blue-40 w-[30%] h-full backdrop-blur-[3px] bg-white/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialTab />
      <TestimonialMob />
    </>
  );
};

const TestimonialTab = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((curr) => (curr === 0 ? testimonialData.length - 1 : curr - 1));
    console.log(currentIndex, "pervious");
  };
  const handleNext = () => {
    setCurrentIndex((curr) => (curr === testimonialData.length - 1 ? 0 : curr + 1));
  };
  return (
    <>
      <div className="h-screen lg:portrait:h-[70vh]  hidden relative md:flex 2xl:hidden lg:landscape:hidden lg:portrait:flex xl:flex ">
        <Image
          src={TestimonialBg}
          alt="TestimonialBg-img"
          fill
          loading="lazy"
          className="opacity-50"
        />
        <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center gap-8 z-10 overflow-hidden">
          <div className="w-[90%]">
            <div className="flex justify-between items-center w-full gap-5 py-2 ">
              <div className="h-[2px] bg-[#D9D9D9] flex-1" />
              <div>
                <h3 className="text-[#121212] text-4xl flex-shrink-0 font-[400] uppercase AzonixFont font-[Azonix,Oxanium]">
                  Testimonials
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="relative border border-[#FFF] testimonialShadow rounded-md bg-[#ffffff33] w-[90%]  flex flex-col justify-start items-center gap-5 px-7 py-7">
              <div className="absolute -top-12 left-5 z-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="75"
                  viewBox="0 0 120 120"
                  fill="none"
                >
                  <circle cx="60" cy="60" r="60" fill="black" />
                  <path
                    d="M27 82.2L45 35L57 38L45.2 85H28.8L27 82.2ZM63 82.2L81 35L93 38L81.2 85H64.8L63 82.2Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex justify-start items-start gap-4 flex-col z-10">
                <h4 className="font-[Oxanium] font-[700] text-5xl text-[#000000]">
                  What our clients say about us?
                </h4>
                <p className="font-[Oxanium] font-[400] text-lg text-[#2E2E2E]">
                  Our customer testimonials are more than just kind
                  words—they’re a testament to our commitment to excellence.
                  When our clients share their experiences, they provide
                  invaluable insights into the quality, reliability, and
                  effectiveness of what we offer. Let their success stories be
                  your inspiration.
                </p>
              </div>
              <div className=" w-full flex flex-col justify-center items-center gap-3 overflow-hidden">
                <div className="w-full flex justify-start items-start gap-3 ">
                  {testimonialData.map((cur, id) => (
                    <div
                      key={id}
                      style={{
                        transform: `translateX(-${currentIndex * 105}%)`,
                      }}
                      className={`testimonialCardBC min-w-[40%] py-3 px-6 flex justify-start items-center flex-col gap-5 transition-transform duration-200 ease-in-out`}
                    >
                      <div className="px-1 py-2 flex justify-start items-center gap-3 w-full  mx-auto borderGradient">
                        <div className="h-14 w-14 relative flex-shrink-0">
                          <Image
                            fill
                            src={cur.image}
                            alt="personImg1"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h4 className=" text-base font-[700] font-[Oxanium]">
                            {cur.name}
                          </h4>
                          <p className=" text-sm font-[400] font-[Oxanium]">
                            {cur.position}
                          </p>
                        </div>
                      </div>
                      <p className="font-[Oxanium] font-[400] text-base line-clamp-[9]">
                        {cur.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-start items-center gap-5 my-4">
                  <button onClick={handlePrev}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 52 52"
                      fill="none"
                    >
                      <circle
                        cx="26"
                        cy="26"
                        r="25"
                        stroke="black"
                        stroke-width="2"
                      />
                      <path
                        d="M17.334 26L23.834 32.5M17.334 26L23.834 19.5M17.334 26H28.709M34.6673 26H31.959"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>

                  <button onClick={handleNext}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 53 52"
                      fill="none"
                    >
                      <circle
                        cx="26.8008"
                        cy="26"
                        r="25"
                        transform="rotate(-180 26.8008 26)"
                        stroke="black"
                        stroke-width="2"
                      />
                      <path
                        d="M35.4668 26L28.9668 19.5M35.4668 26L28.9668 32.5M35.4668 26L24.0918 26M18.1335 26H20.8418"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TestimonialMob = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((curr) => (curr === 0 ? testimonialData.length - 1 : curr - 1));
    console.log(currentIndex, "pervious");
  };
  const handleNext = () => {
    setCurrentIndex((curr) => (curr === testimonialData.length - 1 ? 0 : curr + 1));
  };

  return (
    <>
      <div className="relative h-screen w-screen 2xl:hidden xl:hidden lg:hidden md:hidden overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full">
          <Image src={TestimonialBg3} fill alt="testimonial-bg" />
        </div>

        <div className="absolute top-0 left-0 w-full h-full z-10">
          <div className="w-[90%] mx-auto h-full flex flex-col justify-center items-center gap-7">
            <div className="flex justify-between items-center w-full gap-5 py-2 ">
              <div className="h-[2px] bg-[#D9D9D9] flex-1" />
              <div>
                <h3 className="text-[#121212] text-4xl flex-shrink-0 font-[400] uppercase AzonixFont font-[Azonix,Oxanium]">
                  Testimonials
                </h3>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center">
              <div className="relative border border-[#FFF] testimonialShadow rounded-md bg-[#ffffff33] w-full  flex flex-col justify-start items-center gap-5 px-4 py-5">
                <div className="absolute -top-7 left-5 z-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 120 120"
                    fill="none"
                  >
                    <circle cx="60" cy="60" r="60" fill="black" />
                    <path
                      d="M27 82.2L45 35L57 38L45.2 85H28.8L27 82.2ZM63 82.2L81 35L93 38L81.2 85H64.8L63 82.2Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex justify-start items-start gap-2 flex-col z-10">
                  <h4 className="font-[Oxanium] font-[700] text-3xl text-[#000000]">
                    What our clients say about us?
                  </h4>
                  <p className="font-[Oxanium] font-[400] text-sm text-[#2E2E2E]">
                    Our customer testimonials are more than just kind
                    words—they’re a testament to our commitment to excellence.
                    When our clients share their experiences, they provide
                    invaluable insights into the quality, reliability, and
                    effectiveness of what we offer. Let their success stories be
                    your inspiration.
                  </p>
                </div>
                <div className=" w-full flex flex-col justify-center items-center gap-2">
                  <div className="w-full flex justify-start items-start gap-3 overflow-hidden relative">
                    {testimonialData.map((cur, id) => (
                      <div
                        key={id}
                        style={{
                          transform: `translateX(-${currentIndex * 105}%)`,
                        }}
                        className={`testimonialCardBC min-w-[80%] py-3 px-6 flex justify-start items-center flex-col gap-5 transition-transform duration-200 ease-in-out`}
                      >
                        <div className="px-1 py-2 flex justify-start items-center gap-3 w-full  mx-auto borderGradient">
                          <div className="h-12 w-12 relative flex-shrink-0">
                            <Image
                              fill
                              src={cur.image}
                              alt="personImg1"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <h4 className=" text-base font-[700] font-[Oxanium]">
                              {cur.name}
                            </h4>
                            <p className=" text-[14px] font-[400] font-[Oxanium]">
                              {cur.position}
                            </p>
                          </div>
                        </div>
                        <p className="font-[Oxanium] font-[400] text-sm line-clamp-[8]">
                         {cur.description}
                        </p>
                      </div>
                    ))}
                    <div className="absolute top-0 h-full w-[20%] bg-transparent right-0 backdrop-blur-[3px]" />
                  </div>
                  <div className="flex justify-start items-center gap-5 my-2">
                    <button onClick={handlePrev}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 52 52"
                        fill="none"
                      >
                        <circle
                          cx="26"
                          cy="26"
                          r="25"
                          stroke="black"
                          stroke-width="2"
                        />
                        <path
                          d="M17.334 26L23.834 32.5M17.334 26L23.834 19.5M17.334 26H28.709M34.6673 26H31.959"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>

                    <button onClick={handleNext}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 53 52"
                        fill="none"
                      >
                        <circle
                          cx="26.8008"
                          cy="26"
                          r="25"
                          transform="rotate(-180 26.8008 26)"
                          stroke="black"
                          stroke-width="2"
                        />
                        <path
                          d="M35.4668 26L28.9668 19.5M35.4668 26L28.9668 32.5M35.4668 26L24.0918 26M18.1335 26H20.8418"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
