import person from "../assets/diabticsimages/person.png";

function Navbarr() {
  const pathname = window.location.pathname;
  return (
    <>
      <div className="max-w-[1336px] flex flex-row mt-6 items-center justify-between">
        <div className="flex flex-row items-center justify-center gap-2.5 ">
          <img src={person} alt="" className="w-13 rounded-full" />
          <p className="font-bold text-[24px] leading-[120%] tracking-[0]">
            M.Ibtisam Ul Haq
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-8">
          <a
            href="/"
            className={`${
              pathname === "/" || pathname === "/work"
                ? " "
                : "group transition duration-300"
            } font-bold text-[24px] leading-[120%] tracking-[0]`}
          >
            Work
            <span
              className={`${
                pathname === "/" || pathname === "/work"
                  ? "block  max-w-full h-0.5 bg-black"
                  : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"
              }`}
            ></span>
          </a>

          <a
            href="/about"
            className={`${
              pathname === "/about" ? " " : "group transition duration-300 "
            } font-bold text-[24px] leading-[120%] tracking-[0]`}
          >
            About
            <span
              className={`${
                pathname === "/about"
                  ? "block  max-w-full h-0.5 bg-black"
                  : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"
              }`}
            ></span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbarr;
