import React from 'react'

const FetureBlackCard = ({name,deletePrice,price}) => {
  return (
    <>
    <div className='flex flex-col'>
    <div className='w-[364px] h-[356px] rounded-[15px] bg-black relative'>
        <div className='absolute right-[18px] top-[18px] w-[75px] h-[75px] flex justify-center items-center bg-[#1364FF] rounded-full'>
            <img src='Arrow 1.png' className='w-[32px]'/>
        </div>
    </div>
    <p className='font-normal text-[36px] text-[#000000] '>{name}</p>
    <div><span className='text-[24px] font-normal text-[#7A7A7A]'>{deletePrice}</span> <span className='text-[#1364FF] font-normal text-[24px] ml-[27px]'>{price}</span></div>
   
    </div>
     </>
  )
}

export default FetureBlackCard