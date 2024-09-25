import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Head from "next/head";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footers/Footer";



interface emailInfoType {
    fullName: string;
    email: string;
    phonenumber: string;
    subject: string;
    message: string;
  }
  

const Contactus: React.FC = () => {
  const notify = () => toast.success("Message sent successfully, we reach out tto you shortly");
  const [loading, setLoading] = useState(false);
  const errorMessage = () =>
    toast.error(
      "An error occurred while sending your message. Please try again"
    );

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send("service_o9et1ui", "template_99v2eul", formData, "yhr37czyaD6x0SuJT").then(
      (result) => {
        console.log("Success:", result.text);
        notify();


        setTimeout(() => {
          setFormData({
            user_name: "",
            user_email: "",
            user_phone: "",
            subject: "",
            message: "",
          });
          setLoading(false); // Set loading to false after the delay
        }, 1000); // 2000ms = 2 seconds
  

      },
      (error) => {
        console.error("Error:", error.text);
        errorMessage();

        // In case of an error, reset loading after a delay
        setTimeout(() => {
          setLoading(false);
        }, 1000); // Delay of 2 seconds even in case of error
      }
    );

  };


  return (
    <>
    <Head>
        <link rel="icon" href="/KaltechFavIcon.png" />
        <title>Kaltech Consultancy - Contact</title>
      </Head>
      <Navbar />
    <div className="w-full min-h-full md:min-h-screen pt-40 px-4 sm:px-5 md:px-10 lg:px-[126px] xl:px-[150px] bg-white  transition-all ease-linear duration-700 overflow-hidden">
      <div className="w-full h-full flex">
        <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row flex-shrink gap-10 overflow-hidden">
          <motion.h1
            className="text-5xl md:text-[80px] lg:text-9xl AzonixFont font-[Azonix,Oxanium]"
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "backInOut",
            }}
          >
              Let&apos;s get in touch
          </motion.h1>
          <div className="md:w-[30%]">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "circInOut", delay: 0.4 }}
                  className="font-[Oxanium] text-base font-[400]"
                >
                  Ready to embark on this journey with us? Contact our team to
                  schedule your initial consultation and discover how we can
                  help you reach your goals.
                </motion.p>
              </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full mt-10">
      <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "circInOut", delay: 0.6 }}
                className="md:w-[25%]"
              >
                <h4 className="font-[Oxanium] text-2xl lg:landscape:text-lg font-[400]">
                  or just
                </h4>
                <h4 className="font-[Oxanium] text-2xl lg:landscape:text-lg font-[400]">
                  say hello!
                </h4>
                <div className="flex flex-col justify-start items-start gap-4 mt-[20%] w-[65%]">
                  <Link
                    className="font-[Oxanium] text-lg lg:landscape:text-base font-[700] underline underline-offset-4"
                    href="tel:+1(931)-266-6101"
                  >
                    +1(931)-266-6101
                  </Link>
                  <Link
                    className="font-[Oxanium] text-lg lg:landscape:text-base font-[700] underline underline-offset-4"
                    href="mailto:info@kaltechdesigns.com"
                  >
                    info@kaltechconsultancy.tech
                  </Link>
                  <Link
                    className="font-[Oxanium] text-lg lg:landscape:text-base font-[700]"
                    href="/"
                  >
                    103 Stoneledge Ct, Elizabethtown, KY 42701, Kentucky, USA.
                  </Link>
                </div>
              </motion.div>

        {/* Form start */}
        <motion.div
          className="md:w-[60%] mb-20"
          initial={{
            opacity: 0,
            y: 200,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: "backInOut",
          }}
        >
          <form action="" onSubmit={handleSubmit} className="space-y-6 font-[Oxanium]">
            <div className="flex gap-10">
              <div className="w-full">
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  id=""
                  placeholder="Name *"
                  required
                  className="w-full border-b border-gray-400 bg-none focus:outline-none px-4 py-3 text-lg"
                />
              </div>

              <div className="w-full">
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  id=""
                  placeholder="Email *"
                  required
                  className="w-full border-b border-gray-400 bg-none focus:outline-none py-3 px-4 text-lg"
                />
              </div>
            </div>

            <div className="flex gap-10">
              <div className="w-full">
                <input
                  type="phone"
                  name="user_phone"
                  value={formData.user_phone}
                  onChange={handleChange}
                  id=""
                  placeholder="Phone *"
                  required
                  className="w-full border-b border-gray-400 bg-none focus:outline-none py-3 px-4 text-lg"
                />
              </div>

              <div className="w-full">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  id=""
                  placeholder="subject *"
                  required
                  className="w-full border-b border-gray-400 bg-none focus:outline-none py-3 px-4 text-lg"
                />
              </div>

              
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              id=""
              placeholder="Message *"
              required
              className="block w-full border-b border-gray-400 bg-none focus:outline-none py-3 px-4 text-lg"
            ></textarea>

<motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0.2, 0.6, 1] }}
                  transition={{
                    duration: 0.6,
                    ease: "backInOut",
                    delay: 0.4,
                    times: [0.2, 0.6, 1],
                  }}
                type="submit"
                  className={`text-[#2C2C2C] flex justify-center items-center gap-2 font-[Oxanium] font-[400] text-base w-32 h-32 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100 self-start p-3  disabled:opacity-55 disabled:cursor-not-allowed`}
                  disabled={loading}
                >
                  {
                    loading ? 'Sending...':'Send Message'
                  }
                  
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
          </form>
          <ToastContainer />
          {/* Form end */}
        </motion.div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contactus;
