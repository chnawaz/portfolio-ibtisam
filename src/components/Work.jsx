import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../assets/diabticsimages/img1.png";
import img2 from "../assets/diabticsimages/img2.png";
import img3 from "../assets/diabticsimages/img3.png";
import img4 from "../assets/diabticsimages/img4.png";
import img5 from "../assets/diabticsimages/img5.png";

import Blur from "./Blur"



function Work() {

  
  return (
    <>
      <div className="max-w-[1336px]  gap-[120px] flex flex-col m-auto xl:px-8 2xl:px-0">
        <div className="w-full  gap-[80px] flex flex-col">
          <Navbar />

          <div className="w-full  gap-[58px] flex">
            <div className=" w-[60%] gap-[10px] flex flex-col ">
              <div className=" ">
                <h1 className="font-[700] text-[48px] leading-[120%] tracking-[0%]  ">
                  M.Ibtisam Ul Haq is a Product Designer at{" "}
                  <span className="font-[800] text-[48px] leading-[120%] tracking-[0%] underline">
                    JustWatch
                  </span>
                  , currently based in Islamabad, Pakistan.
                </h1>
              </div>
              <div className="">
                <p className="font-[500] text-[28px] leading-[120%] tracking-[0%]">
                  Previously@Oncentive
                </p>
              </div>
            </div>

            <div className=" w-[40%] gap-[10px] flex flex-col">
              <div className="">
                <p className="font-[500] text-[24px] leading-[120%] tracking-[0%] text-slate-700 ">
                  Designer on weekdays, but a foodie weekends. Maybe it's the
                  delicious distractions that keep me inspired.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* after nav and other div start */}
        <div className="w-full  gap-[80px] flex flex-col ">
          <div className="  w-full  gap-[80px] flex flex-row">
            <div className="w-[50%] gap-[24px] flex flex-col">
              <div className="object-cover h-[395px] image">
                <a href="/work">
                  {/* <img className=" object-cover h-[395px] w-full hover:scale-105 duration-400"  alt="" />  */}
                  <Blur img={img1}/>
                </a>
              </div>
              <div className=" gap-[12px] flex flex-col">
                <div className="">
                  <p className="font-[500] text-[16px] text-slate-700 leading-[120%] tracking-[0%]">
                    Diabetex - Mobile App
                  </p>
                </div>

                <div className="">
                  <p className="font-[800] text-[32px] leading-[120%] tracking-[0%]">
                    Health And Wellness Mobile App
                  </p>
                </div>
                <div className="">
                  <p className="font-[700] text-[18px] leading-[120%] text-slate-700   tracking-[0%]">
                    Case-study / UX Design / UI Design / End To End / Solo
                    Project{" "}
                  </p>
                </div>
              </div>
            </div>

            {/* new block sart */}
            <div className="w-[50%] gap-[24px] flex flex-col">
              <div className="">
                <a href="/work">
                  {/* <img className="object-cover h-[395px] w-full hover:scale-105 duration-400" src={img2} alt="" /> */}
                  <Blur img={img2}/>
                </a>
              </div>
              <div className=" gap-[12px] flex flex-col">
                <div className="">
                  <p className="font-[500] text-[16px] text-slate-700 leading-[120%] tracking-[0%]">
                    Hr Logics - Web App
                  </p>
                </div>

                <div className="">
                  <p className="font-[800] text-[32px] leading-[120%] tracking-[0%]">
                    Human Resource Management System
                  </p>
                </div>
                <div className="">
                  <p className="font-[700] text-[18px] leading-[120%] text-slate-700   tracking-[0%]">
                    UX Design / UI Design / End To End / Team Project
                  </p>
                </div>
              </div>
            </div>
            {/* new block end */}
          </div>
        </div>
        {/* after nav and other div end */}

        {/* after nav and other div start */}
        <div className="w-full gap-[80px] flex flex-col ">
          <div className="w-full gap-[80px] flex flex-row">
            <div className="w-[50%] gap-[24px] flex flex-col ">
              <div className="">
                <a href="/work">
                  {/* <img className="object-cover h-[395px] w-full hover:scale-105 duration-400" src={img3} alt="" /> */}
                  <Blur img={img3}/>
                </a>
              </div>
              <div className=" gap-[12px] flex flex-col">
                <div className="">
                  <p className="font-[500] text-[16px] text-slate-700 leading-[120%] tracking-[0%]">
                    Accualigners - Web App
                  </p>
                </div>

                <div className="">
                  <p className="font-[800] text-[32px] leading-[120%] tracking-[0%]">
                    Patients And Inventory Management
                  </p>
                </div>
                <div className="">
                  <p className="font-[700] text-[18px] leading-[120%] text-slate-700   tracking-[0%]">
                    Case-Study / UX Design / UI Design / End To End / Solo
                    Project
                  </p>
                </div>
              </div>
            </div>

            {/* new block sart */}
            <div className=" w-[50%] gap-[24px] flex flex-col">
              <div className="">
                <a href="/work">
                  {/* <img className="object-cover h-[395px] w-full hover:scale-105 duration-400" src={img4} alt="" /> */}
                  <Blur img={img4}/>
                </a>
              </div>
              <div className=" gap-[12px] flex flex-col">
                <div className="">
                  <p className="font-[500] text-[16px] text-slate-700 leading-[120%] tracking-[0%]">
                    Enter Here - Mobile and Web App
                  </p>
                </div>

                <div className="">
                  <p className="font-[800] text-[32px] leading-[120%] tracking-[0%]">
                    Social Media For Mental Health Patients
                  </p>
                </div>
                <div className="">
                  <p className="font-[700] text-[18px] leading-[120%] text-slate-700   tracking-[0%]">
                    Case-Study / UX Design / UI Design / End To End / Team
                    Project
                  </p>
                </div>
              </div>
            </div>
            {/* new block end */}
          </div>
        </div>
        {/* after nav and other div end */}

        {/* after nav and other div start */}
        <div className=" w-full gap-[80px] flex flex-col">
          <div className="w-full gap-[80px] flex flex-row">
            <div className="w-[50%]  gap-[24px] flex flex-col">
              <div className="">
                <a href="/work">
                  {/* <img className="object-cover h-[395px] w-full hover:scale-105 duration-400" src={img5} alt="" /> */}
                  <Blur img={img5}/>
                </a>
              </div>
              <div className=" gap-[12px] flex flex-col">
                <div className="">
                  <p className="font-[500] text-[16px] text-slate-700 leading-[120%] tracking-[0%]">
                    JustWatch - Web App
                  </p>
                </div>

                <div className="">
                  <p className="font-[800] text-[32px] leading-[120%] tracking-[0%]">
                    In-House Marketing Tool
                  </p>
                </div>
                <div className="">
                  <p className="font-[700] text-[18px] leading-[120%] text-slate-700   tracking-[0%]">
                    UX Design / UI Design / End To End / Team Project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* after nav and other div end */}
      </div>

      {/* after main and nav start */}
      <div className=" max-w-[1336px]  gap-[32px] flex flex-col  m-auto mt-[164px] xl:px-8 2xl:px-0">
        <div className="w-full   border-t-[3px]">
          
        </div>
        <div>
            <p className="font-[700] text-[32px]  leading-[120%] tracking-[0%]">
            That’s all I can show for now gotta keep some mystery alive! But
            don’t worry, the vault’s full. Hit me up, and I’ll spill the
            secrets!
          </p>
          </div>

        <div className="w-[183px] h-[61px] py-[16px] px-[48px] gap-[10px] flex bg-black mt-[32px] cursor-pointer ">
          <div className="w-[87px] h-[29px]  group  transition duration-300">
            <a
              className="text-white font-[800] text-[24px]  leading-[120%] tracking-[0%] "
              href=""
            >
              Contact
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </a>
          </div>
        </div>
      </div>
      {/* after main and nav end */}

      <Footer />
    </>
  );
}

export default Work;
