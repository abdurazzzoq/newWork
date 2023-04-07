import React from "react";
import logo from "../../images/Logo (10).svg";
import twitter from "../../images/twitter (2).svg";
import linkedin from "../../images/Linkdin.svg";
import youtube from "../../images/youtube (1).svg";
import whatsapp from "../../images/whatsapp (2).svg";
import behance from "../../images/behance.svg";
import { styles } from "../../constants";

const Footer = () => {
  return (
    <div className={`${styles.paddingX2} pt-5 md:pt-24 bg-[#F1FAFC] flex flex-col items-start lg:flex lg:flex-row lg:items-center justify-between`}>
      <div className="">
        <img className="hidden lg:block" src={logo} alt="" />
        <p className="font-poppins text-[18px] leading-[191%] text-[#333333] max-w-[540px]">
          Bizning shifoxonamiz jamiyatning sifatli stomatologik tibbiy
          xizmatlarga bo'lgan ehtiyojidagi muammolarga javob berishga harakat
          qiladi.
        </p>
        <div className="">
          <ul className="flex gap-3 flex-row mx-auto text-center items-center">
            <li>
              <img src={twitter} alt="" />
            </li>
            <li>
              <img src={linkedin} alt="" />
            </li>
            <li>
              <img src={youtube} alt="" />
            </li>
            <li>
              <img src={whatsapp} alt="" />
            </li>
            <li>
              <img src={behance} alt="" />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-7 ">
        <ul className=" hidden lg:block">
          <li className=" font-poppins font-semibold">Sahifalar</li>
          <li className=" font-poppins mt-9">Biz haqimizda</li>
          <li className=" font-poppins mt-9">Bosh sahifa</li>
          <li className=" font-poppins mt-9">Xizmatlarimiz</li>
        </ul>

        <div className="">
          <h5 className=" mb-9 font-poppins font-semibold">Tibbiy tekshiruv vaucherini oling</h5>

          <div className="flex items-center text-center flex-row md:flex md:flex-row lg:flex lg:flex-col lg:items-start lg:text-left gap-3">
          <input
            className=" w-full  bg-[#494949] rounded  outline-none focus:bg-zinc-500 transition-all delay-150 text-white py-3 sm:pr-32 sm:pl-12"
            placeholder="Emailingizni kiritinng"
            type="text"
          />
          <button className=" w-full md:w-auto lg:mt-5 border-2 rounded-md bg-[#0099FF] lg:block border-[#0099FF] py-2 px-2  md:py-3  md:px-5  font-poppins lg:text-[18px] font-medium text-white hover:text-[#0099FF] hover:bg-white outline-none object-contain">Ulanish</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
