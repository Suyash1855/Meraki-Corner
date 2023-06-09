import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

function customer_support() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b  mb-[-100px] from-[#F4E7D5] to-[#ffffff] h-[200px]"></div>
      <div className="max-w-screen-lg mx-auto p-10 flex flex-col justify-center items-center text-black">
        <h1 className="text-[30px] font-semibold">Customer Support Policy</h1>
        <p className="font-oswald">
          At Meraki Corner, we strive to provide excellent customer support and
          assistance to our valued users. We are here to help you with any
          questions, concerns, or issues you may encounter.
        </p>

        <h2 className="mt-[20px] text-[20px] font-bold">
          Contacting Customer Support
        </h2>
        <p className="font-oswald">
          If you need assistance or have any inquiries, you can reach our
          customer support team through the following channels:
        </p>

        <ul className="font-oswald">
          <li>Email:themerakicorner25@gmail.com</li>
          <li>Phone: +91 9926894680</li>
        </ul>

        <p className="font-oswald">
          Our customer support is available to assist you during our regular
          business hours. Please allow us up to 24-48 hours to respond to your
          inquiries. We appreciate your patience and will make every effort to
          resolve your concerns as quickly as possible.
        </p>

        <h2 className="mt-[20px] text-[20px] font-bold">
          Feedback and Suggestions
        </h2>
        <p className="font-oswald">
          We welcome your feedback and suggestions as they help us improve our
          services. If you have any ideas, comments, or suggestions to share,
          please don't hesitate to reach out to our customer support team.
        </p>

        <h2 className="mt-[20px] text-[20px] font-bold">
          Service Level Agreement (SLA)
        </h2>
        <p className="font-oswald">
          We aim to provide prompt and efficient support to our users. However,
          please note that our response times may vary depending on the
          complexity of the issue and the volume of support requests we receive.
          While we strive to address all inquiries in a timely manner, we do not
          guarantee immediate responses or resolutions for every support ticket.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default customer_support;
