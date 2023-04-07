import React from 'react'
import client1 from '../../images/oktam.png'
import client2 from '../../images/sanobar.png'
import { styles } from '../../constants'


const CLient = () => {
  return (
    <div className={`${styles.paddingX2} pt-24`}>
        <p className='font-poppins text-[20px] leading-10 font-medium'>Mijozlarimiz</p>
        <h3 className="font-poppins text-[20px] md:text-[28px] lg:text-[40px] leading-10 font-medium max-w-[632px] mt-5">Shifoxonamizga tashrif buyurganlarni fikrlari bilan tanishing</h3>

        <div className="flex flex-col sm:flex sm:flex-row justify-between gap-3 box mt-3">

<div className=" shadow-xl max-w-[622px] ">
    <img src={client1} alt="" />
    <h5 className='pl-5 pt-2 font-poppins text-[20px] leading-10 font-bold'>O’ktam Aliyev</h5>
    <p className='pl-5'>Men his qilgan xizmat juda yaxshi edi, xodimlar va shifokorlar samimiy va juda aniq ma'lumot berishdi.</p>
</div>

<div className="shadow-xl max-w-[610px] ">
    <img src={client2} alt="" />
    <h5 className=' pl-5 pt-2 font-poppins text-[20px] leading-10 font-bold'>Sanobar Ishmuhammedova</h5>
    <p className='pl-5'>Men his qilgan xizmat juda yaxshi edi, xodimlar va shifokorlar samimiy va juda aniq ma'lumot berishdi.</p>
</div>

        </div>
    </div>
  )
}

export default CLient