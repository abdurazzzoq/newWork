import React from 'react'
import { styles } from '../../constants'

const Contact = () => {
  return (
    <div className={`${styles.paddingX2} mt-24`}>
      <div className={ `${styles.paddingX2} bg-[#333333] flex justify-between pt-20 pb-12 display`}>
        <div className=" max-w-md ">
<h3 className='font-poppins text-[20px] text-white md:text-[28px] lg:text-[40px] leading-10 font-medium max-w-[632px] mt-5'>Sog'ligingiz haqida shifokorimiz bilan maslahatlashing</h3>
<p className='font-poppins text-[16px] text-white font-normal'>biz eng yaxshi xizmatni taqdim etamiz.</p>
</div>
<button className=" mt-32 margin rounded-md bg-[#0099FF] lg:block border-[#0099FF] py-3 px-3 font-poppins lg:text-[18px] font-medium text-white hover:text-[#0099FF] hover:bg-white outline-none ">Biz bilan bog'laning</button>
    </div>
    </div>
  )
}

export default Contact