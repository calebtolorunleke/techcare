import React from "react";
import logo from "../assets/techcareLogo.svg";
import { navData } from "../mockDB/db";
import { doctorProfileData } from "../mockDB/db";
import settingsIcon from "../Images/iconImages/settingsIcon.svg";
import moreIcon from "../Images/iconImages/more_vert.svg";

const Header = () => {
  return (
    <header className="max-w-[1250px] mx-12 my-4 mx-auto flex flex-row items-center justify-between bg-white px-3 py-3 rounded-4xl">
      <img src={logo} alt="logo" className="w-[] h-[30px] cursor-pointer " />
      <div className="flex flex-row gap-2 items-center">
        {navData.map((nav, index) => (
          <div
            key={index}
            className=" flex flex-row items-center gap-2 cursor-pointer select-none p-2 px-4 rounded-full transition-all duration-200 ease-in-out hover:bg-[#01F0D0] hover:shadow-md hover:scale-105 active:scale-95"
          >
            <img src={nav.img} alt={nav.tag} className="w-3 h-5" />
            <span className="text-[15px]">{nav.tag}</span>
          </div>
        ))}
      </div>
      {doctorProfileData.map((doctorProfile, index) => (
        <div
          key={index}
          className="flex flex-row items-center gap-1 justify-between"
        >
          <img
            src={doctorProfile.img}
            alt={doctorProfile.specilaist}
            className="w-[30px]"
          />
          <div className="flex flex-col pr-2 border-r border-gray-300">
            <span className="text-[10px]">{doctorProfile.name}</span>
            <span className="text-[10px] text-gray-600">
              General Practitioner
            </span>
          </div>
          <div className="flex flex-row items-center">
            <img
              src={settingsIcon}
              alt="settings Icon"
              className="w-5 h-4 cursor-pointer"
            />
            <img
              src={moreIcon}
              alt="More Icon"
              className="w-5 h-4 cursor-pointer"
            />
          </div>
        </div>
      ))}
    </header>
  );
};

export default Header;
