import React from 'react'

const AppoinmentPage = () => {
  return (
    <div className='w-[95%] h-[425px] mx-auto mt-[80px]'>
        <h3 className='font-medium text-[24px] text-[#0058FF] w-[160px] '>Appointment</h3>
        <div className='w-[81%] mt-[70px] h-[207px] bg-[#adc8ff8e] mx-auto rounded-[12px] flex justify-around items-center'>
           <div>
            <h3 className='font-normal text-[28px] text-black font-serif'>Date</h3>
            <input type='date' className='bg-[#ADC9FF] w-[533px] h-[81px] rounded-[12px] px-4 mt-2 '/>
           </div>
           <div>
            <h3 className='w-[64px] font-normal text-[28px] font-serif'>Hour</h3>
            <input type='time' className='bg-[#ADC9FF] w-[351px] h-[81px] rounded-[12px] px-4 mt-2'/>
           </div>
        </div>
        <div className='text-center mt-[43px]'>

        <button className='bg-[#1364FF] w-[382px] h-[73px] rounded-[5px] font-semibold text-[24px] text-white '>Make An Appoinment</button>
        </div>
    </div>
  )
}

export default AppoinmentPage