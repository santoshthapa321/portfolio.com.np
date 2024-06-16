import React from "react";
import imagee from "../../assets/Untitled-2.png";
import { IoMail } from "react-icons/io5";
import { MdCloudDownload } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import "../header/Section1.css";
const Section1 = () => {
  return (
    <div className="container flex mx-2 mt-12 justify-between ">
      <div className="w-1/2">
        <div className="headingCustom">
          <h1 className=" head1 font-bold text-4xl ">
            I'm <span>Santosh Thapa</span>
          </h1>

          <p className="font-bold text-4xl">
            a <span className="text-purple-800">Full Stack Developer</span>
          </p>
        </div>
        <div className=" primaryBtn flex gap-8 mt-8">
          <a>
            <button
              type="button"
              className="bg-purple-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-400 "
            >
              <i>
                <IoMail />
              </i>
              Hire Me
            </button>
          </a>
          <button
            type="button"
            className=" border-gray-950 border-2 px-4 py-2 rounded flex items-center gap-2 hover:bg-purple-500"
          >
            <i>
              <MdCloudDownload />
            </i>
            Download CV
          </button>
        </div>
        <div className="mt-8">
          <p className="">
            I can help you to build attractive and fully functional web
            application for your projects. So let's Talk!
          </p>
        </div>
        <div className=" followOption flex mt-12 gap-20 items-center">
          <p>Follow me : </p>
          <div className="flex gap-8 ">
            <a href="" className=" border-gray-950 border-2 rounded-full p-2">
              <i>
                <CiLinkedin />
              </i>
            </a>
            <a href="" className=" border-gray-950 border-2 rounded-full p-2">
              <i>
                <CiFacebook />
              </i>
            </a>
            <a href="" className=" border-gray-950 border-2 rounded-full p-2">
              <i>
                <FaGithub />
              </i>
            </a>
            <a href="" className=" border-gray-950 border-2 rounded-full p-2">
              <i>
                <IoLogoInstagram />
              </i>
            </a>
          </div>
        </div>
      </div>
      <div className="forAm flex justify-center items-center  w-1/3">
        <img className=" rounded-full  " src={imagee} alt="featuredImg1" />
      </div>
    </div>
  );
};

export default Section1;
