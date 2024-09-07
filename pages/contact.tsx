import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";

import { motion } from "framer-motion";

import { Footer } from "@/components/common/Footers/Footer";
import { Navbar } from "@/components/common/Navbar";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

interface emailInfoType {
  fullName: string;
  email: string;
  message: string;
  phonenumber: string;
  subject: string;
}

const handleSendEmail = async (contactDeltails: emailInfoType,setLoading:any) => {
  setLoading(true);
  if (
    !contactDeltails.fullName ||
    !contactDeltails.email ||
    !contactDeltails.message ||
    !contactDeltails.subject
  ) {
    toast.error("fill the required fields");    
    setLoading(false);
    return;
  }

  const templateParams = {
    from_name: contactDeltails.fullName,
    email_id: contactDeltails.email,
    phone: contactDeltails.phonenumber,
    subject: contactDeltails.subject,
    message: contactDeltails.message,
  };

  const sendMail = await emailjs.send(
    "service_8ecwjgv", // Replace with your actual service ID
    "template_tozscrh", // Replace with your actual template ID
    templateParams,
    "1BxZpTTGfCmtTXvFy" // Replace with your actual public key
  );

  if (sendMail.status === 200) {
    toast.success("Your message has been sent successfully. We will get back to you shortly.")
    setLoading(false)
  } else {
    console.log("Some error occurred");
    setLoading(false)
  }

  
};

const Contact: React.FC = () => {
  /* The above code snippet is using React's useState hook to initialize a state variable called
  `contactDeltails` with an object containing properties for `fullName`, `email`, `subject`,
  `phonenumber`, and `message`, all initialized to empty strings. The `setContactDeltails` function
  can be used to update the state of `contactDeltails` with new values. */
  const [contactDeltails, setContactDeltails] = useState({
    fullName: "",
    email: "",
    subject: "",
    phonenumber: "",
    message: "",
  });
  const [isLoading,setIsLoading] = useState(false);
  /**
   * The `handleChange` function in TypeScript React is used to update the state with the new value of a
   * form input field.
   * @param {any} e - The parameter `e` in the `handleChange` function is an event object that is passed
   * when an event is triggered, such as a change event on an input field. It contains information about
   * the event, including the target element that triggered the event.
   */
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setContactDeltails({
      ...contactDeltails,
      [name]: value,
    });
  };

  // const handleSubmit = () => {
  //   const templateParams = {
  //     from_name: contactDeltails.fullName,
  //     email_id: contactDeltails.email,
  //     phone: contactDeltails.phonenumber,
  //     subject: contactDeltails.subject,
  //     message: contactDeltails.message,
  //   };

  //   emailjs
  //     .send(
  //       "service_8ecwjgv", // Replace with your actual service ID
  //       "template_tozscrh", // Replace with your actual template ID
  //       templateParams,
  //       "1BxZpTTGfCmtTXvFy" // Replace with your actual public key
  //     )
  //     .then((data) => {
  //       // Reset the form fields on success
  //       console.log(data, "the email");
  //       // setSuccess("Your message has been sent successfully. We will get back to you shortly.");
  //     })
  //     .catch((error) => {
  //       // setError("Some error occurred");
  //       console.log(error);
  //       // setIsLoading(false);
  //     });
  // };


  return (
    <>
      <Head>
        <link rel="icon" href="/KaltechFavIcon.png" />
        <title>Kaltech Consultancy - Contact</title>
      </Head>
      <Navbar />
      <div className="h-screen justify-center items-center hidden md:hidden 2xl:flex xl:flex lg:landscape:flex lg:portrait:hidden">
        <div className="w-[90%] h-full border-2 border-[#D9D9D9] border-t-0 border-b-0 flex justify-center items-center">
          <div className="w-[90%]">
            <div className="flex justify-between items-center gap-3">
              <div className="w-[70%]">
                <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "circInOut", delay: 0.2 }}
                  className="AzonixFont font-[Azonix,Oxanium] 2xl:landscape:text-8xl  lg:landscape:text-7xl uppercase font-[400]"
                >
                  Let&apos;s get in touch
                </motion.h1>
              </div>
              <div className="w-[30%]">
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

            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "circInOut", delay: 0.6 }}
                className="w-[25%]"
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
                    info@kaltechdesigns.com
                  </Link>
                  <Link
                    className="font-[Oxanium] text-lg lg:landscape:text-base font-[700]"
                    href="/"
                  >
                    103 Stoneledge Ct, Elizabethtown, KY 42701, Kentucky, USA.
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "circInOut", delay: 1 }}
                className=" w-[60%] flex flex-col justify-center items-center gap-5"
              >
                <div className="flex justify-between items-center gap-10 w-full">
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Name *"
                      onChange={handleChange}
                      name="fullName"
                      value={contactDeltails.fullName}
                    />
                  </div>
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Email *"
                      onChange={handleChange}
                      name="email"
                      value={contactDeltails.email}
                    />
                  </div>
                </div>
                {/* change */}
                <div className="flex justify-between items-center gap-10 w-full">
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Phone"
                      onChange={handleChange}
                      name="phonenumber"
                      value={contactDeltails.phonenumber}
                    />
                  </div>
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Subject *"
                      onChange={handleChange}
                      name="subject"
                      value={contactDeltails.subject}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center gap-10 w-full">
                  <div className="w-full">
                    <textarea
                      className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Message *"
                      onChange={handleChange}
                      name="message"
                      value={contactDeltails.message}
                    ></textarea>
                  </div>
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
                  onClick={() => handleSendEmail(contactDeltails,setIsLoading)}
                  className={`text-[#2C2C2C] flex justify-center items-center gap-2 font-[Oxanium] font-[400] text-base w-32 h-32 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100 self-start p-3  disabled:opacity-55 disabled:cursor-not-allowed`}
                  disabled={isLoading}
                >
                  {
                    isLoading ? 'Sending...':'Send Message'
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ContactTab />
      <ContactMob />
      <Footer />
    </>
  );
};

