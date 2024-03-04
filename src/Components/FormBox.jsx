import React, { useState } from 'react'

const FormBox = () => {
      const [name,setName]=useState('');
      const [email,setEmail]=useState('');
      const [message,setMessage]=useState('');
      const [phone,setPhone]=useState('');
       let handleSubmit=(e)=>{
        e.preventDefault();
        alert(name,email,message,phone);
        //call your api heere

       }
       let handleClear=(e)=>{
           e.preventDefault();
           setName("")
           setEmail("");
           setMessage("");
           setPhone("")
       }
    return (
        <div className='w-[1284px] h-[699px] mx-auto mt-[60px] '>
            <header className='h-[153px] bg-[#ADC9FF] rounded-tl-[22px] rounded-tr-[22px] flex justify-center items-center'>
                <p className='font-normal font-serif w-[234px] text-[32px] text-center  text-[#888888]'>GET IN TOUCH
                    with US</p>
            </header>
            <div className='flex '>
                <div className='w-[420px] rounded-bl-[22px] h-[540px] mt-[3px] bg-[#ADC9FF] flex flex-col justify-center items-center'>
                    <div className='flex flex-col items-center'>
                        <div className='w-[70px] h-[70px] rounded-full border-[1px] border-white flex justify-center items-center'>
                            <img src='images/Location.png' className='w-[50px] h-[50px]' />
                        </div>
                        <p className='font-normal text-[20px] text-center w-[320px] text-white mt-[22px]'>Pharmacy Store, nr joyal bakers,
                            Ahmedabad 382330</p>
                    </div>
                    <div className='mt-[35px] flex flex-col items-center'>
                        <div className='w-[70px] h-[70px] rounded-full border-[1px] border-white flex justify-center items-center'>
                            <img src='images/Phone.png' className='w-[50px] h-[50px]' />
                        </div>
                        <p className='font-normal text-[20px] text-center w-[320px] text-white mt-[22px]'>1-800-123-9999</p>
                    </div>
                    <div className='mt-[35px] flex flex-col items-center'>
                        <div className='w-[70px] h-[70px] rounded-full border-[1px] border-white flex justify-center items-center'>
                            <img src='images/Mail.png' className='w-[50px] h-[50px]' />
                        </div>
                        <p className='font-normal text-[20px] text-center w-[320px] text-white mt-[22px]'>pharmacystore@gmail.com</p>
                    </div>
                </div>
                <div className='bg-[#adc8ff96] w-full h-[543px] rounded-br-[22px]'>
                    <form className='ml-[16px]'>
                        <div className='flex h-[85px] items-center'>
                            <label htmlFor='name' className='font-normal text-[20px] text-[#00000098] w-[52px]'>Name</label>
                            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} id='name' className='outline-none border-0 bg-[#adc8ff04] shadow-none font-bold text-[30px] ml-5' />
                        </div>
                        <hr className='w-[787px] h-[3px] bg-[#D9D9D9] ' />
                        <div className='flex h-[85px] items-center mt-[20px]'>
                            <label htmlFor='email' className='font-normal text-[20px] text-[#00000098] w-[72px]'>E-mail</label>
                            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} id="email" className='outline-none border-0 bg-[#adc8ff04] shadow-none font-bold text-[30px] ml-5' />
                        </div>
                        <hr className='w-[787px] h-[3px] bg-[#D9D9D9] ' />
                        <div className='flex h-[85px] items-center mt-[20px]'>
                            <label htmlFor='phone' className='font-normal text-[20px] text-[#00000098] w-[52px]'>Phone</label>
                            <input id='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} type='text' className='outline-none border-0 bg-[#adc8ff04] shadow-none font-bold text-[30px] ml-5' />
                        </div>
                        <hr className='w-[787px] h-[3px] bg-[#D9D9D9] ' />
                        <div className='flex h-[85px] items-center mt-[20px]'>
                            <label htmlFor='message' className='font-normal text-[20px] text-[#00000098] w-[62px]'>Message</label>
                            <input type='text' value={message} onChange={(e)=>setMessage(e.target.value)} id='message' className='outline-none border-0 bg-[#adc8ff04] shadow-none font-bold text-[30px] ml-5' />
                        </div>
                        <hr className='w-[787px] h-[3px] bg-[#D9D9D9] ' />

                        <div className='mt-[42px] flex justify-between w-[787px]'>

                            <button type='submit' onClick={handleSubmit} className='font-normal text-[20px] text-white w-[168px] h-[58px] rounded-[6px] bg-[#1364FF] hover:bg-[#1366ffde] flex justify-center items-center'>Submit</button>
                            <button onClick={handleClear} className='text-[#888888] font-normal text-[20px] '>Clear form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormBox