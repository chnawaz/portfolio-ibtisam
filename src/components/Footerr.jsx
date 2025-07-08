import mail from "../assets/diabticsimages/mail.png";
import phone from "../assets/diabticsimages/phone.png";

function Footerr() {
  return (
    <>
      <div className="max-w-[1336px]  md:flex md:flex-row m-auto xl:px-8 2xl:px-0 px-10 mt-[164px] items-center md:justify-between flex flex-col mb-3">
        <div className="md:flex md:flex-row items-center justify-center md:gap-8">
          <div className="flex items-center justify-center md:gap-1 cursor-pointer">
            <img src={mail} alt="" className="" />
            <div className="group  transition duration-300">
              <p className="font-bold text-[24px] leading-[120%] tracking-[0]">
                Ibtisam.visuals@gmail.com
              </p>
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </div>
          </div>
          <div className="flex items-center justify-center md:gap-1 cursor-pointer">
            <img src={phone} alt="" className="" />
            <div className="group  transition duration-300">
              <p className="font-bold text-[24px] leading-[120%] tracking-[0]">
                +92 3067161699
              </p>
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-row items-center justify-center md:gap-8">
          <div className="group  transition duration-300 cursor-pointer">
            <p className="font-bold text-[24px] leading-[120%] tracking-[0]">
              About
            </p>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </div>
          <div className="group  transition duration-300 cursor-pointer">
            <p className="font-bold text-[24px] leading-[120%] tracking-[0]">
              LinkedIn
            </p>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footerr;
