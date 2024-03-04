import React from 'react'
import BluePageCard from './BluePageCard'

const BluePage = () => {
    return (
        <>
            <div className='h-[848px] w-full bg-[#0058FF]  mt-[13px]'>
                <div className='flex ml-[150px] items-center'>
                    <span className='text-[#ADC9FF] font-normal text-[25px] mb-[10px]'>Services</span>
                    <div className='self-end ml-[170px] mt-[96px]'>
                        <h3 className='w-[399px] text-[#FFFFFF] text-[40px] font-medium'>Comprehensive Pharmacy Service</h3>
                        <p className='text-[#A1A3A7] text-[25px] font-normal '>Description</p>
                    </div>
                    <div className='w-[220px] h-[220px] ml-[210px] rounded-full flex justify-center items-center border-[#A1A3A7] border-2 font-sans text-[18px] text-white'>
                    All Services
                    </div>
                </div>
                <div className='flex flex-wrap w-[90%] justify-around mx-auto mt-[60px] gap-y-5'>
                    <BluePageCard service={"01 / Prescription Filling"}/>
                    <BluePageCard service={"02 / Home Delivery"}/>
                    <BluePageCard service={"03 /Health Consultations"}/>
                </div>
            </div>
        </>
    )
}

export default BluePage