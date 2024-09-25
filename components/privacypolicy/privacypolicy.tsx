import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <section className="h-full w-full relative overflow-hidden px-5 py-5 md:px-48 md:py-40">
        <div className="2xl:w-[80%] xl:w-[90%] lg:w-[90%]">
          <div className="w-[90%]">
            <motion.h1
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 0.6, ease: "circInOut", delay: 0.1 }}
              className="AzonixFont font-[Azonix,Oxanium] 2xl:landscape:text-7xl xl:text-[40px] lg:landscape:text-5xl lg:text-5xl font-[400]"
            >
              Privacy Policy
            </motion.h1>
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: "backInOut",
          }}
          className="h-full"
        >
          <motion.p className="font-[Oxanium]">
            Effective Date: 09/01/2024 Kaltech Consultancy (&quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) is committed to protecting the
            privacy and security of the personal information you share with us.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your personal information when you visit our website,
            [http://www.kaltechconsultancy.tech/] (the &ldquo;Website&rdquo;),
            or use our services, which include web design and Development,
            mobile application design and Development.
          </motion.p>

          <ol className="list-decimal mt-3 font-[Oxanium]">
            <li className="font-bold">Information We Collect</li>
            <p>
              We may collect various types of information when you interact with
              us, including:
            </p>
            <br />
            <h3 className="font-bold">Personal Information</h3>
            <p>
              When you use our website or services, we may collect personal
              information that you voluntarily provide to us. This may include:
            </p>
            <ul className="list-disc list-inside">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone Number</li>
              <li>Mailing Address</li>
              <li>Billing Information</li>
              <li>
                Any other information you provide to us when you fill out forms,
                submit inquiries, or register for services
              </li>
            </ul>

            <br />
            <h3 className="font-bold">Usage Data</h3>
            <p>
              We may also automatically collect information about how you access
              and use our website. This information may include:
            </p>
            <ul className="list-disc list-inside">
              <li>Your IP address</li>
              <li>Browser type and version</li>
              <li>The pages you visit on our website</li>
              <li>The time and date of your visit</li>
              <li>The time spent on each page</li>
              <li>Device identifiers and other diagnostic data</li>
            </ul>

            <br />
            <h3 className="font-bold">Cookies and Tracking Data</h3>
            <p>
              We use cookies, web beacons, and similar tracking technologies to
              collect information about your interaction with our website. You
              can control the use of cookies at the browser level. If you reject
              cookies, you may still use our Website, but your ability to use
              some features may be limited.
            </p>
            <br />

            <li className="font-bold">How We Use Your Information</li>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Providing Services:</span> To offer
                and manage our web design and mobile application design
                services.
              </li>
              <li>
                <span className="font-bold">Communication:</span> To respond to
                your inquiries, send confirmations, and provide updates about
                your projects.
              </li>
              <li>
                <span className="font-bold">Marketing and promotions:</span> To
                send newsletters, special offers, and promotions related to our
                services (with your consent).
              </li>
              <li>
                <span className="font-bold">Improving Services:</span> To
                improve and customize our Website and services, including by
                analyzing usage trends.
              </li>
              <li>
                <span className="font-bold">Legal compliance: </span> To comply
                with applicable legal obligations or enforce our agreements.
              </li>
            </ul>
            <br />

            <li className="font-bold">Sharing of Your Information</li>
            <p>
              Kaltech Consultancy will not sell, trade, or rent your personal
              information to third parties. However, we may share your
              information with:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Service Providers:</span> We may
                share your information with trusted third-party vendors and
                service providers who assist us in operating our Website,
                conducting our business, and delivering our services. These
                providers are contractually bound to keep your information
                secure and confidential.
              </li>
              <li>
                <span className="font-bold">Legal Requirements:</span>
                We may disclose your personal information if required to do so
                by law or in response to valid legal processes, such as a
                subpoena or court order.
              </li>
            </ul>
            <br />

            <li className="font-bold">Data Security</li>
            <p>
              We take reasonable precautions to protect your personal data from
              unauthorized access, disclosure, alteration, or destruction.
              However, no method of transmission over the Internet or electronic
              storage is 100% secure, and we cannot guarantee its absolute
              security.
            </p>

            <br />

            <li className="font-bold">Your Data Protection Rights</li>
            <p>
              Depending on your location, you may have the following rights
              regarding your personal data:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Access:</span>
                You can request a copy of the personal data we hold about you.
              </li>
              <li>
                <span className="font-bold">Correction:</span>
                You have the right to correct any inaccurate or incomplete
                information.
              </li>
              <li>
                <span className="font-bold ">Deletion:</span>
                You can request that we delete your personal data, subject to
                certain legal obligations.
              </li>
              <li>
                <span className="font-bold ">Opt-Out: </span>
                You can opt out of receiving marketing communications from us at
                any time.
              </li>
              <li>
                <span className="font-bold ">Portability:</span>
                You can request that we transfer your personal data to another
                organization or to you.
              </li>
              <p>
                To exercise these rights, please contact us at{" "}
                <Link
                  href="mailto:hello@kaltechconsultancy.tech."
                  className="font-secondaryFont font-bold"
                >
                  hello@kaltechconsultancy.tech.
                </Link>
              </p>
            </ul>

            <br />
            <li className="font-bold">Third-Party Links</li>
            <p>
              Our website may include links to third-party websites or services.
              We are not responsible for the privacy practices of these external
              websites. We encourage you to review the privacy policies of any
              third-party websites you visit.
            </p>

            <br />
            <li className="font-bold">Children&#39;s Privacy</li>
            <p>
              Kaltech Consultancy does not knowingly collect personal data from
              children under the age of 13. If you believe that we may have
              collected such information, please contact us immediately, and we
              will take appropriate steps to delete it.
            </p>
            <br />
            <li className="font-bold">Changes to this Privacy Policy</li>
            <p>
              We reserve the right to update or modify this Privacy Policy at
              any time. Any changes will be effective when we post the revised
              policy on our Website. Your continued use of the Website after the
              changes have been made constitutes your acceptance of the updated
              Privacy Policy.
            </p>

            <br />
            <li className="font-bold">Contact Us</li>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at{" "}
              <Link
                href="mailto:hello@kaltechconsultancy.tech."
                className="font-secondaryFont font-bold"
              >
                hello@kaltechconsultancy.tech.
              </Link>
            </p>
          </ol>
        </motion.div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
