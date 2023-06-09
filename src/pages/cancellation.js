import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import React from "react";

function cancellation() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b  mb-[-100px] from-[#F4E7D5] to-[#ffffff] h-[200px]"></div>

      <div className="max-w-screen-lg mx-auto p-10 flex flex-col justify-center items-center text-black ">
        <h1 className="text-[30px] font-semibold">
          Cancellation & Refund Policy
        </h1>
        <p className="font-oswald text-center">
          Thank you for using our services. If you are not entirely satisfied
          with your purchase, we're here to help.
        </p>

        <h2 className="mt-[10px] text-[20px]  font-bold">
          Cancellation Policy
        </h2>
        <p className="font-oswald text-center">
          If you want to cancel any order, you can only cancel within two day
          after placing your order. Once you cancelled the order, you have to
          give an appropriate reason to cancel it and then we will be notified
          about the cancellation of your order. After we got the notification
          your money will be refunded to the same account through which payment
          was made within 3 to 5 working days. If you have any queries regarding
          refund or the cancellation process you can send us a mail regardsing
          the same , we will take the appropriate action as soon as possible.
        </p>
        {/* 
        <h2 className="mt-[10px] text-[20px]  font-bold">Refund Policy</h2>
        <p className="font-oswald text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
          fringilla ipsum. Nullam auctor neque ac risus pretium, non volutpat
          urna mattis. Donec eget augue volutpat, rhoncus justo et, commodo
          dolor. Integer ullamcorper efficitur est nec tincidunt. Vestibulum
          semper, nibh ac tincidunt faucibus, velit nulla porttitor nisl, sed
          pharetra diam mauris sed mi.
        </p> */}

        <h2 className="mt-[10px] text-[20px]  font-bold">Contact Us</h2>
        <p className="font-oswald text-center">
          If you have any questions about our Cancellation & Refund Policy,
          please contact us:
        </p>
        <ul className="font-oswald  text-center">
          <li>Email: themerakicorner25@gmail.com</li>
          <li>Phone: +91 9926894680</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default cancellation;
