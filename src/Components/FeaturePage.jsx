import React from 'react'
import FetureBlackCard from './FetureBlackCard'

const FeaturePage = () => {


    return (
        <>
        <div className='h-[800px] w-full  mt-[43px]'>
            <div className='flex ml-[150px] items-center'>
                <span className='text-[#1364FF] font-normal text-[25px] mb-[10px]'>Featured</span>
                <div className='self-end ml-[170px]'>
                    <h3 className='w-[399px] text-[#000000] text-[40px] font-medium'>Featured Pharmacy Essentials </h3>
                    <p className='text-[#7A7A7A] text-[25px] font-normal '>Description</p>
                </div>
                <div className='w-[220px] h-[220px] ml-[210px] rounded-full flex justify-center items-center border-[#A1A3A7] border-2 text-[18px]'>
                All Products
                </div>
            </div>
        <div className='flex flex-wrap w-[90%] justify-around mx-auto mt-[60px] gap-y-5'>

        <FetureBlackCard name={"Pills"} deletePrice={"₹ 18.00"} price={"₹ 12.00"}/>
        <FetureBlackCard name={"Syrup"} deletePrice={"₹ 18.00"} price={"₹ 12.00"}/>
        <FetureBlackCard name={"Vitamin"} deletePrice={"₹ 18.00"} price={"₹ 12.00"}/>

        </div>
        </div>
        <hr className=' border-0 h-[1px] w-full bg-[#A1A3A7]  '/>
    </>
    )
}

export default FeaturePage
