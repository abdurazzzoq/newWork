import React from "react";
import doctor from "../../images/doctor.png";
import { styles } from "../../constants";

const Main = () => {
  return (
    <div
      className={` mt-20 lg:flex justify-between flex flex-col lg:flex-row items-center ${styles.paddingX2}`}
    >
      <div className="w-full  lg:max-w-[390px] bg">
        <h3 className="font-poppins sm:text-[36px] lg:text-[56px] sm:leading-[60px] font-bold">
          Biz sizning sog'ligingiz haqida qayg'uramiz
        </h3>
        <p className="font-poppins text-[#999999] lg:text-[20px] font-medium  pt-9 sm:pt-6 lg:pt-3">
          Bizning professional shifokorimiz va zamonaviy jihozlarimiz bilan
          sog'lig'ingizni tekshiring
        </p>
        <button className=" border-2 rounded-md bg-[#0099FF] lg:block border-[#0099FF] pt-1 pb-1 md:py-3 px-3 md:px-2 font-poppins lg:text-[18px] font-medium text-white hover:text-[#0099FF] hover:bg-white outline-none object-contain mt-3">
          Hozir tekshiring
        </button>
      </div>
      <img src={doctor} alt="" width={600} height={680} />
    </div>
  );
};

export default Main;