export default Contact;

const ContactTab = () => {
    /* The above code snippet is using React's useState hook to initialize a state variable called
  `contactDeltails` with an object containing properties for `fullName`, `email`, `subject`,
  `phonenumber`, and `message`, all initialized to empty strings. The `setContactDeltails` function
  can be used to update the state of `contactDeltails` with new values. */
  const [contactDeltails, setContactDeltails] = useState({
    fullName: "",
    email: "",
    subject: "",
    phonenumber: "",
    message: "",
  });
  const [isLoading,setIsLoading] = useState(false);
  /**
   * The `handleChange` function in TypeScript React is used to update the state with the new value of a
   * form input field.
   * @param {any} e - The parameter `e` in the `handleChange` function is an event object that is passed
   * when an event is triggered, such as a change event on an input field. It contains information about
   * the event, including the target element that triggered the event.
   */
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setContactDeltails({
      ...contactDeltails,
      [name]: value,
    });
  };
  return (
    <>
      <div className="h-screen hidden md:flex justify-center items-center overflow-hidden 2xl:hidden xl:hidden lg:landscape:hidden">
        <div className="w-[90%] h-full flex flex-col justify-center items-center ">
          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "circInOut", delay: 0.2 }}
              className="AzonixFont font-[Azonix,Oxanium] text-8xl lg:text-9xl uppercase font-[400]"
            >
              Let&apos;s get in touch
            </motion.h1>
          </div>
          <div className="ml-auto my-4 w-[50%]">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "circInOut", delay: 0.4 }}
              className="font-[Oxanium] text-xl font-[400]"
            >
              Ready to embark on this journey with us? Contact our team to
              schedule your initial consultation and discover how we can help
              you reach your goals.
            </motion.p>
          </div>

          <div className="flex justify-between items-center w-full my-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "circInOut", delay: 1 }}
              className=" w-full flex flex-col justify-center items-center gap-5"
            >
              <div className="flex justify-between items-center gap-10 w-full">
                <div className="w-[50%]">
                  <input
                    type="text"
                    className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                    placeholder="Name *"
                    name="fullName"
                    value={contactDeltails.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-[50%]">
                  <input
                    type="text"
                    className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                    placeholder="Email *"
                    name="email"
                    value={contactDeltails.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center gap-10 w-full">
                <div className="w-[50%]">
                  <input
                    type="text"
                    className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                    placeholder="Phone"
                    name="phonenumber"
                    value={contactDeltails.phonenumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-[50%]">
                  <input
                    type="text"
                    className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                    placeholder="Subject *"
                    name="subject"
                    value={contactDeltails.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center gap-10 w-full">
                <div className="w-full">
                  <textarea
                    className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                    placeholder="Message *"
                    name="message"
                    value={contactDeltails.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
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
                onClick={()=>handleSendEmail(contactDeltails,setIsLoading)}
                className="text-[#2C2C2C] flex justify-center items-center gap-2 font-[Oxanium] font-[400] text-base w-32 h-32 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100 self-center p-3 disabled:opacity-55 cursor-not-allowed"
                disabled={isLoading}
              >
                {
                    isLoading ? 'Sending...':'Send Message'
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
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "circInOut", delay: 0.6 }}
            className="w-full flex justify-between items-start my-4"
          >
            <div>
              <h4 className="font-[Oxanium] text-2xl font-[400]">or just</h4>
              <h4 className="font-[Oxanium] text-2xl font-[400]">say hello!</h4>
            </div>
            <div className="flex flex-col justify-start items-start gap-4 w-[55%]">
              <Link
                className="font-[Oxanium] text-lg font-[700] underline underline-offset-4"
                href="tel:+1(931)-266-6101"
              >
                +1(931)-266-6101
              </Link>
              <Link
                className="font-[Oxanium] text-lg font-[700] underline underline-offset-4"
                href="mailto:info@kaltechdesigns.com"
              >
                info@kaltechdesigns.com
              </Link>
              <Link className="font-[Oxanium] text-lg font-[700]" href="/">
                103 Stoneledge Ct, Elizabethtown, KY 42701, Kentucky, USA.
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

const ContactMob = () => {
     /* The above code snippet is using React's useState hook to initialize a state variable called
  `contactDeltails` with an object containing properties for `fullName`, `email`, `subject`,
  `phonenumber`, and `message`, all initialized to empty strings. The `setContactDeltails` function
  can be used to update the state of `contactDeltails` with new values. */
  const [contactDeltails, setContactDeltails] = useState({
    fullName: "",
    email: "",
    subject: "",
    phonenumber: "",
    message: "",
  });
  const [isLoading,setIsLoading] = useState(false);
  /**
   * The `handleChange` function in TypeScript React is used to update the state with the new value of a
   * form input field.
   * @param {any} e - The parameter `e` in the `handleChange` function is an event object that is passed
   * when an event is triggered, such as a change event on an input field. It contains information about
   * the event, including the target element that triggered the event.
   */
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setContactDeltails({
      ...contactDeltails,
      [name]: value,
    });
  };
  return (
    <>
      <div className="flex justify-center items-center py-5 md:hidden lg:hidden xl:hidden 2xl:hidden">
        <div className="w-[90%]">
          <div className="w-[90%]">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "circInOut", delay: 0.2 }}
              className="AzonixFont font-[Azonix,Oxanium] text-6xl uppercase font-[400]"
            >
              Let&apos;s get in touch
            </motion.h1>
          </div>
          <div className="w-[80%] my-3">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "circInOut", delay: 0.4 }}
              className="font-[Oxanium] text-lg font-[500]"
            >
              Ready to embark on this journey with us? Contact our team to
              schedule your initial consultation and discover how we can help
              you reach your goals.
            </motion.p>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 my-5">
            <div className="w-full">
              <input
                className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                placeholder="Name *"
                type="text"
                value={contactDeltails.fullName}
                name="fullName"
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <input
                className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                placeholder="Email *"
                type="text"
                value={contactDeltails.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <input
                className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                placeholder="Phone "
                type="text"
                value={contactDeltails.phonenumber}
                name="phonenumber"
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <input
                className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                placeholder="Subject *"
                type="text"
                value={contactDeltails.subject}
                name="subject"
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <textarea
                className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                placeholder="Message *"
                value={contactDeltails.message}
                name="message"
                onChange={handleChange}
              ></textarea>
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
              onClick={()=>handleSendEmail(contactDeltails,setIsLoading)}
              className="text-[#2C2C2C] flex justify-center items-center gap-2 font-[Oxanium] font-[400] text-sm w-28 h-28 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100 self-center p-3 disabled:opacity-55 cursor-not-allowed"
              disabled={isLoading}
            >
              {
                    isLoading ? 'Sending...':'Send Message'
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
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "circInOut", delay: 0.6 }}
            className="w-full flex flex-col justify-center items-center gap-8 my-10"
          >
            <div className="flex justify-center items-center gap-1.5">
              <h4 className="font-[Oxanium] text-2xl font-[400]">or just</h4>
              <h4 className="font-[Oxanium] text-2xl font-[400]">say hello!</h4>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 w-full">
              <Link
                className="font-[Oxanium] text-lg font-[700] underline underline-offset-4"
                href="tel:+1(931)-266-6101"
              >
                +1(931)-266-6101
              </Link>
              <Link
                className="font-[Oxanium] text-lg font-[700] underline underline-offset-4"
                href="mailto:info@kaltechdesigns.com"
              >
                info@kaltechdesigns.com
              </Link>
              <Link
                className="font-[Oxanium] text-lg font-[700] text-center"
                href="/"
              >
                103 Stoneledge Ct, Elizabethtown, KY 42701, Kentucky, USA.
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
