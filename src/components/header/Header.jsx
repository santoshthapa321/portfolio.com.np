import React, { useState } from "react";
import logo from "../../assets/Untitled-2.png";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Header = () => {
  const[closeButtonDekhineCondition, SetButtonDekhineCondition]= useState(false);
  const handleclick =()=>{
    SetButtonDekhineCondition(true);
  }
  return (
    <div className="flex justify-between mt-3 ">
      <div className="flex gap-3 ml-12  items-center ">
        <img className="h-10 w-10 rounded-full" src={logo} alt="logo" />
        <a className="font-semibold">Santosh</a>
      </div>
      <div className="  flex list-none items-center gap-8 mr-12">
        <a href=""> Home</a>

        <a href="aboutpage">About</a>

        <a href="">Skill</a>    
        <a href="">Services</a>
        <a href="">Contact</a>
      </div>
      <div className="sm:hidden mr-12" onClick={handleclick}>{closeButtonDekhineCondition ?  <IoMdCloseCircleOutline />:<IoMenuSharp /> }
    
      </div>
    </div>
  );
};

export default Header;
