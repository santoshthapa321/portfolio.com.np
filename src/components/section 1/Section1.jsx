import React from "react";
import imagee from "../../assets/featured1.jpg";
import { IoMail } from "react-icons/io5";
import { MdCloudDownload } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
const Section1 = () => {
  return (
    <div className="flex m-12 justify-between ">
      <div className="w-1/2">
        <div className="">
          <h1 className="font-bold text-4xl ">
            I'm <span>Santosh Thapa</span>
          </h1>

          <p className="font-bold text-4xl">
            a <span className="text-purple-800">Full Stack Developer</span>
          </p>
        </div>
        <div className=" flex gap-8 mt-8">
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
            <i></i>I can help you to build attractive and fully functional web
            application for your projects. So let's Talk!
          </p>
        </div>
        <div className="flex mt-12 items-center">
          <p>Follow me : </p>
          <div className="flex gap-8 ml-6">
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
      <div className=" flex w-1/3">
        <img className="rounded-3xl h-40 " src={imagee} alt="featuredImg1" />
      </div>
    </div>
  );
};

export default Section1;
