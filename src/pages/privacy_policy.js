import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

function privacy_policy() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b  mb-[-100px] from-[#F4E7D5] to-[#ffffff] h-[200px]"></div>
      <div className="max-w-screen-lg mx-auto p-10 flex flex-col justify-center items-center text-black">
        <h1 className="text-[30px] font-semibold    ">Privacy Policy</h1>
        <p className="font-oswald">
          At The Meraki Corner, we respect the privacy of our users and are
          committed to protecting their personal information. This Privacy
          Policy outlines how we collect, use, and safeguard the information you
          provide to us through our website and services.
        </p>

        <h2 className="mt-[20px] text-[20px] font-bold">
          Information We Collect
        </h2>
        <p className="font-oswald">
          When you interact with our website, we may collect certain information
          from you, including:
        </p>
        <ul className="font-oswald">
          <li>
            Personal Information: Name, email ,address, phone number, etc.
          </li>
          <li>
            Usage Data: IP address, browser type, operating system, referring
            website, pages visited, and the dates/times of visits.
          </li>
        </ul>

        <h2 className="mt-[20px] text-[20px] font-bold">
          How We Use Your Information
        </h2>
        <p className="font-oswald">
          We may use the information we collect from you for various purposes,
          including:
        </p>
        <ul className="font-oswald">
          <li>Providing and improving our services</li>
          <li>Personalizing your experience</li>
          <li>Analyzing website usage and trends</li>
          <li>Communicating with you and responding to inquiries</li>
        </ul>

        <h2 className="mt-[20px] text-[20px] font-bold">
          Information Sharing and Disclosure
        </h2>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. However, we may disclose your information in certain
          circumstances, such as when required by law or to comply with legal
          processes.
        </p>

        <h2 className="mt-[20px] text-[20px] font-bold">Data Security</h2>
        <p className="font-oswald">
          We have implemented measures to protect the security of your
          information. However, please be aware that no method of transmission
          over the internet or electronic storage is 100% secure, and we cannot
          guarantee absolute security.
        </p>

        <h2 className="mt-[20px] text-[20px] font-bold">Third-Party Links</h2>
        <p className="font-oswald">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of those websites. We
          encourage you to review the privacy policies of any third-party sites
          you visit.
        </p>

        <h2 className="mt-[20px] text-[20px] font-bold">
          Changes to This Privacy Policy
        </h2>
        <p className="font-oswald">
          We reserve the right to update or modify this Privacy Policy at any
          time. Any changes will be effective immediately upon posting the
          revised Privacy Policy on our website.
        </p>

        <h2 className="mt-[20px] text-[20px] font-bold">Contact Us</h2>
        <p className="font-oswald">
          If you have any questions about our Privacy Policy, please contact us:
        </p>
        <ul className="font-oswald">
          <li>Email: themerakicorner25@gmail.com</li>
          <li>Phone: +91 9926894680</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default privacy_policy;
