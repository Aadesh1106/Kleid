import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="pt-10 text-2xl text-center border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="flex flex-col justify-center gap-10 my-10 md:flex-row mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt="Contact Photo"
        />
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-xl font-semibold text-gray-600">Our Store</p>
          <p className="text-gray-500">
            221 T Nagar <br />
            Chennai,TN-600 012,India
          </p>
          <p className="text-gray-500">
            Tel: (+91) 9876-543-210 <br />
            Email: admin@Kleid.com
          </p>
          <p className="text-xl font-semibold text-gray-600">
            Careers at Kleid
          </p>
          <p className="text-gray-500">
            Join the Kleid team and help shape the future of fashion!<br></br>
            Explore career opportunities where your creativity sets trends and
            inspires style.
          </p>
          <button className="px-8 py-4 text-sm transition-all duration-500 border border-purple hover:bg-purple hover:text-white">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
