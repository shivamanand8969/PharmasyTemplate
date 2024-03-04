import React from 'react'

const ImagePage = () => {
  return (
    <div className='w-full h-[604px] bg-[#0058FF] flex justify-around items-center'>
        <div>
            <img src='images/MedicineImage.png' className='w-[605px] h-[600px] '/>
        </div>
        <div className='h-[456px] w-[506px] relative '>
           <img src='images/tablet.png'/>
           <div className='absolute top-[65px] left-[28px]'>
            <h2 className='w-[319px] h-[144px] text-[#FFFFFF] text-[48px] font-bold text-center'>We are open 
24 x 7</h2>
         <p className='w-[375px] text-[32px] font-normal text-center ml-[-30px] mt-[105px] text-white'>Happy to help you Anytime :)</p>
           </div>
        </div>
    </div>
  )
}

export default ImagePage