import React from 'react'
import calendar from '../../images/calendar.svg'
import healthcare from '../../images/healthcare.svg'
import doctorService from '../../images/doctorService.svg'
import { styles } from '../../constants'






const Service = () => {
  return (
    <div className=' bg-service pt-24 mt-10 '>
        <div className={`${styles.paddingX2}`}>
        <div className="flex flex-col items-center text-center">
<p className='font-poppins text-[20px] leading-10 font-medium'>Bizning xizmatlarimiz</p>
<h3 className='font-poppins text-[20px] md:text-[28px] lg:text-[40px] leading-10 font-medium max-w-[632px] mt-5'>3 qadam bilan biz sizning sog'lig'ingizga g'amxo'rlik qilamiz</h3>
        </div>



        <div className={` flex-col text-center lg:flex-row lg:${styles.flexBetween} mt-7 pb-32`}>

            <div className=" text-center bg-white pb-5 px-8 mt-3 lg:mt-0">
                <img src={calendar} alt=""  className='mx-auto' />
                <div className="">
                <h5 className='font-poppins text-[20px] font-semibold pt-9'>Sana</h5>
                <p className='font-poppins text-[18px] font-medium mx-auto w-full text-[#999999] lg:w-48'>O’zingizga maqul vaqtni tanlang</p>
                </div>
            </div>
            <div className=" text-center bg-white pb-5 px-8 mt-3 lg:mt-0">
                <img src={healthcare} alt=""  className='mx-auto' />
                <h5 className='font-poppins text-[20px] font-semibold pt-9'>Sog'lik</h5>
                <p className='font-poppins text-[18px] font-medium mx-auto w-full text-[#999999] lg:w-48'>sog’ligingizni tekshiring</p>
            </div>
            <div className=" text-center bg-white pb-5 px-8 mt-3 lg:mt-0">
                <img src={doctorService} alt="" className='mx-auto'  />
                <h5 className='font-poppins text-[20px] font-semibold pt-9'>Shifokor</h5>
                <p className='font-poppins text-[18px] font-medium mx-auto w-full text-[#999999] lg:w-52'>Xoxlagan shifokoringizni tanlang</p>
            </div>

        </div>

        </div>
    </div>
  )
}

export default Service