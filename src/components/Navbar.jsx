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
        <div className="h-[29px] w-[155px] gap-[32px] flex">
          <a
            href="/"
            className={`${
              pathname === "/" || pathname === "/work"  ? "underline" : ""
            } w-[58px] h-[29px] font-[700] text-[24px] leading-[120%] tracking-[0%]`}
          >
            Work
          </a>
          <a
            href="/about"
            className={`${pathname === "/about" ? "underline": ""} w-[65px] h-[29px] font-[700] text-[24px] leading-[120%] tracking-[0%]  `}
          >
            About
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
