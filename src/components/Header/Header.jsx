import React, { useState } from "react";
import logo from "../../images/Logo (10).svg";
import hamburger from "../../images/hamburger (1).svg";
import { styles } from "../../constants";
import close from "../../images/x-close-delete-svgrepo-com.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="">
      <div className={`pt-4 ${styles.flexBetween} container mx-auto`}>
        <img className="hidden lg:block" src={logo} alt="" />

        <div className="">
          <ul className="flex gap-6">
            <li className="font-poppins text-[18px] hidden lg:block font-medium">
              Xizmatlar
            </li>
            <li className="font-poppins text-[18px] hidden lg:block font-medium">
              Biz haqimizda
            </li>
            <li className="font-poppins text-[18px] hidden lg:block font-medium">
              Shifokorlarimiz
            </li>
            <li className="font-poppins text-[18px] hidden lg:block font-medium">
              Mijozlarimiz
            </li>
            <li className="font-poppins text-[18px] hidden lg:block font-medium">
              Bosh sahifa
            </li>
          </ul>
        </div>

        <button className=" border-2 rounded-md hidden lg:block border-[#0099FF] py-3 px-16 font-poppins text-[18px] font-medium  text-[#0099FF] hover:text-white hover:bg-[#0099FF] outline-none object-contain">
          Kirish
        </button>
      </div>

      <div className={`flex items-center ${styles.paddingX} justify-between `}>
        <div className="">
          <img
            width={41}
            height={41}
            className="block lg:hidden bg-transparent"
            src={!toggle ? hamburger : close}
            alt=""
            onClick={toggleHandler}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } w-36 block lg:hidden h-44  absolute top-16 right-0 left-0 p-3 bg-white `}
          >
            <ul>
              {" "}
              <li className="font-poppins text-[14px] font-medium">
                Xizmatlar
              </li>
              <li className="font-poppins text-[14px] mt-2 font-medium">
                Biz haqimizda
              </li>
              <li className="font-poppins text-[14px] mt-2 font-medium">
                Shifokorlarimiz
              </li>
              <li className="font-poppins text-[14px] mt-2 font-medium">
                Mijozlarimiz
              </li>
              <li className="font-poppins text-[14px] mt-2 font-medium">
                Bosh sahifa
              </li>
            </ul>
          </div>
        </div>

        <img className="block lg:hidden" src={logo} alt="" />

        <button className=" border-2 rounded-md block lg:hidden border-[#0099FF] py-2 lg:px-12 pt-1 pb-1 md:py-3 px-3 md:px-6 font-poppins text-[16px] font-medium  text-[#0099FF] hover:text-white hover:bg-[#0099FF] outline-none object-contain">
          Kirish
        </button>
      </div>
    </div>
  );
};

export default Header;
