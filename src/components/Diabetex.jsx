import { HiArrowSmLeft } from "react-icons/hi";
import { LuExternalLink } from "react-icons/lu";
import img1 from "../assets/diabticsimages/1.png";
import img2 from "../assets/diabticsimages/2.png";
import img3 from "../assets/diabticsimages/3.png";
import img31 from "../assets/diabticsimages/31.png";
import img32 from "../assets/diabticsimages/32.png";
import img33 from "../assets/diabticsimages/33.png";
import img34 from "../assets/diabticsimages/34.png";
import img41 from "../assets/diabticsimages/41.png";
import img42 from "../assets/diabticsimages/42.png";
import img43 from "../assets/diabticsimages/43.png";
import img44 from "../assets/diabticsimages/44.png";
import img71 from "../assets/diabticsimages/71.jpg";
import tri from "../assets/diabticsimages/triangle.png";
import img81 from "../assets/diabticsimages/81.png";
import img82 from "../assets/diabticsimages/82.png";
import img83 from "../assets/diabticsimages/83.png";
import img84 from "../assets/diabticsimages/84.png";
import img85 from "../assets/diabticsimages/85.png";
import img91 from "../assets/diabticsimages/91.png";
import img92 from "../assets/diabticsimages/92.png";
import img93 from "../assets/diabticsimages/93.png";
import img94 from "../assets/diabticsimages/94.png";
import img95 from "../assets/diabticsimages/95.png";
import img96 from "../assets/diabticsimages/96.png";
import img97 from "../assets/diabticsimages/97.png";
import img98 from "../assets/diabticsimages/98.png";
import img99 from "../assets/diabticsimages/99.png";
import img00 from "../assets/diabticsimages/00.png";
import img01 from "../assets/diabticsimages/01.png";
import img02 from "../assets/diabticsimages/02.png";
import img841 from "../assets/diabticsimages/841.png";
import img05 from "../assets/diabticsimages/gawa.png";
import img06 from "../assets/diabticsimages/barry.png";
import img07 from "../assets/diabticsimages/piaz.png";
import img08 from "../assets/diabticsimages/wheat.png";
import img09 from "../assets/diabticsimages/khr.png";
import img110 from "../assets/diabticsimages/110.png";
import imgg from "../assets/diabticsimages/g.png";
import Navbar from "./Navbarr";
import Footer from "./Footerr";
// import { useEffect, useRef } from "react";

