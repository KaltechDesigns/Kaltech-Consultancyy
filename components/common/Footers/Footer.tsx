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
        <div className="relative 2xl:h-12 xl:h-12 lg:h-10 md:h-9 h-8 w-[50%] my-4 md:my-0 lg:my-0 xl:my-0 2xl:my-0">
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
                className="font-[Oxanium] text-[#D6D6D6] font-[400] 2xl:text-lg xl:text-lg lg:text-base md:text-sm text-sm uppercase"
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
        </div>

        <div className="border-t-[2px] border-[#FFFFFF]/30 w-full ">
          <p className="text-center text-white py-4 text-[12px]  font-[Oxanium] font-[400]">
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
