import React from "react";
import Image from "next/image";

import Logo from "../../../assets/images/WhtLogoHor1.svg";
import Link from "next/link";

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <div className="bg-[#000] flex justify-center items-center py-8 md:py-16 lg:py-16 xl:py-16 2xl:py-16">
      <div className="w-[90%] md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] flex flex-col justify-center items-center">
        <div className="relative h-12 w-[50%] my-4 md:my-0 lg:my-0 xl:my-0 2xl:my-0">
          <Image fill loading="lazy" alt="logo" src={Logo} />
        </div>
        <ul className="flex justify-around items-center flex-wrap gap-2 w-full md:w-[65%] lg:w-[65%] xl:w-[65%] 2xl:w-[65%] my-[4%] md:my-[2%] lg:my-[2%] xl:my-[2%] 2xl:my-[2%]">
          {[
            { title: "Home", path: "/" },
            { title: "About Us", path: "/about" },
            { title: "Service", path: "/service" },
            { title: "Blog", path: "/blog" },
            { title: "Contact Us", path: "/contact" },
          ].map((cur, id) => (
            <motion.div
              initial={{ scale: 1, y: "0%" }}
              whileHover={{ scale: 1.2, y: "-20%" }}
              transition={{ duration: 0.1, ease: "linear" }}
              key={id}
            >
              <Link
                className="font-[Oxanium] text-[#D6D6D6] font-[400] text-lg uppercase"
                href={cur.path}
              >
                {cur.title}
              </Link>
            </motion.div>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-5 my-5">
          <motion.div
            initial={{ scale: 1, y: "0%" }}
            whileHover={{ scale: 1.2, y: "-20%" }}
            transition={{ duration: 0.1, ease: "linear" }}
            className="h-10 w-10 bg-white flex justify-center items-center rounded-full cursor-pointer"
          >
            {/* <FacebookIcon className="text-black text-xl" /> */}
            <Link
              href="https://www.facebook.com/profile.php?id=100089610044002"
              target="_blank"
              className="h-full w-full flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                  fill="black"
                />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            initial={{ scale: 1, y: "0%" }}
            whileHover={{ scale: 1.2, y: "-20%" }}
            transition={{ duration: 0.1, ease: "linear" }}
            className="h-10 w-10 bg-white flex justify-center items-center rounded-full cursor-pointer"
          >
            <Link
              className="h-full w-full flex justify-center items-center"
              href="https://www.instagram.com/kaltechconsultancy/"
              target="_blank"
            >
              <InstagramIcon className="text-black text-xl" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ scale: 1, y: "0%" }}
            whileHover={{ scale: 1.2, y: "-20%" }}
            transition={{ duration: 0.1, ease: "linear" }}
            className="h-10 w-10 bg-white flex justify-center items-center rounded-full cursor-pointer"
          >
            <Link
              className="h-full w-full flex justify-center items-center"
              href="https://x.com/KaltechServices"
              target="_blank"
            >
              <XIcon className="text-black text-xl" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ scale: 1, y: "0%" }}
            whileHover={{ scale: 1.2, y: "-20%" }}
            transition={{ duration: 0.1, ease: "linear" }}
            className="h-10 w-10 bg-white flex justify-center items-center rounded-full cursor-pointer"
          >
            <Link
              className="h-full w-full flex justify-center items-center"
              href="https://www.linkedin.com/company/kaltech-designs/"
              target="_blank"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#F0F0F3" />
                <path
                  d="M18.9395 17C18.9392 17.5305 18.7282 18.0391 18.353 18.4139C17.9777 18.7888 17.4689 18.9993 16.9385 18.999C16.408 18.9988 15.8994 18.7878 15.5245 18.4125C15.1496 18.0373 14.9392 17.5285 14.9395 16.998C14.9397 16.4676 15.1507 15.959 15.5259 15.5841C15.9012 15.2092 16.41 14.9988 16.9405 14.999C17.4709 14.9993 17.9795 15.2103 18.3544 15.5855C18.7293 15.9608 18.9397 16.4696 18.9395 17ZM18.9995 20.48H14.9995V33H18.9995V20.48ZM25.3195 20.48H21.3395V33H25.2795V26.43C25.2795 22.77 30.0495 22.43 30.0495 26.43V33H33.9995V25.07C33.9995 18.9 26.9395 19.13 25.2795 22.16L25.3195 20.48Z"
                  fill="black"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        <div className="border-t-[2px] border-[#FFFFFF]/30 w-full ">
          <p className="text-center text-white py-4 text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-[Oxanium] font-[400]">
            <span className="text-[#FFFFFF]/50">
              © 2024 | Alrights reserved by
            </span>{" "}
            Kaltech Consultancy
          </p>
        </div>
      </div>
    </div>
  );
};
