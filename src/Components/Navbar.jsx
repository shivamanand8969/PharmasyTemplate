import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#a1a3a7b0] w-full h-[164px] flex justify-around items-center'>
          <div className='font-bold text-[48px] text-[#0164AB]'>Pharmacy</div>
          <ul className='list-none flex gap-[116px] font-normal text-[25px] text-[#000000]'>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
    </div>
  )
}

export default Navbar