import React from 'react'

const FooterPage = () => {
  return (
    <div className='bg-[#0058FF]'>
        <div className='w-full h-[455px] bg-[#0058FF] flex justify-around items-center px-11 mt-[80px]'>
        <div className='flex flex-col gap-[50px]'>
            <a href='' className='font-normal text-[24px] text-[#ADC9FF] '>ABOUT US</a>
            <a href='' className='font-normal text-[24px] text-[#ADC9FF] '>CONTACT US </a>
            <a href='' className='font-normal text-[24px] text-[#ADC9FF] '>TERMS & CONDITIONS</a>
            <a href='' className='font-normal text-[24px] text-[#ADC9FF] '>PRIVACY POLICY</a>
        </div>
        <div>
            <img src='images/Qr Code.png' className='w-[200px] h-[200px] '/>
        </div>
        <div className='flex flex-col items-center'>
            <p className='font-semibold text-[32px] text-[#ADC9FF] '>CONNECT WITH US</p>
            <div className='flex gap-[64px] mt-[44px] justify-center'>
                 <a href=''><img src='images/Vector (2).png' className='w-[35px] h-[28px] '/></a>
                 <a href=''><img src='images/Vector (3).png' className='w-[35px] h-[35px] '/></a>
                 <a href=''><img src='images/Vector (4).png' className='w-[18px] h-[33px] '/></a>
                 <a href=''><img src='images/Vector (5).png' className='w-[35px] h-[26px] '/></a>
            </div>
        </div>
    </div>
    <div className='text-center pb-2 '><a href='' className='text-[#1e1e1e93] text-[16px] font-normal '>COPYRIGHTS 2024 BY PHARMACY STORE. ALL RIGHTS RESERVED</a></div>
    </div>
  )
}

export default FooterPage