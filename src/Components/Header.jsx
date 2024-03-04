import React from 'react'
import Navbar from './Navbar'
import FeatureCard from './FeatureCard'

const Header = () => {
    return (
        <header>
            <div className='w-full h-[958px] backgroundimage'>
                <Navbar />
            </div>
            <div className='w-[81%] h-[72px] mx-auto my-[64px] flex justify-between'>
                <FeatureCard Heading={"Free Shipping"} img="truck.png" text="Order Over ₹600" />
                <FeatureCard Heading={"Quick Payment"} img="credit-card.png" text="100% Secure" />
                <FeatureCard Heading={"Big Cashback"} img="gift.png" text="Over 50% Cashback" />
                <FeatureCard Heading={"24/7 Support"} img="users.png" text="Ready for You" />

            </div>
            <div className='w-[87%] h-[329px] mx-auto'>
              <div className='flex gap-[80px] items-center'>
              <img src='/images/image 5.png' className='w-[312px] h-[312px] rounded-[112.5px]' />
                <div className=''>
                  <p className='h-[167px] text-[32px] font-normal'>
                  “It is a long established fact that a reader will be tracked distracted by the readable 
                    content of a page is when looking at its layout. The point of using Lorem of distribution
                     it look like readable English “
                  </p>
                  

                  <div className='flex ml-[250px] mt-[33px] items-center gap-[21px]'>
                    <a href='https://wa.me/8969171781'><img src='/images/WhatsApp.png' className='w-[60px] h-[60px]'/></a>
                    <a href='https://instagram.com'><img src='/images/instagram.png' className='w-[60px] h-[80px]'/></a>
                    <a href='https://facebook.com'><img src='/images/Facebook.png' className='w-[60px] h-[80px]' /></a>
                    <a href='https://goolge.com'><img src='/images/Location Update.png' className='w-[60px] h-[80px]'/></a>
                   <a href='' className='w-[190px] h-[70px] rounded-[25px] bg-[#ADC9FF] flex justify-center items-center text-[32px] shadow-xl font-normal font-serif ml-[50px]'>Let’s Talk</a>
                  </div>
                </div>
              </div>
            </div>
            <hr className='w-full h-[1px] border-0 bg-[#A1A3A7] mt-[50px]'/>
        </header>
    )
}

export default Header