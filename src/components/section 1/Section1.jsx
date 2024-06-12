import React from "react";
import imagee from "../../assets/featured1.jpg";
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
        <div className="flex-row">
          <button type="button" className="" >Hire Me</button>
          <button ty>Download CV</button>
        </div>
        <div>
          <p>
            <i></i>I can help you to build attractive and fully functional web
            application for your projects. So let's Talk!
          </p>
        </div>
        <div className="flex-row">
          <p>Follow me : </p>
          <div>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
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
