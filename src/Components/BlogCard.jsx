import React from 'react'

const BlogCard = () => {
  return (
    <div className='w-[325px] h-[325px] rounded-full flex flex-col justify-center items-center gap-[20px] border-[2px] border-black relative'>
        <div className='absolute right-[102px] top-7 w-[13px] h-[13px] rounded-full bg-[#A1A3A7]'></div>
        <div className='absolute right-[85px] top-[32px] w-[13px] h-[13px] rounded-full bg-[#1364FF]'></div>
        <div className='absolute right-[91px] top-[47px] w-[13px] h-[13px] rounded-full bg-[#A1A3A7]'></div>
        <h3 className='font-semibold text-[24px] text-[#000000] text-center'>Pain Relievers</h3>
        <p className='font-medium text-[13px] text-[#7A7A7A] text-center '> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <a href='' className='font-medium text-[18px] text-[#0164AB]'>Explore</a>
    </div>
  )
}

export default BlogCard