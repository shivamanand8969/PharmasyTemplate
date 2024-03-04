import React from 'react'

const ReviewPage = () => {
  return (
    <>
    <div className='w-[90%] h-[785px] flex flex-col items-center mx-auto'>
         <div className='flex ml-[0px] mt-[43px] items-center'>
                <span className='text-[#1364FF] font-normal text-[25px] mb-[10px] mt-[-82px]'>Review</span>
                <div className=' ml-[160px]'>
                    <h3 className='w-[308px] text-[#000000] text-[40px] font-medium'> Reviews That Inspire Us</h3>
                    <p className='text-[#7A7A7A] text-[25px] font-normal '>Description</p>
                </div>
                <div className='w-[220px] h-[220px] ml-[310px] rounded-full flex justify-center items-center border-[#A1A3A7] border-2 text-[18px]'>
                All Reviews
                </div>
            </div>

            <div className='flex gap-[111px] mt-[80px]'>
                <div className='w-[93px] h-[93px] rounded-full bg-black'></div>
                <div>
                    <div className='w-[50px] h-[50px] rounded-full border-[2px] border-[#BCBCBC] flex justify-center items-center'><img src='images/quote.png'/></div>
                    <p className='font-medium text-[24px] w-[548px] text-[#202020]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <p className='font-medium text-[20px] text-[#0D0D0D] '>Theresa J. Jones</p>
                    <p className='font-medium text-[20px] text-[#7A7A7A] '>24 years old</p>
                </div>
            </div>
    </div>
    <hr className=' border-0 h-[1px] mb-[34px] w-full bg-[#A1A3A7]  '/>

    </>
  )
}

export default ReviewPage