function Diabetex() {

    
  return (
    <>
      <div className="max-w-[1336px]  flex flex-col gap-[32px] m-auto xl:px-8 2xl:px-0 px-8">
        <Navbar />
        {/* main content div after navbar start */}
        <div className="w-full flex flex-col gap-[80px]">
          {/* 1st div inside main div start */}
          <div className="w-full flex flex-col gap-[24px]">
            <a href="/">
              <div className="w-full flex gap-[8px] items-center">
                <HiArrowSmLeft className="w-[32px] h-[32px]" />
                <p className="font-bold md:text-[24px] text-[18px] leading-[120%] tracking-[0px]">
                  Back To Home
                </p>
              </div>
            </a>
            <div className=" w-full md:flex md:flex-row flex-col gap-[24px] p-[48px] bg-[#99DAC6] items-center ">
              <div className="flex flex-col gap-[12px] md:w-[45%] w-full">
                <div className="w-full">
                  <p className="font-extrabold md:text-[48px] text-[42px] leading-[120%] tracking-[0px]">
                    Diabetex - Pocket Clinic
                  </p>
                </div>
                <div className="w-full">
                  <p className="font-medium  md:text-[24px] text-[18px] leading-[130%] tracking-[0px] text-slate-600">
                    Health and wellness app that will help patients with
                    Diabetes to monitor, cope and eventually treat the illness.
                  </p>
                </div>
              </div>
              <div className="flex gap-[17px] md:w-[55%] w-full">
                <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F]">
                  <img className=" rounded-[8.35px]" src={img1} alt="" />
                </div>
                <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F]">
                  <img className="rounded-[8.35px]" src={img2} alt="" />
                </div>
                <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F]">
                  <img className="rounded-[8.35px]" src={img3} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* 1st div inside main div end */}

          {/* 2nd div inside main div big div start */}
          <div className="w-full md:felx md:flex-col md:px-[120px] gap-[120px] items-center justify-center ">
            {/* 1st div iside big div start */}
            <div className="w-full flex flex-col gap-[32px]">
              <div className="w-full flex gap-[24px]">
                <div className="w-[50%] flex flex-col gap-[24px]">
                  <div className="w-full">
                    <p className="font-bold md:text-[24px] text-[18px] leading-[120%] tracking-[0px]">
                      12 Weeks
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="font-bold md:text-[24px] text-[18px] leading-[120%] tracking-[0px]">
                      End To End UI UX Design Process
                    </p>
                  </div>
                </div>
                <div className="w-[50%] flex flex-col gap-[24px]">
                  <div className="w-full">
                    <p className="font-bold md:text-[24px] text-[18px] leading-[120%] tracking-[0px]">
                      Solo Project
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="font-bold md:text-[24px] text-[18px] leading-[120%] tracking-[0px]">
                      Mobile Application
                    </p>
                  </div>
                </div>
              </div>
              <div className=" bg-black py-[16px] px-[38px]  gap-[10px] flex w-[44%] cursor-pointer group  transition duration-300">
                <div className="mt-0.5">
                  <a
                    href=""
                    className="font-extrabold md:text-[24px] text-[18px] leading-[120%] tracking-[0px]  decoration-solid decoration-[0px]  text-white "
                  >
                    Experience Project Prototype
                     <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                  </a>
                </div>
                <div className="text-white  ">
                  <LuExternalLink className="h-[32px] w-[32px]" />
                </div>
                <div></div>
              </div>
            </div>
            {/* 1st div iside big div end */}

            {/* 2st div iside big div start */}
            <div className="w-full flex flex-col gap-[16px] mt-[120px]">
              <div className="w-full">
                <p className="font-bold md:text-[20px] text-[14px] leading-[120%] tracking-[0px] uppercase text-slate-600">
                  Problem
                </p>
              </div>
              <div className="w-full">
                <p className="font-bold md:text-[40px] text-[32px] leading-[120%] tracking-[0px]">
                  Type 2 diabetes is reversible, but the patient fails to heal
                </p>
              </div>
              <div className="w-full">
                <p className="font-medium md:text-[24px] text-[18px] leading-[130%] tracking-[0px] text-slate-600">
                  Diabetes can be reversed, but only through proper diet control
                  and lifestyle changes. A group of doctors approached me to
                  develop a solution to help their Type 2 diabetes patients heal
                  quickly and regain a normal, insulin-free life
                </p>
              </div>
            </div>
            {/* 2st div iside big div end */}

            {/* 3nd div inside main div big div it aslo big div start */}
            <div className="w-full flex flex-col gap-[88px] mt-[120px] items-center justify-center ">
              {/* 1st in 3rd big start */}
              <div className="w-full flex flex-col gap-[16px]">
                <div className="w-full">
                  <p className="font-bold md:text-[20px] text-[14px] leading-[120%] tracking-[0px] uppercase text-slate-600">
                    Solution
                  </p>
                </div>
                <div className="w-full">
                  <p className="font-bold md:text-[40px] text-[32px] leading-[120%] tracking-[0px] ">
                    A pocket clinic with 24/7 access to doctors is a key
                  </p>
                </div>
              </div>
              {/* 1st in 3rd big end */}
              {/* 2nd in 3rd big start */}
              <div  className="w-full md:flex  md:flex-row flex flex-col gap-[64px] items-center md:justify-between relative ">
                <img
                  src={imgg}
                  alt=""
                  className="md:max-w-[30%] absolute md:top-[84px] md:left-[-53px] top-[80px] left-[-45px] hidden md:block"
                />
                <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F] max-w-[217px] z-10">
                  <img className=" rounded-[8.35px]" src={img31} alt="" />
                </div>

                <div className="flex flex-col gap-[10px] md:max-w-[554.3px] w-full">
                  <div className="">
                    <p className="font-extrabold md:text-[32px] text-[26px] leading-[120%] tracking-[0px]">
                      Have Accountability Partner
                    </p>
                  </div>
                  <div className="w-full bullet-text">
                    {/* <p className="font-medium text-[24px] leading-[150%] tracking-[0px] text-slate-600 "> */}
                      <ul className="list-disc pl-8 font-medium md:text-[24px] text-[18px] leading-[150%] tracking-[0px] text-slate-600">
                        <li>
                          Stay connected with your doctor 24/7 for guidance and
                          support during any complications
                        </li>
                        <li>Provides a source of extrinsic motivation</li>
                        <li>Patient centered approach</li>
                      </ul>
                    {/* </p> */}
                  </div>
                  <div className="w-full">
                    <p className="font-medium md:text-[16px] text-[10px] leading-[150%] tracking-[0px] text-slate-600">
                      *Patient-centered approach that empowers individuals with
                      Type 2 Diabetes, offering a positive alternative to the
                      traditionally paternalistic standard care.{" "}
                      <span className="font-medium md:text-[16px] text-[10px] leading-[150%] tracking-[0px] underline decoration-solid decoration-[0px] underline-offset-[0px]">
                        (Research Source)
                      </span>
                    </p>
                  </div>
                </div>

                <div className="md:max-w-[196px] w-full ">
                  <p className="font-bold md:text-[200px] text-[150px] leading-[130%] tracking-[0px] text-[#0000000D]">
                    01
                  </p>
                </div>
              </div>
              {/* 2nd in 3rd big end */}
              {/* 3rd in 3rd big start */}
              <div className="w-full md:flex  md:flex-row flex flex-col gap-[64px] items-center md:justify-between justify-center relative">
                <img
                  src={imgg}
                  alt=""
                  className=" md:w-[30%] absolute top-[84px] left-[-53px] hidden md:block"
                />
                <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F] max-w-[217px] z-10">
                  <img className=" rounded-[8.35px]" src={img32} alt="" />
                </div>

                <div className="flex flex-col gap-[10px] md:w-[45%] w-full ">
                  <div className="w-full">
                    <p className="font-extrabold md:text-[32px] text-[26px] leading-[120%] tracking-[0px]">
                      Daily Checkup
                    </p>
                  </div>
                  <div className="w-full">
                    {/* <p className="font-medium text-[24px] leading-[150%] tracking-[0px] text-slate-600"> */}
                      <ul className="list-disc pl-8 font-medium md:text-[24px] text-[18px] leading-[150%] tracking-[0px] text-slate-600">
                        <li>
                          Send your biomarker report before and after the meal
                        </li>
                        <li>
                          Customize diet and medication after the every week
                          progress
                        </li>
                      </ul>
                    {/* </p> */}
                  </div>
                </div>

                <div className="md:w-[25%] w-full">
                  <p className="font-bold md:text-[200px] text-[150px] leading-[130%] tracking-[0px] text-[#0000000D]">
                    02
                  </p>
                </div>
              </div>
              {/* 3rd in 3rd big end */}
              {/* 4th in 3rd big start */}
              <div className="w-full md:flex md:flex-row flex flex-col  gap-[64px] items-center justify-between relative">
                <img
                  src={imgg}
                  alt=""
                  className="w-[30%] absolute top-[84px] left-[-53px] hidden md:block"
                />
                <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F] max-w-[217px] z-10">
                  <img className=" rounded-[8.35px]" src={img33} alt="" />
                </div>

                <div className="flex flex-col gap-[10px] md:w-[45%] w-full">
                  <div className="w-full">
                    <p className="font-extrabold md:text-[32px] text-[26px] leading-[120%] tracking-[0px]">
                      Send Evidence
                    </p>
                  </div>
                  <div className="w-full">
                    {/* <p className="font-medium text-[24px] leading-[150%] tracking-[0px] text-slate-600"> */}
                      <ul className="list-disc pl-8 font-medium  md:text-[24px] text-[18px] leading-[150%] tracking-[0px] text-slate-600">
                        <li>Send Proof of completing your tasks</li>
                        <li>
                          Make sure to log your blood pressure, sugar level and
                          other biomarker on assigned time
                        </li>
                      </ul>
                    {/* </p> */}
                  </div>
                </div>

                <div className="md:w-[25%] w-full">
                  <p className="font-bold md:text-[200px] text-[150px] leading-[130%] tracking-[0px] text-[#0000000D]">
                    03
                  </p>
                </div>
              </div>
              {/* 4th in 3rd big end */}
              {/* 5th in 3rd big start */}
              <div className="w-full md:flex  md:flex-row flex flex-col gap-[64px] items-center justify-between relative">
                <img
                  src={imgg}
                  alt=""
                  className="w-[30%] absolute top-[84px] left-[-53px] hidden md:block"
                />
                <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F] max-w-[217px] z-10">
                  <img className=" rounded-[8.35px]" src={img34} alt="" />
                </div>

                <div className="flex flex-col gap-[10px] md:w-[45%] w-full">
                  <div className="w-full">
                    <p className="font-extrabold md:text-[32px] text-[26px] leading-[120%] tracking-[0px]">
                      Continuous Assistance
                    </p>
                  </div>
                  <div className="w-full">
                    {/* <p className="font-medium text-[24px] leading-[150%] tracking-[0px] text-slate-600"> */}
                      <ul className="list-disc pl-10 font-medium md:text-[24px] text-[18px] leading-[150%] tracking-[0px] text-slate-600">
                        <li>
                          Let the expert assist you with any complications
                        </li>
                        <li>
                          Stay in touch with your doctor and ask questions
                          without waiting for a clinic visit
                        </li>
                      </ul>
                    {/* </p> */}
                  </div>
                </div>

                <div className="md:w-[25%] w-full">
                  <p className="font-bold md:text-[200px] text-[150px] leading-[130%] tracking-[0px] text-[#0000000D]">
                    04
                  </p>
                </div>
              </div>
              {/* 5th in 3rd big end */}
            </div>
            {/* 3nd div inside main div big div it aslo big div end */}

            {/* 4th div iside big div start */}
            <div className="w-full flex flex-col gap-[16px] mt-[120px]">
              <div className="w-full">
                <p className="font-bold md:text-[20px] text-[14px] leading-[120%] tracking-[0px] uppercase text-slate-600">
                  White Paper Research
                </p>
              </div>
              <div className="w-full">
                <p className="font-bold md:text-[40px] text-[34px] leading-[120%] tracking-[0px]">
                  Patient-centered approach that empowers individuals with Type
                  2 Diabetes
                </p>
              </div>
              <div className="w-full">
                <p className="font-medium md:text-[24px] text-[18px] leading-[150%] tracking-[0px] text-slate-600">
                  Working with an expert group of doctors made it much easier to
                  find good scholarly research papers. A doctor recommended I
                  check out the "National Library of Medicine," and that’s where
                  I discovered that:
                </p>
              </div>
              <div className="w-full">
                <p className="font-bold md:text-[24px] text-[18px] leading-[150%] tracking-[0px]">
                  “Some patients with Type 2 Diabetes are receptive to
                  motivational interviewing which is a provider approach that is
                  more patient-centered and empowering than traditional care”
                </p>
              </div>
              <div className="w-full">
                <p className="font-medium md:text-[24px] text-[18px] leading-[150%] tracking-[0px]  decoration-solid decoration-[0px] underline-offset-[0px] text-blue-600  ">
                  Research Source
                </p>
              </div>
            </div>
            {/* 4th div iside big div end */}
            {/* 5th div iside big div start */}
            <div className="w-full flex flex-col gap-[16px] mt-[120px]">
              <div className="w-full">
                <p className="font-bold md:text-[20px] text-[14px] leading-[120%] tracking-[0px] uppercase text-slate-600">
                  Competitive Analysis And GAps
                </p>
              </div>
              <div className="w-full">
                <p className="font-bold md:text-[40px] text-[34px] leading-[120%] tracking-[0px]">
                  The Competitors had{" "}
                  <span className="font-extrabold md:text-[40px] text-[34px] leading-[120%] tracking-[0px] uppercase">
                    No 24hr doctor
                  </span>{" "}
                  support
                </p>
              </div>
              <div className="w-full">
                <p className="font-medium md:text-[24px] text-[18px] leading-[150%] tracking-[0px] text-slate-600">
                  There are many health and wellness apps in the market, but
                  none of them provide 24-hour real doctor support with a
                  patient centered approach.
                </p>
              </div>

              <div className="w-full flex gap-[16px]">
                <img
                  src={img41}
                  alt=""
                  class="w-[120px] h-[120px] object-contain shadow-[0px_4.71px_23.53px_0px_#D1D1D199] bg-white"
                />
                <img
                  src={img42}
                  alt=""
                  class="w-[120px] h-[120px] object-contain shadow-[0px_4.71px_23.53px_0px_#D1D1D199] bg-white"
                />
                <img
                  src={img43}
                  alt=""
                  class="w-[120px] h-[120px] object-contain shadow-[0px_4.71px_23.53px_0px_#D1D1D199] bg-white"
                />
                <img
                  src={img44}
                  alt=""
                  class="w-[120px] h-[120px] object-contain shadow-[0px_4.71px_23.53px_0px_#D1D1D199] bg-white"
                />
              </div>
            </div>
            {/* 5th div iside big div end */}
            {/* 6th div iside big div start */}
            <div className="w-full flex flex-col gap-[32px] mt-[120px]">
              <div className="w-full">
                <p className="font-bold text-[20px] leading-[120%] tracking-[0px] uppercase text-slate-600">
                  Interview Findings
                </p>
              </div>
              <div className="w-full">
                <p className="font-bold text-[40px] leading-[120%] tracking-[0px]">
                  Type 2 diabetes patients are three times more likely to
                  succeed in reversing their condition when their goals are
                  supported with accountability and a tailored, patient-focused
                  treatment plan.
                </p>
              </div>
              <div className="w-full">
                <p className="font-medium text-[24px] leading-[150%] tracking-[0px] text-slate-600">
                  I conducted interviews with a group of six diabetes patients,
                  including my father, to gain valuable insights into their
                  experiences and challenges. From these interviews, I concluded
                  that a combination of 24-hour support and a personalized
                  treatment plan is the most effective approach moving forward.
                </p>
              </div>
              <div className="w-full">
                <p className="font-bold text-[24px] leading-[150%] tracking-[0px]">
                  Interview Questions
                </p>
              </div>
              <div className="w-full">
                <p className="font-medium text-[24px] leading-[150%] tracking-[0px] text-slate-600">
                  <ol className="list-decimal pl-10 ">
                    <li>
                      What challenges do you face daily in managing your
                      diabetes?
                    </li>
                    <li>
                      Have you ever felt that a personalized treatment plan
                      would have helped you more in managing your diabetes?
                    </li>
                    <li>
                      What kind of support or resources do you think would make
                      it easier for you to manage your diabetes better?
                    </li>
                    <li>
                      How important do you think having access to support 24/7
                      is in managing your condition?
                    </li>
                    <li>
                      Would you be willing to join a mobile app designed to help
                      reverse diabetes with a personalized treatment plan?
                    </li>
                    <li>
                      What motivates you to open an app daily and track your
                      biomarkers or other health data?
                    </li>
                    <li>
                      Would you like to gain more knowledge about your condition
                      and educate yourself further on managing diabetes?
                    </li>
                  </ol>
                </p>
              </div>
            </div>
            {/* 6th div iside big div end */}
            {/* 7th div iside big div start */}
            <div className="w-full flex flex-col gap-[32px] mt-[120px]">
              <div className="w-full flex flex-col gap-[16px] ">
                <div className="w-full">
                  <p className="font-bold text-[20px] leading-[120%] tracking-[0px] uppercase text-slate-600">
                    User Persona
                  </p>
                </div>
                <div className="w-full">
                  <p className="font-bold text-[40px] leading-[120%] tracking-[0px]">
                    I want to improve my heath and lifestyle
                  </p>
                </div>
              </div>
              <div className="w-full flex gap-[32px] ">
                <div className="rotate-[-180] w-[208.17px] h-[229.66px] rounded-[24px]">
                  <img
                    src={img71}
                    alt=""
                    className="scale-x-[-1]  w-[208.17px] h-[229.657958984375px] rounded-[24px] object-cover"
                  />
                </div>
                <div className="felx flex-col gap-[16px] my-[15.83px]">
                  <div className="w-full">
                    <p className="font-bold text-[32px] leading-[120%] tracking-[0px]">
                      Ibrahim Najjar
                    </p>
                  </div>
                  <div className="w-full bullet-text">
                    <p className="font-medium text-[24px] leading-[150%] tracking-[0px] text-slate-600 ">
                      <ul className="list-disc pl-10">
                        <li> Male</li>
                        <li> 48 years old</li>
                        <li> Working Professional</li>
                        <li> Married</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-[12px]">
                <div className="w-full">
                  <p className="font-bold text-[24px] leading-[150%] tracking-[0px]">
                    Story
                  </p>
                </div>
                <div className="w-full">
                  <p className="font-medium text-[24px] leading-[150%] tracking-[0px] text-slate-600">
                    Ibrahim Najjar is a 48-year-old professional who’s been
                    managing Type 2 diabetes for several years. With a busy life
                    balancing work and family, he often struggles to keep his
                    health in check. Ibrahim wants to find a more effective way
                    to stay on top of his diabetes and make managing it a more
                    seamless part of his daily routine.
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-[32px]">
                <div className="w-full flex gap-[32px]">
                  <div className="flex flex-col w-full bg-emerald-200 pt-4 pr-6 pb-4 pl-6 gap-[12px] relative">
                    <div className="w-full">
                      <p className="font-cabinet font-bold text-[20px] leading-[1.2] tracking-[0em]">
                        Goals
                      </p>
                    </div>
                    <div className="w-full">
                      <p className="font-medium text-[16px] leading-[1.5] tracking-[0em] text-slate-600">
                        <ul className="list-disc pl-8 ">
                          <li>Reverse diabetes, stay healthy</li>
                          <li>
                            Maintain motivation and balanced lifestyle with
                            manageable routine
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div className="w-[20.00000381469734px] h-[20.00098037719734px]   absolute bottom-0 left-0">
                      <img
                        src={tri}
                        alt=""
                        className="scale-x-[-1] rotate-90"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full bg-emerald-200 pt-4 pr-6 pb-4 pl-6 gap-[12px] relative">
                    <div className="w-full">
                      <p className="font-cabinet font-bold text-[20px] leading-[1.2] tracking-[0em]">
                        Pain Points
                      </p>
                    </div>
                    <div className="w-full">
                      <p className="font-medium text-[16px] leading-[1.5] tracking-[0em] text-slate-600">
                        <ul className="list-disc pl-8 ">
                          <li>Balancing health with life</li>
                          <li>Lack of personalized guidance</li>
                          <li>Delayed medical advice</li>
                        </ul>
                      </p>
                    </div>
                    <div className="w-[20.00000381469734px] h-[20.00098037719734px]   absolute bottom-0 left-0">
                      <img
                        src={tri}
                        alt=""
                        className="scale-x-[-1] rotate-90"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full bg-emerald-200 pt-4 pr-6 pb-4 pl-6 gap-[12px] relative">
                    <div className="w-full">
                      <p className="font-cabinet font-bold text-[20px] leading-[1.2] tracking-[0em]">
                        Motivation
                      </p>
                    </div>
                    <div className="w-full">
                      <p className="font-medium text-[16px] leading-[1.5] tracking-[0em] text-slate-600">
                        <ul className="list-disc pl-8 ">
                          <li>Take control of health</li>
                          <li>Support through tailored plan</li>
                          <li>Stay informed</li>
                        </ul>
                      </p>
                    </div>
                    <div className="w-[20.00000381469734px] h-[20.00098037719734px]   absolute bottom-0 left-0">
                      <img
                        src={tri}
                        alt=""
                        className="scale-x-[-1] rotate-90"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 7th div iside big div end */}
            {/* 8th div iside big div start */}
            <div className="w-full flex flex-col gap-[32px] mt-[120px]">
              {/* inside  8 last big div start */}
              <div className="w-full flex flex-col gap-[120px]">
                {/* 1st div in 8th start  */}
                <div className="w-full flex flex-col gap-[32px]">
                  <div className="w-full flex flex-col gap-[16px]">
                    <div className="w-full">
                      <p className="font-bold text-[20px] leading-[1.2] tracking-[0em] uppercase text-slate-600">
                        WireFrames
                      </p>
                    </div>
                    <div className="w-full">
                      <p className="font-bold text-[40px] leading-[1.2] tracking-[0em]">
                        Keep iterating until the solution is user-centered
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex flex-wrap gap-[32px]">
                    <img className="w-[522px]" src={img81} alt="" />
                    <img
                      className="w-[352.22857666015625px]"
                      src={img82}
                      alt=""
                    />
                    <img className="w-[355.0625px]" src={img83} alt="" />
                    <img
                      className="w-[458.7859191894531px]"
                      src={img84}
                      alt=""
                    />
                  </div>
                </div>
                {/* 1st div in 8th end */}
                {/* 2nd div in 8th start  */}
                <div className="w-full flex flex-col gap-[32px]">
                  <div className="w-full">
                    <p className="font-bold text-[40px] leading-[1.2] tracking-[0em]">
                      Finalized version after a thorough discussion session and
                      multiple iterations
                    </p>
                  </div>
                  <img className="w-[909px]" src={img85} alt="" />
                </div>
                {/* 2nd div in 8th end */}
                {/* 3rd div in 8th start  */}
                <div className="w-full flex flex-col gap-[32px]">
                  <div className="w-full flex flex-col gap-[16px]">
                    <div className="w-full">
                      <p className="font-bold text-[20px] leading-[1.2] tracking-[0em] uppercase text-slate-600">
                        USer Interface
                      </p>
                    </div>
                    <div className="w-full">
                      <p className="font-bold text-[40px] leading-[1.2] tracking-[0em]">
                        The finalized Hi-fidelity designs
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex flex-wrap gap-[32px]  items-center justify-center">
                    <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F]">
                      <img
                        className=" rounded-[8.35px] w-[227.85340881347656px]"
                        src={img91}
                        alt=""
                      />
                    </div>
                    <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F]">
                      <img
                        className=" rounded-[8.35px] w-[227.85340881347656px]"
                        src={img92}
                        alt=""
                      />
                    </div>
                    <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F]">
                      <img
                        className=" rounded-[8.35px] w-[227.85340881347656px]"
                        src={img93}
                        alt=""
                      />
                    </div>
                    <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F]">
                      <img
                        className=" rounded-[8.35px] w-[227.85340881347656px]"
                        src={img94}
                        alt=""
                      />
                    </div>
                    <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F]">
                      <img
                        className=" rounded-[8.35px] w-[227.85340881347656px]"
                        src={img95}
                        alt=""
                      />
                    </div>
                    <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F]">
                      <img
                        className=" rounded-[8.35px] w-[227.85340881347656px]"
                        src={img96}
                        alt=""
                      />
                    </div>
                    <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F]">
                      <img
                        className=" rounded-[8.35px] w-[227.85340881347656px]"
                        src={img97}
                        alt=""
                      />
                    </div>
                    <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F]">
                      <img
                        className=" rounded-[8.35px] w-[227.85340881347656px]"
                        src={img98}
                        alt=""
                      />
                    </div>
                    <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F]">
                      <img
                        className=" rounded-[8.35px] w-[227.85340881347656px]"
                        src={img99}
                        alt=""
                      />
                    </div>
                    <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F]">
                      <img
                        className=" rounded-[8.35px] w-[227.85340881347656px]"
                        src={img00}
                        alt=""
                      />
                    </div>
                    <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F]">
                      <img
                        className=" rounded-[8.35px] w-[227.85340881347656px]"
                        src={img01}
                        alt=""
                      />
                    </div>
                    <div className="bg-[#ffffff75] p-[7px] rounded-[8.35px] shadow-[0px_2.46px_24.63px_0px_#0000000F]">
                      <img
                        className=" rounded-[8.35px] w-[227.85340881347656px]"
                        src={img02}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* 3rd div in 8th end */}
                {/* 4th div in 8th start  */}
                <div className="w-full flex flex-col gap-[120px]">
                  {/* 8.4.1 start */}
                  <div className="w-full flex  gap-[32px]">
                    <div className="w-full flex flex-col gap-[48px]">
                      <div className="w-full flex flex-col gap-[16px]">
                        <div className="w-full">
                          <p className="font-bold text-[20px] leading-[1.2] tracking-[0em] uppercase text-slate-600">
                            USer Flow
                          </p>
                        </div>
                        <div className="w-full">
                          <p className="font-bold text-[40px] leading-[1.2] tracking-[0em]">
                            The architect behind a seamless and cohesive app
                            journey.
                          </p>
                        </div>
                      </div>
                      <img src={img841} alt="" />
                    </div>
                  </div>
                  {/* 8.4.1 end */}
                  {/* 8.4.2 start */}
                  <div className="w-full flex flex-col gap-[32px]">
                    <div className="w-full flex flex-col gap-[16px]">
                      <div className="w-full">
                        <p className="font-bold text-[20px] leading-[1.2] tracking-[0em] uppercase text-slate-600">
                          The Style Guide
                        </p>
                      </div>
                      <div className="w-full">
                        <p className="font-bold text-[40px] leading-[1.2] tracking-[0em]">
                          Created a mood-refreshing style guide for impactful
                          designs.
                        </p>
                      </div>
                      <div className="w-full">
                        <p className="font-medium text-[24px] leading-[1.5] tracking-[0em] text-slate-600">
                          Create a blend of modern and minimal vibes to make the
                          app look and feel good.
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex gap-[48px]">
                      <div className="flex flex-col gap-[9.33px]">
                        <div
                          className="w-[333.33334px] h-[113.54011px] gap-[7.78px] p-[18.66px] flex flex-col "
                          style={{
                            background:
                              "linear-gradient(0deg, #34D399, #22D3EE), linear-gradient(234.96deg, #34D399 18.63%, #22D3EE 79.44%)",
                          }}
                        ></div>
                        <div className="flex justify-between ">
                          <div className="font-satoshi font-bold text-[20px] leading-[1.0] tracking-[0em] text-center flex items-center justify-center">
                            <p>Gradient</p>
                          </div>
                          <div className="font-medium text-[16px] leading-[1.0] tracking-[0em] text-center flex items-center justify-center">
                            <p>#34D399 - #22D3EE</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[9.33px]">
                        <div className="w-[333.33334px] h-[113.54011px] gap-[7.78px] p-[18.66px] flex flex-col bg-slate-600"></div>
                        <div className="flex justify-between ">
                          <div className="font-satoshi font-bold text-[20px] leading-[1.0] tracking-[0em] text-center flex items-center justify-center">
                            <p>Slate</p>
                          </div>
                          <div className="font-medium text-[16px] leading-[1.0] tracking-[0em] text-center flex items-center justify-center">
                            <p>#475569</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[9.33px]">
                        <div className="w-[333.33334px] h-[113.54011px] gap-[7.78px] p-[18.66px] flex flex-col bg-black"></div>
                        <div className="flex justify-between ">
                          <div className="font-satoshi font-bold text-[20px] leading-[1.0] tracking-[0em] text-center flex items-center justify-center">
                            <p>Black</p>
                          </div>
                          <div className="font-medium text-[16px] leading-[1.0] tracking-[0em] text-center flex items-center justify-center">
                            <p>#000000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 8.4.2 end */}
                  {/* 8.4.3 start */}
                  <div className="w-full flex flex-col gap-[32px]">
                    <div className="w-full">
                      <p className="font-bold text-[40px] leading-[1.2] tracking-[0em]">
                        Sporting Colors
                      </p>
                    </div>
                    <div className="w-full flex gap-[80px]">
                      <div className="flex gap-[48px] w-[312px]">
                        <div className="w-full flex gap-[10px] relative">
                          <div className=" w-full flex flex-col gap-[5.38px] p-[12.9px] bg-[#A5BE82] pt-[174.9px]">
                            <div className="flex flex-col gap-[17.2px]">
                              <p className="font-bold text-[20px] leading-[1.0] tracking-[0em] text-center flex items-center justify-center">
                                Feijoa
                              </p>
                              <p className="font-medium text-[16px] leading-[1.0] tracking-[0em] text-center flex items-center justify-center">
                                #A5BE82
                              </p>
                            </div>
                          </div>

                          <img
                            src={img05}
                            alt=""
                            className="absolute w-[203.3359375px] left-[175.61px] bottom-[37.66px] "
                          />
                        </div>
                      </div>
                      <div className="flex gap-[48px] w-[312px]">
                        <div className="w-full flex gap-[10px] relative">
                          <div className=" w-full flex flex-col gap-[5.38px] p-[12.9px] bg-[#EBC8B2] pt-[174.9px]">
                            <div className="flex flex-col gap-[17.2px]">
                              <p className="font-bold text-[20px] leading-[1.0] tracking-[0em] text-center flex items-center justify-center">
                                Wheat
                              </p>
                              <p className="font-medium text-[16px] leading-[1.0] tracking-[0em] text-center flex items-center justify-center">
                                #EBC8B2
                              </p>
                            </div>
                          </div>

                          <img
                            src={img08}
                            alt=""
                            className="absolute w-[165.8px] left-[168.4px] bottom-[0px] "
                          />
                        </div>
                      </div>
                      <div className="flex gap-[48px] w-[312px]">
                        <div className="w-full flex gap-[10px] relative">
                          <div className=" w-full flex flex-col gap-[5.38px] p-[12.9px] bg-[#FAE395] pt-[174.9px]">
                            <div className="flex flex-col gap-[17.2px]">
                              <p className="font-bold text-[20px] leading-[1.0] tracking-[0em] text-center flex items-center justify-center">
                                Amber
                              </p>
                              <p className="font-medium text-[16px] leading-[1.0] tracking-[0em] text-center flex items-center justify-center">
                                #FAE395
                              </p>
                            </div>
                          </div>

                          <img
                            src={img09}
                            alt=""
                            className="absolute w-[209.8px] left-[175.61px] bottom-[59.66px] "
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex gap-[80px]">
                      <div className="flex gap-[48px] w-[312px]">
                        <div className="w-full flex gap-[10px] relative">
                          <div className=" w-full flex flex-col gap-[5.38px] p-[12.9px] bg-[#D7E5ED] pt-[174.9px]">
                            <div className="flex flex-col gap-[17.2px]">
                              <p className="font-bold text-[20px] leading-[1.0] tracking-[0em] text-center flex items-center justify-center">
                                Azure
                              </p>
                              <p className="font-medium text-[16px] leading-[1.0] tracking-[0em] text-center flex items-center justify-center">
                                #A5BE82
                              </p>
                            </div>
                          </div>

                          <img
                            src={img06}
                            alt=""
                            className="absolute w-[189.85546875px] left-[187.5px] bottom-[18.31px] top-[0.01px]  "
                          />
                        </div>
                      </div>
                      <div className="flex gap-[48px] w-[312px]">
                        <div className="w-full flex gap-[10px] relative">
                          <div className=" w-full flex flex-col gap-[5.38px] p-[12.9px] bg-[#B1A8C5] pt-[174.9px]">
                            <div className="flex flex-col gap-[17.2px]">
                              <p className="font-bold text-[20px] leading-[1.0] tracking-[0em] text-center flex items-center justify-center">
                                Butterfly Bush
                              </p>
                              <p className="font-medium text-[16px] leading-[1.0] tracking-[0em] text-center flex items-center justify-center">
                                #A5BE82
                              </p>
                            </div>
                          </div>

                          <img
                            src={img07}
                            alt=""
                            className="absolute w-[168.06494140625px] left-[202px] bottom-[27px] top-[32.89px] "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 8.4.3 end */}
                  {/* 8.4.4 start */}
                  <div className="w-full flex gap-[32px]">
                    <div className="flex flex-col gap-[48px]">
                      <p className="font-bold text-[40px] leading-[1.2] tracking-[0em]">
                        Typography
                      </p>
                      <div className="flex flex-col gap-[32px]">
                        <div className="flex flex-col gap-[8px]">
                          <p className=" font-bold text-[32px] leading-[1.2] tracking-[0em]">
                            Satoshi
                          </p>
                          <p className="font-medium text-[24px] leading-[1.5] tracking-[0em] text-slate-600">
                            This font is used in heading or sub heading and
                            Buttons
                          </p>
                        </div>
                        <div className="flex flex-col gap-[8px]">
                          <p className=" font-bold text-[32px] leading-[1.2] tracking-[0em]">
                            Cabinet Grotesk Variable
                          </p>
                          <p className="font-medium text-[24px] leading-[1.5] tracking-[0em] text-slate-600">
                            This font is used in Body Text.
                          </p>
                        </div>
                      </div>
                    </div>
                    <img src={img110} alt="" className="w-[501px]" />
                  </div>
                  {/* 8.4.4 end */}
                  {/* 8.4.5 start */}
                  <div className="w-full flex flex-col gap-[32px] ">
                    <div className="flex flex-col gap-[16px]">
                      <p className=" font-bold text-[20px] leading-[1.2] tracking-[0em] uppercase text-slate-600">
                        Main TakeAways & What I would do differently
                      </p>
                      <p className="font-bold text-[40px] leading-[1.2] tracking-[0em]">
                        Give yourself room to make mistakes, keep learning, and
                        iterate until it's there.
                      </p>
                      <p className="font-bold text-[24px] leading-[1.5] tracking-[0em]">
                        Steve Jobs:{" "}
                        <span className="font-medium text-[24px] leading-[1.5] tracking-[0em] text-slate-600">
                          "Stay hungry, stay foolish."
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* 8.4.5 end */}
                </div>
                {/* 4th div in 8th end */}
              </div>
              {/* inside  8 last big div end */}
            </div>
            {/* 8th div iside big div end */}
          </div>
          {/* 2nd div inside main div big div end */}
        </div>
        {/* main content div after navbar end */}
      </div>
      <Footer />
    </>
  );
}

export default Diabetex;
