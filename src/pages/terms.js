import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
function terms() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b   mb-[-110px] from-[#F4E7D5] to-[#ffffff] h-[200px]"></div>
      <div className="max-w-screen-lg mx-auto p-10 flex flex-col justify-center items-center text-black">
        <h1 className="text-[30px] font-semibold">Terms of Service</h1>
        <p className="font-oswald text-center">
          Welcome to Meraki Corner! These terms and conditions outline the rules
          and regulations for the use of our website and services. By accessing
          this website, we assume you accept these terms and conditions. Do not
          continue to use our website if you do not agree with the terms and
          conditions stated on this page.
        </p>

        <h2 className="mt-[20px] text-[20px] font-bold">
          Intellectual Property
        </h2>
        <p className="font-oswald text-center">
          The content, features, and functionality of this website are owned by
          The Meraki Corner and are protected by international copyright,
          trademark, patent, trade secret, and other intellectual property or
          proprietary rights laws.
        </p>

        <h2 className="mt-[20px] text-[20px] font-bold">
          Prohibited Activities
        </h2>
        <p className="font-oswald text-center">
          When using our website, you agree not to engage in any of the
          following prohibited activities:
        </p>
        <ul className="font-oswald text-center">
          <li>Violating any applicable laws or regulations.</li>
          <li>
            Interfering with or disrupting the security or integrity of our
            website.
          </li>
          <li>
            Impersonating any person or entity or falsely stating or otherwise
            misrepresenting your affiliation with a person or entity.
          </li>
          <li>
            Collecting or tracking personal information of others without their
            consent.
          </li>
          <li>
            Engaging in any conduct that restricts or inhibits anyone's use or
            enjoyment of the website.
          </li>
        </ul>

        <h2 className="mt-[20px] text-[20px] font-bold">
          Limitation of Liability
        </h2>
        <p className="font-oswald text-center">
          In no event shall The Merkai Corner be liable for any indirect,
          incidental, special, consequential, or punitive damages, including
          without limitation, loss of profits, data, use, goodwill, or other
          intangible losses, resulting from your access to or use of, or
          inability to access or use, the website or any content on the website.
        </p>

        <h2 className="mt-[20px] text-[20px] font-bold">Governing Law</h2>
        <p className="font-oswald text-center">
          These terms and conditions are governed by and construed in accordance
          with the laws of The Merkai Corner, and you irrevocably submit to the
          exclusive jurisdiction of the courts in that state or location.
        </p>

        <h2 className="mt-[20px] text-[20px] font-bold">Contact Us</h2>
        <p className="font-oswald text-center">
          If you have any questions about our Terms of Service, please contact
          us:
        </p>
        <ul>
          <li>Email: themerakicorner25@gmail.com</li>
          <li>Phone: +91 9926894680</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default terms;
