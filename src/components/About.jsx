import React from "react";
import person from "../assets/diabticsimages/person.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <div className="max-w-[1336px]  gap-[120px] flex flex-col m-auto">
        <Navbar />

        {/* main part after navbar start */}
        <div className="w-full  gap-[48px] flex flex-col">
          {/* pic div start */}
          <div className="w-full h-[439.5302734375px] gap-[24px] flex  flex-row">
            <img src={person} className="h-full object-cover w-[30%]" alt="" />
            <div className="w-[70%]  gap-[48px] flex flex-col">
              {/* abitsham div start */}
              <div className=" gap[24px] flex flex-col">
                <div className=" mb-[24px] ">
                  <p className="font-[500] text-[24px] leading-[120%] tracking-[0%]">
                    Hey there, I'm Ibtisam
                  </p>
                </div>

                <p className="font-[800] text-[64px] leading-[120%] tracking-[0%] ">
                  Website designs so user-friendly, even your grandma can use
                  it!
                </p>
              </div>
              {/* abitsham div end */}

              {/* after abitsham div start */}
              <div className="w-[921.2061767578125px] h-[92px] gap-[24px] flex">
                <div className="w-[690px] h-[92px] gap-[32px] flex">
                  <div className="w-[146px] h-[89px] gap-[12px] flex flex-col">
                    <div className="w-[114px] h-[48px]">
                      <p className="font-[800] text-[48px] leading-[120%] tracking-[0%]">
                        8,000
                      </p>
                    </div>
                    <div className="w-[146px] h-[29px]">
                      <p
                        className="font-[500] text-[20px] leading-[120%] tracking-[0%]
                            text-slate-700 "
                      >
                        Hours worked
                      </p>
                    </div>
                  </div>

                  <div className="w-[211px] h-[89px] gap-[12px] flex flex-col">
                    <div className="w-[114px] h-[48px]">
                      <p className="font-[800] text-[48px] leading-[120%] tracking-[0%]">
                        6+
                      </p>
                    </div>
                    <div className="w-[211px] h-[29px]">
                      <p
                        className="font-[500] text-[20px] leading-[120%] tracking-[0%]
                            text-slate-700 "
                      >
                        Years of experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* after abitsham div end */}
            </div>
          </div>
          {/* pic div end */}

          {/* story div after pic and ibtsam div start */}
          <div className="w-[1336px] h-[930px] gap-[240px] flex mt-[48px]">
            <div className="w-[440px] h-[107px] gap-[20px] flex flex-col">
              <div className="w-[123px] h-[58px]">
                <p className="font-[800] text-[48px] leading-[120%] tracking-[0%]">
                  Story
                </p>
              </div>
              <div className="w-full h-[29px]">
                <p className="font-[400] text-[24px] leading-[120%] tracking-[0%] text-slate-700">
                  Giving my curiosity a comfortable space
                </p>
              </div>
            </div>

            <div className="w-[656px] h-[930px] flex flex-col justify-between ">
              <p className="font-[400] text-[24px] leading-[150%] tracking-[0%] text-slate-700 ">
                <span className="font-[800] text-[24px] leading-[130%] tracking-[0%] text-black">
                  Hey there
                </span>
                , I'm Ibtisam - a UI/UX designer known for my curiosity and
                knack for unraveling the mysteries of design and functionality.{" "}
                <span className="font-[800] text-[24px] leading-[130%] tracking-[0%] text-black">
                  Since I was a kid
                </span>
                , I've always been fascinated by how things work. While other
                kids played with toys, I preferred taking them apart to see what
                made them tick. I used to cry later when I couldn’t fix them
                back, but hey, at least my curiosity was satisfied.
              </p>
              <p className="font-[200] text-[24px] leading-[130%] tracking-[0%] text-slate-700">
                My journey into UI/UX design isn’t normal. In fact, it wasn't
                even planned—it all started with an introduction from my
                brother. With my natural creativity and hunger for knowledge, I
                dove headfirst into the world of UI/UX design. One project led
                to another, I was exploring, challenging norms, and offering
                fresh perspectives. And it{" "}
                <span className="font-[800] text-[24px] leading-[130%] tracking-[0%] text-black">
                  CLICKED! Soon
                </span>
                , I realized that Ibtisam and UX design could become a better{" "}
                <span className="font-[800] text-[24px] leading-[130%] tracking-[0%] text-black">
                  love story than Twilight :P
                </span>
              </p>
              <p className="font-[200] text-[24px] leading-[130%] tracking-[0%] text-slate-700">
                Design and breaking toys have one thing in common - you get to
                explore the functionality of everything at its core. But for me,
                design is about more than just creating interfaces it's about
                crafting experiences that captivate and delight users.{" "}
                <span className="font-[800] text-[24px] leading-[130%] tracking-[0%] text-black">
                  Fueled by passion
                </span>
                , I approach each project with dedication and a commitment to
                excellence.
              </p>
              <p className="font-[200] text-[24px] leading-[130%] tracking-[0%] text-slate-700">
                Today, I'm proud to be recognized as a skilled UI/UX designer,
                known for my blend of curiosity and passion. With me at the
                helm, users can expect engaging and memorable experiences every
                step of the way.
              </p>
            </div>
          </div>
          {/* story div after pic and ibtsam div end */}

          {/* learning div after story and abitsam start */}
          <div className="w-[1336px] h-[186px] gap-[240px] flex mt-[48px]">
            <div className="w-[440px] h-[107px] gap-[20px] flex flex-col">
              <div className="w-[188px] h-[58px] ">
                <p className="font-[800] text-[48px] leading-[120%] tracking-[0%]">
                  Learning
                </p>
              </div>
              <div className="w-[300px] h-[29px]">
                <p className="font-[400] text-[24px] leading-[120%] tracking-[0%] text-slate-700">
                  A little help goes a long way
                </p>
              </div>
            </div>

            <div className="w-[656px] h-[186px]">
              <p className="font-[200] text-[24px] leading-[130%] tracking-[0%] text-slate-700">
                <span className="font-[800] text-[24px] leading-[130%] tracking-[0%] text-black">
                  A little help
                </span>{" "}
                can make a world of difference. Whether it was a word of{" "}
                <span className="font-[800] text-[24px] leading-[130%] tracking-[0%] text-black">
                  advice from a mentor
                </span>{" "}
                or a small gesture of support from a colleague, these acts have
                had a ripple effect in my journey, propelling me forward and
                igniting my drive for innovation and growth.{" "}
                <span className="font-[800] text-[24px] leading-[130%] tracking-[0%] text-black">
                  Now
                </span>
                , it's my turn to pay it forward and offer assistance to others
                on their journey.
              </p>
            </div>
          </div>
          {/* learning div after story and abitsam end */}

          {/* career div after learning div start  */}
          <div className="w-[1336px] h-[1508px] gap-[240px] flex mt-[48px]">
            <div className="w-[440px] h-[107px] gap-[20px] flex flex-col">
              <div className="w-[188px] h-[58px] ">
                <p className="font-[800] text-[48px] leading-[120%] tracking-[0%]">
                  Learning
                </p>
              </div>
              <div className="w-[440px] h-[29px]">
                <p className="font-[400] text-[24px] leading-[120%] tracking-[0%] text-slate-700">
                  My journey so far
                </p>
              </div>
            </div>

            <div className="w-[656px] h-[1508px] gap-[80px] flex flex-col">
              <div className="w-[656px] h-[93px] ">
                <p className="font-[200] text-[24px] leading-[130%] tracking-[0%] text-slate-700">
                  In the{" "}
                  <span className="font-[800] text-[24px] leading-[130%] tracking-[0%] text-black">
                    last few years
                  </span>
                  , I have had the opportunity to work with several clients and
                  companies. Here's a list of the companies I have worked for:
                </p>
              </div>

              <div className="w-[656px] h-[34px] gap-[80px] flex flex-col">
                <div className="w-[656px] h-[34px] flex justify-between">
                  <div className="w-[282px] h-[34]">
                    <p className="font-[500] text-[28px] leading-[120%] tracking-[0%] text-slate-700">
                      Remote (Current)
                    </p>
                  </div>
                  <div className="w-[282px] h-[34px]">
                    <p className="font-[500] text-[30px] leading-[120%] tracking-[0%] underline ">
                      JustWatch
                    </p>
                  </div>
                </div>
              </div>

              {/* 3rd inside career start */}
              <div className="w-[656px] h-[484px] gap-[56px] flex flex-col">
                <div className="w-[656px] h-[34px]  flex justify-between">
                  <div className="w-[282px] h-[34]">
                    <p className="font-[500] text-[28px] leading-[120%] tracking-[0%] text-slate-700">
                      Full Time (AlphaSquad)
                    </p>
                  </div>
                  <div className="w-[282px] h-[34px] ">
                    <p className="font-[500] text-[30px] leading-[120%] tracking-[0%] underline ">
                      NCR
                    </p>
                  </div>
                </div>

                <div className="w-[656px] h-[34px]  flex justify-between">
                  <div className="w-[282px] h-[34]">
                    <p className="font-[500] text-[28px] leading-[120%] tracking-[0%] text-slate-700"></p>
                  </div>
                  <div className="w-[282px] h-[34px] ">
                    <p className="font-[500] text-[30px] leading-[120%] tracking-[0%] underline ">
                      Shoplift
                    </p>
                  </div>
                </div>

                <div className="w-[656px] h-[34px]  flex justify-between">
                  <div className="w-[282px] h-[34]">
                    <p className="font-[500] text-[28px] leading-[120%] tracking-[0%] text-slate-700"></p>
                  </div>
                  <div className="w-[282px] h-[34px] ">
                    <p className="font-[500] text-[30px] leading-[120%] tracking-[0%] underline ">
                      Qloop
                    </p>
                  </div>
                </div>

                <div className="w-[656px] h-[34px]  flex justify-between">
                  <div className="w-[282px] h-[34]">
                    <p className="font-[500] text-[28px] leading-[120%] tracking-[0%] text-slate-700"></p>
                  </div>
                  <div className="w-[282px] h-[34px] ">
                    <p className="font-[500] text-[30px] leading-[120%] tracking-[0%] underline ">
                      GeekFlare
                    </p>
                  </div>
                </div>

                <div className="w-[656px] h-[34px]  flex justify-between">
                  <div className="w-[282px] h-[34]">
                    <p className="font-[500] text-[28px] leading-[120%] tracking-[0%] text-slate-700"></p>
                  </div>
                  <div className="w-[282px] h-[34px] ">
                    <p className="font-[500] text-[30px] leading-[120%] tracking-[0%] ">
                      Xsocial
                    </p>
                  </div>
                </div>

                <div className="w-[656px] h-[34px]  flex justify-between">
                  <div className="w-[282px] h-[34]">
                    <p className="font-[500] text-[28px] leading-[120%] tracking-[0%] text-slate-700"></p>
                  </div>
                  <div className="w-[282px] h-[34px] ">
                    <p className="font-[500] text-[30px] leading-[120%] tracking-[0%] underline ">
                      Bloquity
                    </p>
                  </div>
                </div>
              </div>
              {/* 3rd inside career end */}

              {/* 4rd inside career start */}
              <div className="w-[656px] h-[484px] gap-[56px] flex flex-col">
                <div className="w-[656px] h-[34px]  flex justify-between">
                  <div className="w-[282px] h-[34]">
                    <p className="font-[500] text-[28px] leading-[120%] tracking-[0%] text-slate-700">
                      Freelance
                    </p>
                  </div>
                  <div className="w-[282px] h-[34px] ">
                    <p className="font-[500] text-[30px] leading-[120%] tracking-[0%] underline ">
                      Oncentive
                    </p>
                  </div>
                </div>

                <div className="w-[656px] h-[34px]  flex justify-between">
                  <div className="w-[282px] h-[34]">
                    <p className="font-[500] text-[28px] leading-[120%] tracking-[0%] text-slate-700"></p>
                  </div>
                  <div className="w-[282px] h-[34px] ">
                    <p className="font-[500] text-[30px] leading-[120%] tracking-[0%] underline ">
                      Accualigner
                    </p>
                  </div>
                </div>

                <div className="w-[656px] h-[34px]  flex justify-between">
                  <div className="w-[282px] h-[34]">
                    <p className="font-[500] text-[28px] leading-[120%] tracking-[0%] text-slate-700"></p>
                  </div>
                  <div className="w-[282px] h-[34px] ">
                    <p className="font-[500] text-[30px] leading-[120%] tracking-[0%] underline ">
                      Enter Here
                    </p>
                  </div>
                </div>

                <div className="w-[656px] h-[34px]  flex justify-between">
                  <div className="w-[282px] h-[34]">
                    <p className="font-[500] text-[28px] leading-[120%] tracking-[0%] text-slate-700"></p>
                  </div>
                  <div className="w-[282px] h-[34px] ">
                    <p className="font-[500] text-[30px] leading-[120%] tracking-[0%]  ">
                      Copitch
                    </p>
                  </div>
                </div>

                <div className="w-[656px] h-[34px]  flex justify-between">
                  <div className="w-[282px] h-[34]">
                    <p className="font-[500] text-[28px] leading-[120%] tracking-[0%] text-slate-700"></p>
                  </div>
                  <div className="w-[282px] h-[34px] ">
                    <p className="font-[500] text-[30px] leading-[120%] tracking-[0%] underline">
                      Trellis Work
                    </p>
                  </div>
                </div>

                <div className="w-[656px] h-[34px]  flex justify-between">
                  <div className="w-[282px] h-[34]">
                    <p className="font-[500] text-[28px] leading-[120%] tracking-[0%] text-slate-700"></p>
                  </div>
                  <div className="w-[282px] h-[34px] ">
                    <p className="font-[500] text-[30px] leading-[120%] tracking-[0%] ">
                      Just Taxi
                    </p>
                  </div>
                </div>
              </div>
              {/* 4rd inside career end */}

              {/* 5th inside career start */}
              <div className="w-[656px] h-[93px] ">
                <p className="font-[300] text-[24px] leading-[130%] tracking-[0%] text-slate-700">
                  As a freelancer, I have covered over 70+ projects, including
                  SaaS applications, landing pages, mobile app designs, and the
                  list goes on!
                </p>
              </div>
              {/* 5th inside career end */}
            </div>
          </div>
          {/* career div after learning div end */}
        </div>
        {/* main part after navbar end */}
      </div>

      {/* after main div just befor footer start */}
      <div className=" max-w-[1336px]   gap-[32px] flex flex-col border-t-[3px] mt-[164px]  m-auto">
        <div className="w-full h-[76px] py-[32px]">
          <p className="font-[700] text-[32px]  leading-[120%] tracking-[0%]">
            Feel free to reach and check out my dribbble shots!
          </p>
        </div>

        <div className="w-[183px] h-[61px] py-[16px] px-[48px] gap-[10px] flex bg-black mt-[22px] ">
          <div className="w-[87px] h-[29px]">
            <a
              className="text-white font-[800] text-[24px]  leading-[120%] tracking-[0%] "
              href=""
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      {/* after main div just befor footer end */}

      <Footer />
    </>
  );
}

export default About;
