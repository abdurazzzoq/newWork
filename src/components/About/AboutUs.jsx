import React from 'react'
import doctor from '../../images/doctorAbout.svg'
import { styles } from '../../constants'



const AboutUs = () => {
  return (
    <div className={`${styles.paddingX2} pt-20 lg:flex lg:flex-row  flex flex-col-reverse items-center justify-between`}>
        <img className='pt-10' src={doctor} alt="" />
        <div className="w-full lg:max-w-[632px]">
<p className='font-poppins text-[20px] leading-10 font-medium'>Biz haqimizda</p>
<h3 className='font-poppins text-[20px] md:text-[28px] lg:text-[40px] leading-10 font-medium max-w-[632px] mt-5'>Biz sizga yordam berolamiz</h3>
<p className="font-poppins text-[#999999] lg:text-[20px] font-medium  pt-9 sm:pt-6 lg:pt-3">Biz sizning sog'lingizni saqlash xizmatlari va tibbiy yordam ko'rsatish faoliyatini, shuningdek, umumiy kasalxonaning barcha sharoitlarini, etnik kelib chiqishi  va chastotasi bo'lgan keng jamoatchilikda aks ettirilgan sharoitlarini  tavsiflaydi. </p>
<button className=" lg:mt-32 mt-3 border-2 rounded-md bg-[#0099FF] lg:block border-[#0099FF]  pb-1 md:py-3 px-3 md:px-2 font-poppins lg:text-[18px] font-medium text-white hover:text-[#0099FF] hover:bg-white outline-none object-contain ">biz haqimizda ko’proq</button>
        </div>
    </div>
  )
}

export default AboutUs