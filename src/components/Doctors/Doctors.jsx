import React from "react";
import doctor1 from '../../images/doctorD.png'
import doctor2 from '../../images/AlijonD.png'
import doctor3 from '../../images/aliyevD (1).png'
import doctor4 from '../../images/ShoiraD.png'
import socialLinks from '../../images/social-links.svg'
import { styles } from "../../constants";

const Doctors = () => {
  return (
    <div className={`${styles.paddingX2} bg-service pb-20 pt-24`}>
      <div className="flex flex-col text-center items-center">
        <p className="font-poppins text-[20px] leading-10 font-medium">
          Bizning doctorlar
        </p>
        <h3 className="font-poppins text-[20px] md:text-[28px] lg:text-[40px] leading-10 font-medium max-w-[632px] mt-5">
          Bizning tajribali mutaxassislarimiz bilan uchrashing
        </h3>
      </div>

      <div className=" flex flex-col flex-wrap lg:flex-nowrap  flex-1 lg:flex lg:flex-row justify-between mt-8">


<div className="flex gap-10 justify-center flex-wrap items-center sm:flex-nowrap sm:flex sm:flex-row flex-col">

        <div className=" w-72 ">
          <img className="img mt-5" height={377} width={308} src={doctor1} alt="" />

          <div className="bg-white ml-4 margin rounded-lg">
            <img className="mb-3 lg:mb-0 mt-3" src={socialLinks}  alt="" />
            <h5 className=" font-poppins text-[20px] font-bold leading-6">Doctor D Irgashev Dilmirod</h5>
            <p className=" font-poppins text-[16px] font-normal">Aндролог, Pепродуктолог</p>
            
          </div>
        </div>


        <div className=" ">
          <img className="img" height={377} width={308}src={doctor2} alt="" />

          <div className="">
            <img src={socialLinks} className="mt-3" alt="" />
            <h5 className=" font-poppins text-[20px] font-bold leading-6">Alijon shamsiyev</h5>
            <p className="font-poppins text-[16px] font-normal">Pediatric </p>
          </div>
        </div>
        </div>



<div className="flex gap-10 justify-center flex-wrap items-center sm:flex-nowrap sm:flex sm:flex-row flex-col">
        <div className=" ">
          <img className="img" height={377} width={308} src={doctor3} alt="" />

          <div className="">
          <img src={socialLinks} className="mt-3" alt="" />
            <h5 className=" font-poppins text-[20px] font-bold leading-6">O’ktam aliyev</h5>
            <p className="font-poppins text-[16px] font-normal">Dentist </p>
          </div>
        </div>


        <div className=" ">
          <img className="img" height={300} width={308} src={doctor4} alt="" />

          <div className="">
          <img src={socialLinks} className="mt-3" alt="" />
            <h5 className=" font-poppins text-[20px] font-bold leading-6">Shoira Athamova</h5>
            <p className="font-poppins text-[16px] font-normal">Ophthalmology </p>
          </div>
        </div>
      </div>
      </div>


    </div>
  );
};

export default Doctors;
