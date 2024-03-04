import React from 'react'
import BlogCard from './BlogCard'

const BlogForPharmacyPage = () => {
    return (
        <>
        <div className=' w-[88%] mx-auto h-[568px] mt-[80px] flex flex-col justify-around'>
            <div className='flex '>
                <p className='font-normal text-[25px] text-[#1364FF]'>Blogs</p>
                <div className='ml-[150px]'>
                <h2 className='w-[401px] font-normal text-[40px] '>
                    Blogs on Pharmacy
                    Essentitals
                </h2>
                <p className='text-[25px] font-normal text-[#7A7A7A]'>Description</p>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
        </div>
        <hr className='w-full h-[2px] mt-[70px] bg-[#A1A3A7] '/>
        </>
    )
}

export default BlogForPharmacyPage