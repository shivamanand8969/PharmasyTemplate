import React from 'react'

const FeatureCard = ({Heading,img,text}) => {
    return (
        <div className='w-[224px] h-[72px] '>
            <div className='flex gap-3'>
                <img src={`/images/${img}`} alt='truck' className='w-[44px] h-[44px] '/>
                <p className='text-[24px] font-semibold'>{Heading}</p>
                </div>
            <p className='text-[#7A7A7A] text-[16px] font-medium ml-[64px] '>{text}</p>
        </div>
    )
}

export default FeatureCard