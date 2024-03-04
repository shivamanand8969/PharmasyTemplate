import React from 'react'

const BluePageCard = ({service}) => {
  return (
    <div className='flex flex-col'>
    <div className='w-[364px] h-[356px] rounded-[15px] bg-[#FFFFFF] relative'>
        <div className='absolute right-[18px] top-[18px] w-[75px] h-[75px] flex justify-center items-center bg-[#1364FF] rounded-full'>
            <img src='Arrow 1.png' className='w-[32px]'/>
        </div>
    </div>
    <p className='font-normal text-[25px] text-[#FFFFFF] '>{service}</p>
    <div><span className='text-[24px] font-normal text-[#ADC9FF]'>Description</span> </div>
   
    </div>
  )
}

export default BluePageCard