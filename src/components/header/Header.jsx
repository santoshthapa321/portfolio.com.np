import React, { useState } from "react";
import logo from "../../assets/Untitled-2.png";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "./Section1.css";

import { WiDayCloudy } from "react-icons/wi";
import { MdOutlineNightlight } from "react-icons/md";
//js 
const navLinks = ["Home", "About", "Skill", "Services", "Contact"];
const Header = () => {
  const [closeButtonDekhineCondition, SetButtonDekhineCondition] =
    useState(false);
  const handleclick = () => {
    SetButtonDekhineCondition(!closeButtonDekhineCondition);
  };
  return (
    <>
      <div className="mainHeader">
        <div className=" secHeader  flex justify-between mt-3 ">
          <div className="flex gap-3 ml-12  items-center ">
            <img className="h-10 w-10 rounded-full" src={logo} alt="logo" />
            <a className=" logoName font-semibold">Santosh</a>
          </div>
          <div className="flex items-center mr-12">
            <div className=" list-none items-center gap-8 mr-12 md:flex hidden">
              {navLinks.map((el)=>{
                return <a>{el}</a>
              })}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="responsiveBtn absolute top-0.5 md:hidden right-2" onClick={handleclick}>
            {closeButtonDekhineCondition ? (
              <IoMdCloseCircleOutline />
            ) : (
              <IoMenuSharp />
            )}
            {closeButtonDekhineCondition ?<div className="bg-purple-800 px-6 py-6 flex flex-col absolute rounded-lg text-white right-3 top-5">
              {navLinks.map((el)=>{
                return <div>{el}</div>
              })}
            </div> :null }
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
