import React from "react";
import person from "../assets/diabticsimages/person.png";

function Navbar() {
  const pathname = window.location.pathname;
  console.log(pathname);
  return (
    <>
      <div className="max-w-[1336px]  h-[92px] pt-[24px] pb-[16px] flex justify-between ">
        <div className="w-[280px] h-[52px] gap-[10px] flex ">
          <img
            className="h-[52px] w-[52px] rounded-[50%]"
            src={person}
            alt=""
          />
          <h1 className="my-auto w-[200px] h-[29px]  font-[700] text-[24px] leading-[120%] tracking-[0%]">
            M.Ibtisam Ul Haq
          </h1>
        </div>
        <div className="h-[29px] w-[155px] gap-[32px] flex  ">
          <a
            href="/"
            className={`${
              pathname === "/" || pathname === "/work" ? " " : "group transition duration-300"
            } w-[58px] h-[29px] font-[700] text-[24px] leading-[120%] tracking-[0%]`}
          >
            Work
            <span  className={`${
              pathname === "/" || pathname === "/work" ? "block  max-w-full h-0.5 bg-black" : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"
            }`}></span>
          </a>
          <a
            href="/about"
            className={`${
              pathname === "/about" ? " " : "group transition duration-300 "
            } w-[65px] h-[29px] font-[700] text-[24px] leading-[120%] tracking-[0%] `}
          >
            About
            <span className={`${
              pathname === "/about"  ? "block  max-w-full h-0.5 bg-black" : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"
            }`}></span>
          </a>
          
        </div>
      </div>
    </>
  );
}

export default Navbar;
