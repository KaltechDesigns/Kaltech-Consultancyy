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

                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/company/kaltech-designs/"
                    >
                      <motion.button
                        initial={{ y: "0%", scale: 1 }}
                        whileHover={{ y: "-20%", scale: 1.2 }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        className=" text-[#999999] hover:text-[#FFF] transition-all duration-200 ease-in-out"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.8879 0.540039H2.81371C2.21329 0.540039 1.63745 0.778557 1.21289 1.20312C0.788323 1.62769 0.549805 2.20352 0.549805 2.80395L0.549805 14.8781C0.549805 15.4786 0.788323 16.0544 1.21289 16.479C1.63745 16.9035 2.21329 17.142 2.81371 17.142H14.8879C15.4883 17.142 16.0642 16.9035 16.4887 16.479C16.9133 16.0544 17.1518 15.4786 17.1518 14.8781V2.80395C17.1518 2.20352 16.9133 1.62769 16.4887 1.20312C16.0642 0.778557 15.4883 0.540039 14.8879 0.540039V0.540039ZM6.20958 13.6783C6.2097 13.7243 6.20074 13.7699 6.18321 13.8125C6.16568 13.855 6.13992 13.8937 6.10741 13.9263C6.0749 13.9589 6.03628 13.9848 5.99376 14.0024C5.95124 14.0201 5.90565 14.0292 5.85962 14.0292H4.36827C4.32215 14.0293 4.27646 14.0203 4.23383 14.0027C4.1912 13.9851 4.15247 13.9593 4.11986 13.9267C4.08725 13.8941 4.06141 13.8553 4.04382 13.8127C4.02623 13.7701 4.01724 13.7244 4.01736 13.6783V7.4261C4.01736 7.33303 4.05433 7.24378 4.12014 7.17797C4.18595 7.11216 4.2752 7.07519 4.36827 7.07519H5.85962C5.95252 7.07544 6.04153 7.11252 6.10713 7.1783C6.17274 7.24408 6.20958 7.3332 6.20958 7.4261V13.6783ZM5.11347 6.4828C4.83362 6.4828 4.56006 6.39982 4.32737 6.24434C4.09468 6.08887 3.91333 5.86788 3.80623 5.60933C3.69914 5.35079 3.67112 5.06629 3.72571 4.79182C3.78031 4.51734 3.91507 4.26523 4.11295 4.06734C4.31084 3.86946 4.56296 3.7347 4.83743 3.6801C5.1119 3.62551 5.3964 3.65353 5.65494 3.76062C5.91349 3.86771 6.13448 4.04907 6.28995 4.28176C6.44543 4.51444 6.52841 4.78801 6.52841 5.06786C6.52841 5.44312 6.37934 5.80302 6.11399 6.06837C5.84863 6.33373 5.48874 6.4828 5.11347 6.4828ZM14.005 13.7028C14.0051 13.7452 13.9968 13.7872 13.9807 13.8264C13.9645 13.8656 13.9407 13.9012 13.9108 13.9312C13.8808 13.9612 13.8452 13.9849 13.806 14.0011C13.7668 14.0173 13.7248 14.0255 13.6824 14.0254H12.0788C12.0364 14.0255 11.9944 14.0173 11.9552 14.0011C11.916 13.9849 11.8804 13.9612 11.8504 13.9312C11.8204 13.9012 11.7966 13.8656 11.7805 13.8264C11.7643 13.7872 11.756 13.7452 11.7562 13.7028V10.7739C11.7562 10.3362 11.8844 8.85708 10.6119 8.85708C9.6262 8.85708 9.42527 9.86923 9.38566 10.3239V13.7066C9.38566 13.7913 9.35232 13.8727 9.29284 13.933C9.23336 13.9934 9.15251 14.0279 9.06777 14.0292H7.51887C7.47655 14.0292 7.43465 14.0208 7.39556 14.0046C7.35647 13.9884 7.32097 13.9646 7.29109 13.9346C7.26121 13.9047 7.23753 13.8691 7.22142 13.8299C7.20531 13.7908 7.19709 13.7489 7.19721 13.7066V7.39874C7.19709 7.35642 7.20531 7.31449 7.22142 7.27536C7.23753 7.23622 7.26121 7.20065 7.29109 7.17068C7.32097 7.14071 7.35647 7.11693 7.39556 7.10071C7.43465 7.08449 7.47655 7.07614 7.51887 7.07614H9.06777C9.15333 7.07614 9.23538 7.11012 9.29588 7.17062C9.35638 7.23113 9.39037 7.31318 9.39037 7.39874V7.94397C9.75637 7.39403 10.2988 6.97143 11.4562 6.97143C14.0201 6.97143 14.0031 9.36551 14.0031 10.6805L14.005 13.7028Z"
                            fill="#999999"
                          />
                        </svg>
                      </motion.button>
                    </Link>
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
                      185 N Wilson Rd, KY 40160, Radcliff Kentucky.
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

                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/company/kaltech-designs/
"
                    >
                      <motion.button
                        initial={{ y: "0%", scale: 1 }}
                        whileHover={{ y: "-20%", scale: 1.2 }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        className=" text-[#999999] hover:text-[#FFF] transition-all duration-200 ease-in-out"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.8879 0.540039H2.81371C2.21329 0.540039 1.63745 0.778557 1.21289 1.20312C0.788323 1.62769 0.549805 2.20352 0.549805 2.80395L0.549805 14.8781C0.549805 15.4786 0.788323 16.0544 1.21289 16.479C1.63745 16.9035 2.21329 17.142 2.81371 17.142H14.8879C15.4883 17.142 16.0642 16.9035 16.4887 16.479C16.9133 16.0544 17.1518 15.4786 17.1518 14.8781V2.80395C17.1518 2.20352 16.9133 1.62769 16.4887 1.20312C16.0642 0.778557 15.4883 0.540039 14.8879 0.540039V0.540039ZM6.20958 13.6783C6.2097 13.7243 6.20074 13.7699 6.18321 13.8125C6.16568 13.855 6.13992 13.8937 6.10741 13.9263C6.0749 13.9589 6.03628 13.9848 5.99376 14.0024C5.95124 14.0201 5.90565 14.0292 5.85962 14.0292H4.36827C4.32215 14.0293 4.27646 14.0203 4.23383 14.0027C4.1912 13.9851 4.15247 13.9593 4.11986 13.9267C4.08725 13.8941 4.06141 13.8553 4.04382 13.8127C4.02623 13.7701 4.01724 13.7244 4.01736 13.6783V7.4261C4.01736 7.33303 4.05433 7.24378 4.12014 7.17797C4.18595 7.11216 4.2752 7.07519 4.36827 7.07519H5.85962C5.95252 7.07544 6.04153 7.11252 6.10713 7.1783C6.17274 7.24408 6.20958 7.3332 6.20958 7.4261V13.6783ZM5.11347 6.4828C4.83362 6.4828 4.56006 6.39982 4.32737 6.24434C4.09468 6.08887 3.91333 5.86788 3.80623 5.60933C3.69914 5.35079 3.67112 5.06629 3.72571 4.79182C3.78031 4.51734 3.91507 4.26523 4.11295 4.06734C4.31084 3.86946 4.56296 3.7347 4.83743 3.6801C5.1119 3.62551 5.3964 3.65353 5.65494 3.76062C5.91349 3.86771 6.13448 4.04907 6.28995 4.28176C6.44543 4.51444 6.52841 4.78801 6.52841 5.06786C6.52841 5.44312 6.37934 5.80302 6.11399 6.06837C5.84863 6.33373 5.48874 6.4828 5.11347 6.4828ZM14.005 13.7028C14.0051 13.7452 13.9968 13.7872 13.9807 13.8264C13.9645 13.8656 13.9407 13.9012 13.9108 13.9312C13.8808 13.9612 13.8452 13.9849 13.806 14.0011C13.7668 14.0173 13.7248 14.0255 13.6824 14.0254H12.0788C12.0364 14.0255 11.9944 14.0173 11.9552 14.0011C11.916 13.9849 11.8804 13.9612 11.8504 13.9312C11.8204 13.9012 11.7966 13.8656 11.7805 13.8264C11.7643 13.7872 11.756 13.7452 11.7562 13.7028V10.7739C11.7562 10.3362 11.8844 8.85708 10.6119 8.85708C9.6262 8.85708 9.42527 9.86923 9.38566 10.3239V13.7066C9.38566 13.7913 9.35232 13.8727 9.29284 13.933C9.23336 13.9934 9.15251 14.0279 9.06777 14.0292H7.51887C7.47655 14.0292 7.43465 14.0208 7.39556 14.0046C7.35647 13.9884 7.32097 13.9646 7.29109 13.9346C7.26121 13.9047 7.23753 13.8691 7.22142 13.8299C7.20531 13.7908 7.19709 13.7489 7.19721 13.7066V7.39874C7.19709 7.35642 7.20531 7.31449 7.22142 7.27536C7.23753 7.23622 7.26121 7.20065 7.29109 7.17068C7.32097 7.14071 7.35647 7.11693 7.39556 7.10071C7.43465 7.08449 7.47655 7.07614 7.51887 7.07614H9.06777C9.15333 7.07614 9.23538 7.11012 9.29588 7.17062C9.35638 7.23113 9.39037 7.31318 9.39037 7.39874V7.94397C9.75637 7.39403 10.2988 6.97143 11.4562 6.97143C14.0201 6.97143 14.0031 9.36551 14.0031 10.6805L14.005 13.7028Z"
                            fill="#999999"
                          />
                        </svg>
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
                      { title: "Contact Us", path: "/contactus" },
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
                      185 N Wilson Rd, KY 40160, Radcliff Kentucky.
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
                  className="text-[#FFF] flex justify-center items-center gap-2 my-[2.5%] font-[Oxanium] font-[400] text-lg w-40 h-40 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTNAbout overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100 flex-shrink-0"
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

                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/company/kaltech-designs/
"
                    >
                      <motion.button
                        initial={{ y: "0%", scale: 1 }}
                        whileHover={{ y: "-20%", scale: 1.2 }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        className=" text-[#999999] hover:text-[#FFF] transition-all duration-200 ease-in-out"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.8879 0.540039H2.81371C2.21329 0.540039 1.63745 0.778557 1.21289 1.20312C0.788323 1.62769 0.549805 2.20352 0.549805 2.80395L0.549805 14.8781C0.549805 15.4786 0.788323 16.0544 1.21289 16.479C1.63745 16.9035 2.21329 17.142 2.81371 17.142H14.8879C15.4883 17.142 16.0642 16.9035 16.4887 16.479C16.9133 16.0544 17.1518 15.4786 17.1518 14.8781V2.80395C17.1518 2.20352 16.9133 1.62769 16.4887 1.20312C16.0642 0.778557 15.4883 0.540039 14.8879 0.540039V0.540039ZM6.20958 13.6783C6.2097 13.7243 6.20074 13.7699 6.18321 13.8125C6.16568 13.855 6.13992 13.8937 6.10741 13.9263C6.0749 13.9589 6.03628 13.9848 5.99376 14.0024C5.95124 14.0201 5.90565 14.0292 5.85962 14.0292H4.36827C4.32215 14.0293 4.27646 14.0203 4.23383 14.0027C4.1912 13.9851 4.15247 13.9593 4.11986 13.9267C4.08725 13.8941 4.06141 13.8553 4.04382 13.8127C4.02623 13.7701 4.01724 13.7244 4.01736 13.6783V7.4261C4.01736 7.33303 4.05433 7.24378 4.12014 7.17797C4.18595 7.11216 4.2752 7.07519 4.36827 7.07519H5.85962C5.95252 7.07544 6.04153 7.11252 6.10713 7.1783C6.17274 7.24408 6.20958 7.3332 6.20958 7.4261V13.6783ZM5.11347 6.4828C4.83362 6.4828 4.56006 6.39982 4.32737 6.24434C4.09468 6.08887 3.91333 5.86788 3.80623 5.60933C3.69914 5.35079 3.67112 5.06629 3.72571 4.79182C3.78031 4.51734 3.91507 4.26523 4.11295 4.06734C4.31084 3.86946 4.56296 3.7347 4.83743 3.6801C5.1119 3.62551 5.3964 3.65353 5.65494 3.76062C5.91349 3.86771 6.13448 4.04907 6.28995 4.28176C6.44543 4.51444 6.52841 4.78801 6.52841 5.06786C6.52841 5.44312 6.37934 5.80302 6.11399 6.06837C5.84863 6.33373 5.48874 6.4828 5.11347 6.4828ZM14.005 13.7028C14.0051 13.7452 13.9968 13.7872 13.9807 13.8264C13.9645 13.8656 13.9407 13.9012 13.9108 13.9312C13.8808 13.9612 13.8452 13.9849 13.806 14.0011C13.7668 14.0173 13.7248 14.0255 13.6824 14.0254H12.0788C12.0364 14.0255 11.9944 14.0173 11.9552 14.0011C11.916 13.9849 11.8804 13.9612 11.8504 13.9312C11.8204 13.9012 11.7966 13.8656 11.7805 13.8264C11.7643 13.7872 11.756 13.7452 11.7562 13.7028V10.7739C11.7562 10.3362 11.8844 8.85708 10.6119 8.85708C9.6262 8.85708 9.42527 9.86923 9.38566 10.3239V13.7066C9.38566 13.7913 9.35232 13.8727 9.29284 13.933C9.23336 13.9934 9.15251 14.0279 9.06777 14.0292H7.51887C7.47655 14.0292 7.43465 14.0208 7.39556 14.0046C7.35647 13.9884 7.32097 13.9646 7.29109 13.9346C7.26121 13.9047 7.23753 13.8691 7.22142 13.8299C7.20531 13.7908 7.19709 13.7489 7.19721 13.7066V7.39874C7.19709 7.35642 7.20531 7.31449 7.22142 7.27536C7.23753 7.23622 7.26121 7.20065 7.29109 7.17068C7.32097 7.14071 7.35647 7.11693 7.39556 7.10071C7.43465 7.08449 7.47655 7.07614 7.51887 7.07614H9.06777C9.15333 7.07614 9.23538 7.11012 9.29588 7.17062C9.35638 7.23113 9.39037 7.31318 9.39037 7.39874V7.94397C9.75637 7.39403 10.2988 6.97143 11.4562 6.97143C14.0201 6.97143 14.0031 9.36551 14.0031 10.6805L14.005 13.7028Z"
                            fill="#999999"
                          />
                        </svg>
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
                      { title: "Contact Us", path: "/contactus" },
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
                  185 N Wilson Rd, KY 40160, Radcliff Kentucky.
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

                  <Link href="/contactus">
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
                  </Link>
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
