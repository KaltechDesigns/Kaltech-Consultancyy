import React, { useRef } from "react";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";

import FooterLogo from "../../../assets/images/WhtLogoHor1.svg";
import AboutFooterLaptop from "../../../assets/images/AboutFooterLaptop.png";
import FooterBg from "../../../assets/images/footerAboutBg.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

import Link from "next/link";
import { useRouter } from "next/router";

export const AboutFooter = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [scope, animate] = useAnimate();
  const router = useRouter();
  const handelAnimation = () => {
    animate(
      ".vedioLayer",
      { y: "0%" },
      { duration: 0.5, ease: "circInOut", delay: 0.4 }
    );
  };
  const handleMouseLeave = () => {
    animate(
      ".vedioLayer",
      { y: "20%" },
      { duration: 0.5, ease: "circInOut", delay: 0.2 }
    );
  };
  return (
    <>
      <footer
        ref={scope}
        onMouseEnter={handelAnimation}
        onMouseLeave={handleMouseLeave}
        className="h-screen relative hidden overflow-hidden md:hidden 2xl:flex xl:flex lg:portrait:hidden lg:landscape:flex"
      >
        <div className=" bottom-0 absolute w-full h-[50%] flex justify-start items-end z-10">
          <div className="2xl:w-[85%] xl:w-[90%] lg:w-[90%] h-full flex justify-center items-center">
            <div className="w-[70%] bg-[#121212] flex flex-col justify-center items-center text-white h-full px-3 gap-5">
              <div className="w-[90%] h-[80%] mx-auto grid grid-cols-3 gap-5 border-b border-[#2A2A2A]">
                <div className="flex flex-col justify-center items-start">
                  <div className="h-12 w-[50%] relative my-3 lg:landscape:my-2">
                    <Image
                      src={FooterLogo}
                      alt="footer-logo"
                      fill
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[#999] font-[Oxanium] font-[400] text-base lg:landscape:text-sm my-4 lg:landscape:my-1">
                    Our dedication to client success is reflected in our track
                    record of helping businesses achieve increased brand
                    visibility, higher conversion rates, and sustained growth.
                  </p>
                  <div className="flex justify-start items-center gap-3 my-5">
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100089610044002"
                    >
                      <motion.button
                        initial={{ y: "0%", scale: 1 }}
                        whileHover={{ y: "-20%", scale: 1.2 }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        className=" text-[#999999] hover:text-[#FFF] transition-all duration-200 ease-in-out"
                      >
                        {/* <FacebookIcon className="text-[18px]" /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                            fill="#999999"
                          />
                        </svg>
                      </motion.button>
                    </Link>
                    <Link target="_blank" href="https://x.com/KaltechServices">
                      <motion.button
                        initial={{ y: "0%", scale: 1 }}
                        whileHover={{ y: "-20%", scale: 1.2 }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        className=" text-[#999999] hover:text-[#FFF] transition-all duration-200 ease-in-out"
                      >
                        <XIcon className="text-[18px]" />
                      </motion.button>
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/kaltechconsultancy/"
                    >
                      <motion.button
                        initial={{ y: "0%", scale: 1 }}
                        whileHover={{ y: "-20%", scale: 1.2 }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        className=" text-[#999999] hover:text-[#FFF] transition-all duration-200 ease-in-out"
                      >
                        <InstagramIcon className="text-[18px]" />
                      </motion.button>
                    </Link>
                    {/* <motion.button
                    initial={{ y: "0%", scale: 1 }}
                    whileHover={{ y: "-20%", scale: 1.2 }}
                    transition={{ duration: 0.3, ease: "linear" }}
                    className=" text-[#999999] hover:text-[#FFF] transition-all duration-200 ease-in-out"
                  >
                    <LinkedInIcon className="text-[18px]" />
                  </motion.button> */}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start">
                  <h4 className="font-[Kanit] text-[#FFF] text-xl xl:text-lg font-[600]">
                    Quick Links
                  </h4>
                  <ul className="my-3">
                    {[
                      { title: "Home", path: "/" },
                      { title: "About Us", path: "/about" },
                      { title: "Servces", path: "/service" },
                      { title: "Blog", path: "/blog" },
                      // { title: "Contact Us", path: "/contact" },
                    ].map((cur, id) => (
                      <motion.div
                        initial={{ scale: 1, y: "0%" }}
                        whileHover={{ scale: 1.2, y: "-10%" }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        key={id}
                        className="my-2 cursor-pointer"
                      >
                        <Link
                          href={cur.path}
                          className="font-[Oxanium] text-[#999] font-[400] text-lg lg:landscape:text-base hover:text-[#FFF] transition-all duration-200 ease-in-out"
                        >
                          {cur.title}
                        </Link>
                      </motion.div>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-center items-start">
                  <h4 className="font-[Kanit] text-[#FFF] text-xl xl:text-lg  font-[600]">
                    Contact Us
                  </h4>
                  <div className="w-[50%] lg:landscape:w-[80%]">
                    <p className="font-[Oxanium] text-[#999] text-lg lg:landscape:text-base font-[400] mt-4">
                      103 Stoneledge Ct, Elizabethtown, KY 42701, Kentucky, USA.
                    </p>
                  </div>
                  <Link
                    href="mailto:info@kaltechdesigns.com"
                    className="font-[Oxanium] text-[#999] text-lg lg:landscape:text-base font-[400] mt-2"
                  >
                    info@kaltechdesigns.com
                  </Link>
                  <Link
                    href="tel:+1(931) -266-6101 "
                    className="font-[Oxanium] text-[#999] text-lg lg:landscape:text-base font-[400] mt-2"
                  >
                    +1(931) -266-6101
                  </Link>
                </div>
              </div>

              <div className="flex justify-between items-center w-[90%] h-[20%] mx-auto">
                <div className="w-[20%] lg:landscape:w-[30%]">
                  <p className="font-[Oxanium] text-[#999] text-base lg:landscape:text-sm font-[400]">
                    © 2024 | Alrights reserved by{" "}
                    <span className="text-[#FFF]">Kaltech Designs</span>
                  </p>
                </div>
                <div className="bg-[#1D1D1D] w-[40%] lg:landscape:w-[60%] flex justify-center items-center py-1">
                  <input
                    className="font-[Oxanium] w-[90%] text-[14px] font-[400] px-3 py-3 bg-transparent border-none outline-none placeholder:text-[#999]"
                    placeholder="Enter your email"
                  />
                  <button className="w-[10%] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                    >
                      <path
                        d="M20.8313 0.195525C20.6725 0.029341 20.4322 -0.0378498 20.207 0.0209227L0.467037 5.16749C0.229595 5.22938 0.0507922 5.42004 0.00913568 5.65575C-0.0325209 5.89131 0.070499 6.12905 0.272854 6.26468L6.8171 10.6463V17.387C6.8171 17.635 6.97058 17.8586 7.20594 17.9534C7.28397 17.9849 7.36584 18 7.44691 18C7.61097 18 7.77215 17.9378 7.89264 17.8204L11.822 13.9971L14.7237 15.9398C14.8299 16.0111 14.9547 16.0479 15.0808 16.0479C15.1466 16.0479 15.213 16.0379 15.2771 16.0173C15.4639 15.9578 15.6114 15.8167 15.6758 15.636L20.9651 0.814117C21.0417 0.599761 20.9901 0.361709 20.8313 0.195525ZM17.4985 1.99643L7.4256 9.5656L2.11215 6.00792L17.4985 1.99643ZM8.07705 15.9071V11.4898L10.7663 13.2904L8.07705 15.9071ZM14.7567 14.474L8.51572 10.2953L19.0811 2.35623L14.7567 14.474Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[30%] bg-[#1D1D1D] text-white h-full flex flex-col justify-center items-center">
              <h4 className="AzonixFont font-[Azonix,Oxanium] text-[28px] lg:landscape:text-[20px] font-[400] text-center">
                Have you got a project in mind?
              </h4>
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0.2, 0.6, 1] }}
                transition={{
                  duration: 0.6,
                  ease: "backInOut",
                  delay: 0.4,
                  times: [0.2, 0.6, 1],
                }}
                onClick={() => router.push("/contact")}
                className="text-[#FFF] flex justify-center items-center gap-2 my-[5%] font-[Oxanium] font-[400] text-lg w-40 h-40 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTNAbout overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100"
              >
                Contact Us
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="12"
                    viewBox="0 0 14 13"
                    fill="none"
                    className="transition-colors duration-200 ease-in-out delay-100"
                  >
                    <path
                      d="M3.20485 0V1.25596H11.1597L0.67749 11.6742L1.56838 12.5596L12.0506 2.14142V10.0477H13.3143V0H3.20485Z"
                      // fill="#2C2C2C"
                    />
                  </svg>
                </span>
              </motion.button>

              <p className="font-[Oxanium] text-[#FFF] font-[500] text-lg lg:landscape:text-base">
                09 : 00 AM - 09: 00 PM
              </p>
              <span className="font-[Oxanium] text-[#999] font-[400] text-base">
                Monday - Friday
              </span>
            </div>
          </div>
        </div>

        <div
          className="absolute w-full h-[60%] flex justify-end items-end  vedioLayer"
          id="vedioLayer"
        >
          <div className="2xl:w-[70%] xl:w-[80%] lg:w-[65%] md:w-[60%] h-full relative">
            <div className="absolute w-full h-full">
              <video
                className="object-cover w-full h-full "
                muted
                loop
                controls={false}
                autoPlay
                playsInline
              >
                <source src="/FooterVideo.mp4"></source>
              </video>
            </div>
            <div className="absolute w-full h-full flex justify-center items-center ">
              <div className="w-[47%] flex justify-start items-start flex-col h-[85%] px-4">
                <h4 className="AzonixFont font-[Azonix,Oxanium] 2xl:text-4xl xl:text-3xl lg:text-3xl text-[#000] font-[400] xl:mt-16">
                  Let&apos;s Start It !!
                </h4>
                <p className="font-[Oxanium] 2xl:text-base xl:text-base lg:text-base xl:font-[200] 2xl:font-[400] text-[#000] my-2">
                  Let&apos;s build something great together. We deliver
                  beautiful experiences and we create exciting movements for you
                  and your projects. Our services are not just transational but
                  we work for your satisfaction because your achievement is our
                  success.
                  {/* Trust our team to build any project you have in mind. */}
                </p>
              </div>
              <div className="w-[47%] h-[80%] relative top-[10%]">
                <Image
                  fill
                  loading="lazy"
                  src={AboutFooterLaptop}
                  className="object-fill h-[50%] "
                  alt="about-footer-mockup"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <AboutFooterTab />
      <AboutFooterMob />
    </>
  );
};

const AboutFooterTab = () => {
  // const sectionRef = useRef<HTMLDivElement | null>(null);
  const [scope, animate] = useAnimate();
  const handelAnimation = () => {
    animate(
      ".vedioLayer",
      { y: "-40%" },
      { duration: 0.5, ease: "circInOut", delay: 0.4 }
    );
  };
  const handleMouseLeave = () => {
    animate(
      ".vedioLayer",
      { y: "0%" },
      { duration: 0.5, ease: "circInOut", delay: 0.2 }
    );
  };
  return (
    <>
      <footer
        ref={scope}
        onTouchStart={handelAnimation}
        onTouchEnd={handleMouseLeave}
        className="h-screen lg:portrait:h-[80vh] relative hidden md:flex xl:hidden 2xl:hidden lg:landscape:hidden"
      >
        <div
          className="absolute top-[10%] w-full h-[40%] flex justify-end items-center  vedioLayer"
          id="vedioLayer"
        >
          <div className="w-[75%] h-full relative">
            <div className="absolute w-full h-full">
              <video
                className="object-cover w-full h-full "
                muted
                loop
                controls={false}
                autoPlay
                playsInline
              >
                <source src="/FooterVideo.mp4"></source>
              </video>
            </div>
            <div className="absolute w-full h-full flex justify-center items-center ">
              <div className="w-[50%] flex justify-start items-start flex-col h-[85%] px-4">
                <h4 className="AzonixFont font-[Azonix,Oxanium] text-5xl text-[#000] font-[400]">
                  Lets go
                </h4>
                <p className="font-[Oxanium] text-base font-[400] text-[#000] my-2">
                  Lets Build something great together. Just like this website.
                  You can have your Digital dream fulfilled with us on your
                  side.
                </p>
              </div>
              <div className="w-[50%] h-[80%] relative top-[10%]">
                <Image
                  fill
                  loading="lazy"
                  src={AboutFooterLaptop}
                  className="object-fill h-[30%] "
                  alt="about-footer-mockup"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0  w-full flex justify-start items-end z-10">
          <div className=" w-full h-full flex flex-col justify-center items-center">
            <div className="w-full bg-[#121212] flex flex-col justify-center items-center text-white h-full py-5 px-3 gap-5">
              <div className="w-[90%]  mx-auto grid grid-cols-3 gap-3 border-b border-[#2A2A2A]">
                <div className="flex flex-col justify-center items-start">
                  <div className="h-12 w-[50%] relative my-1">
                    <Image
                      src={FooterLogo}
                      alt="footer-logo"
                      fill
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[#999] font-[Oxanium] font-[400] text-sm my-2">
                    Our dedication to client success is reflected in our track
                    record of helping businesses achieve increased brand
                    visibility, higher conversion rates, and sustained growth.
                  </p>
                  <div className="flex justify-start items-center gap-3 my-5">
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100089610044002"
                    >
                      <motion.button
                        initial={{ y: "0%", scale: 1 }}
                        whileHover={{ y: "-20%", scale: 1.2 }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        className=" text-[#999999] hover:text-[#FFF] transition-all duration-200 ease-in-out"
                      >
                        {/* <FacebookIcon className="text-[18px]" /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                            fill="#999999"
                          />
                        </svg>
                      </motion.button>
                    </Link>
                    <Link target="_blank" href="https://x.com/KaltechServices">
                      <motion.button
                        initial={{ y: "0%", scale: 1 }}
                        whileHover={{ y: "-20%", scale: 1.2 }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        className=" text-[#999999] hover:text-[#FFF] transition-all duration-200 ease-in-out"
                      >
                        <XIcon className="text-[18px]" />
                      </motion.button>
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/kaltechconsultancy/
"
                    >
                      <motion.button
                        initial={{ y: "0%", scale: 1 }}
                        whileHover={{ y: "-20%", scale: 1.2 }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        className=" text-[#999999] hover:text-[#FFF] transition-all duration-200 ease-in-out"
                      >
                        <InstagramIcon className="text-[18px]" />
                      </motion.button>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start">
                  <h4 className="font-[Kanit] text-[#FFF] text-xl font-[600]">
                    Quick Links
                  </h4>
                  <ul className="my-1">
                    {[
                      { title: "Home", path: "/" },
                      { title: "About Us", path: "/about" },
                      { title: "Servces", path: "/service" },
                      { title: "Blog", path: "/blog" },
                      { title: "Contact Us", path: "/contact" },
                    ].map((cur, id) => (
                      <motion.div
                        initial={{ scale: 1, y: "0%" }}
                        whileHover={{ scale: 1.2, y: "-10%" }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        key={id}
                        className="my-2 cursor-pointer"
                      >
                        <Link
                          href={cur.path}
                          className="font-[Oxanium] text-[#999] font-[400] text-base hover:text-[#FFF] transition-all duration-200 ease-in-out"
                        >
                          {cur.title}
                        </Link>
                      </motion.div>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-center items-start">
                  <h4 className="font-[Kanit] text-[#FFF] text-xl font-[600]">
                    Contact Us
                  </h4>
                  <div className="w-[90%]">
                    <p className="font-[Oxanium] text-[#999] text-base font-[400] mt-4">
                      103 Stoneledge Ct, Elizabethtown, KY 42701, Kentucky, USA.
                    </p>
                  </div>
                  <Link
                    href="mailto:info@kaltechdesigns.com"
                    className="font-[Oxanium] text-[#999] text-base font-[400] mt-1"
                  >
                    info@kaltechdesigns.com
                  </Link>
                  <Link
                    href="tel:+1(931) -266-6101 "
                    className="font-[Oxanium] text-[#999] text-base font-[400] mt-1"
                  >
                    +1(931) -266-6101
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#1D1D1D] text-white flex justify-center items-center">
              <div className="flex justify-between items-center w-[90%]">
                <div className="">
                  <h4 className="AzonixFont font-[Azonix,Oxanium] text-[32px] font-[400] text-center">
                    Have you got a project in mind?
                  </h4>

                  <p className="font-[Oxanium] text-[#FFF] font-[500] text-lg">
                    09 : 00 AM - 09: 00 PM
                  </p>
                  <span className="font-[Oxanium] text-[#999] font-[400] text-base">
                    Monday - Friday
                  </span>
                </div>

                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0.2, 0.6, 1] }}
                  transition={{
                    duration: 0.6,
                    ease: "backInOut",
                    delay: 0.4,
                    times: [0.2, 0.6, 1],
                  }}
                  className="text-[#FFF] flex justify-center items-center gap-2 my-[2.5%] font-[Oxanium] font-[400] text-lg w-40 h-40 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTNAbout overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100"
                >
                  Contact Us
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="12"
                      viewBox="0 0 14 13"
                      fill="none"
                      className="transition-colors duration-200 ease-in-out delay-100"
                    >
                      <path
                        d="M3.20485 0V1.25596H11.1597L0.67749 11.6742L1.56838 12.5596L12.0506 2.14142V10.0477H13.3143V0H3.20485Z"
                        // fill="#2C2C2C"
                      />
                    </svg>
                  </span>
                </motion.button>
              </div>
            </div>

            <div className="w-full flex justify-center items-center bg-[#121212] py-3">
              <div className="flex justify-between items-center w-[90%]   mx-auto">
                <div className="w-[25%]">
                  <p className="font-[Oxanium] text-[#999] text-sm font-[400]">
                    © 2024 | Alrights reserved by{" "}
                    <span className="text-[#FFF]">Kaltech Designs</span>
                  </p>
                </div>
                <div className="bg-[#1D1D1D] w-[45%] flex justify-center items-center py-1">
                  <input
                    className="font-[Oxanium] w-[90%] text-[14px] font-[400] px-3 py-3 bg-transparent border-none outline-none placeholder:text-[#999]"
                    placeholder="Enter your email"
                  />
                  <button className="w-[10%] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                    >
                      <path
                        d="M20.8313 0.195525C20.6725 0.029341 20.4322 -0.0378498 20.207 0.0209227L0.467037 5.16749C0.229595 5.22938 0.0507922 5.42004 0.00913568 5.65575C-0.0325209 5.89131 0.070499 6.12905 0.272854 6.26468L6.8171 10.6463V17.387C6.8171 17.635 6.97058 17.8586 7.20594 17.9534C7.28397 17.9849 7.36584 18 7.44691 18C7.61097 18 7.77215 17.9378 7.89264 17.8204L11.822 13.9971L14.7237 15.9398C14.8299 16.0111 14.9547 16.0479 15.0808 16.0479C15.1466 16.0479 15.213 16.0379 15.2771 16.0173C15.4639 15.9578 15.6114 15.8167 15.6758 15.636L20.9651 0.814117C21.0417 0.599761 20.9901 0.361709 20.8313 0.195525ZM17.4985 1.99643L7.4256 9.5656L2.11215 6.00792L17.4985 1.99643ZM8.07705 15.9071V11.4898L10.7663 13.2904L8.07705 15.9071ZM14.7567 14.474L8.51572 10.2953L19.0811 2.35623L14.7567 14.474Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const AboutFooterMob = () => {
  return (
    <>
      <div className="h-screen md:hidden lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-col justify-center items-center h-full w-full">
          <div className="w-[95%] h-[30%] ml-auto relative">
            <video
              className="object-cover w-full h-full "
              muted
              loop
              controls={false}
              autoPlay
              playsInline
            >
              <source src="/FooterVideo.mp4"></source>
            </video>

            <div className="absolute top-0 left-0 z-10 bg-transparent w-full h-full">
              <div className="flex justify-center items-center w-full h-full">
                <div className="w-[50%] flex justify-start items-start flex-col h-[85%] px-4">
                  <h4 className="AzonixFont font-[Azonix,Oxanium] text-2xl text-[#000] font-[400]">
                    Lets go
                  </h4>
                  <p className="font-[Oxanium] text-sm font-[400] text-[#000] my-1">
                    Lets Build something great together. Just like this website.
                    You can have your Digital dream fulfilled with us on your
                    side.
                  </p>
                </div>
                <div className="w-[50%] h-[70%] relative top-[5%]">
                  <Image
                    fill
                    loading="lazy"
                    src={AboutFooterLaptop}
                    className="object-fill"
                    alt="about-footer-mockup"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[70%] bg-[#121212] mx-auto py-4">
            <div className="w-[90%] mx-auto">
              <div className="flex justify-between items-start gap-2">
                <div className="w-[50%]">
                  <div className="h-10 w-[70%] relative my-1">
                    <Image
                      src={FooterLogo}
                      alt="footer-logo"
                      fill
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[#999] font-[Oxanium] font-[400] text-[12px] my-2">
                    Our dedication to client success is reflected in our track
                    record of helping businesses achieve increased brand
                    visibility, higher conversion rates, and sustained growth.
                  </p>
                  <div className="flex justify-start items-center gap-3 my-5">
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100089610044002"
                    >
                      <motion.button
                        initial={{ y: "0%", scale: 1 }}
                        whileHover={{ y: "-20%", scale: 1.2 }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        className=" text-[#999999] hover:text-[#FFF] transition-all duration-200 ease-in-out"
                      >
                        {/* <FacebookIcon className="text-[18px]" /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                            fill="#999999"
                          />
                        </svg>
                      </motion.button>
                    </Link>
                    <Link target="_blank" href="https://x.com/KaltechServices">
                      <motion.button
                        initial={{ y: "0%", scale: 1 }}
                        whileHover={{ y: "-20%", scale: 1.2 }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        className=" text-[#999999] hover:text-[#FFF] transition-all duration-200 ease-in-out"
                      >
                        <XIcon className="text-[18px]" />
                      </motion.button>
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/kaltechconsultancy/
"
                    >
                      <motion.button
                        initial={{ y: "0%", scale: 1 }}
                        whileHover={{ y: "-20%", scale: 1.2 }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        className=" text-[#999999] hover:text-[#FFF] transition-all duration-200 ease-in-out"
                      >
                        <InstagramIcon className="text-[18px]" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
                <div className=" w-[50%] px-3">
                  <h4 className="font-[Kanit] text-[#FFF] text-lg font-[600]">
                    Quick Links
                  </h4>
                  <ul className="my-1">
                    {[
                      { title: "Home", path: "/" },
                      { title: "About Us", path: "/about" },
                      { title: "Servces", path: "/service" },
                      { title: "Blog", path: "/blog" },
                      { title: "Contact Us", path: "/contact" },
                    ].map((cur, id) => (
                      <motion.div
                        initial={{ scale: 1, y: "0%" }}
                        whileHover={{ scale: 1.2, y: "-10%" }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        key={id}
                        className="my-2 cursor-pointer"
                      >
                        <Link
                          href={cur.path}
                          className="font-[Oxanium] text-[#999] font-[400] text-base hover:text-[#FFF] transition-all duration-200 ease-in-out"
                        >
                          {cur.title}
                        </Link>
                      </motion.div>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="my-2 flex justify-between items-center gap-2">
                <div className="w-[50%]">
                  <h4 className="font-[Kanit] text-[#FFF] text-lg font-[600]">
                    Contact Us
                  </h4>

                  <p className="font-[Oxanium] text-[#999] text-sm font-[400] mt-4">
                    103 Stoneledge Ct, Elizabethtown, KY 42701, Kentucky, USA.
                  </p>
                </div>
                <div className="w-[50%] flex flex-col justify-start items-start gap-4">
                  <Link
                    href="mailto:info@kaltechdesigns.com"
                    className="font-[Oxanium] text-[#999] text-sm font-[400]"
                  >
                    info@kaltechdesigns.com
                  </Link>
                  <Link
                    href="tel:+1(931) -266-6101 "
                    className="font-[Oxanium] text-[#999] text-sm font-[400]"
                  >
                    +1(931) -266-6101
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[#1D1D1D] flex justify-center items-center">
              <div className="w-[90%]">
                <div className="flex justify-center items-center w-full">
                  <div className="w-[60%]">
                    <h4 className="AzonixFont font-[Azonix,Oxanium] text-[17px] font-[400] text-white text-left">
                      Have you got a project in mind?
                    </h4>

                    <p className="font-[Oxanium] text-[#FFF] font-[500] text-[13px] ">
                      09 : 00 AM - 09: 00 PM
                    </p>

                    <span className="font-[Oxanium] text-[#999] font-[400] text-[13px]">
                      Monday - Friday
                    </span>
                  </div>

                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0.2, 0.6, 1] }}
                    transition={{
                      duration: 0.6,
                      ease: "backInOut",
                      delay: 0.4,
                      times: [0.2, 0.6, 1],
                    }}
                    className="text-[#FFF] flex justify-center items-center gap-2 my-[2.5%] font-[Oxanium] font-[400] text-sm w-28 h-28 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTNAbout overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100"
                  >
                    Contact Us
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="12"
                        viewBox="0 0 14 13"
                        fill="none"
                        className="transition-colors duration-200 ease-in-out delay-100"
                      >
                        <path
                          d="M3.20485 0V1.25596H11.1597L0.67749 11.6742L1.56838 12.5596L12.0506 2.14142V10.0477H13.3143V0H3.20485Z"
                          // fill="#2C2C2C"
                        />
                      </svg>
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="w-[90%] mx-auto flex justify-center items-center my-3 h-[10%]">
              <p className="font-[Oxanium] text-[#999] text-center text-sm font-[400]">
                © 2024 | Alrights reserved by{" "}
                <span className="text-[#FFF]">Kaltech Designs</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
