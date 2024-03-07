import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-900 text-white '>
        <div>
            <p className='text-center py-5 my-0 bg-slate-900 shadow-xl font-semibold'>Elevate your shopping experience. Explore, click, and enjoy</p>
        </div>
        <div className='py-10  my-0 grid grid-rows md:grid-cols-4 lg:grid-cols-4 m-10 items-center md:items-start lg:items-start md:place-items-center  lg:place-items-center gap-6'>
            <div className='cursor-pointer'>
                <h3 className='font-bold  text-lg'>Get to Know Us</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Shophub Science</p>
            </div>
            <div className='cursor-pointer'>
                <h3 className='font-bold  text-lg'>Connect with Us</h3>
                <p>Facebook</p>
                <p>X</p>
                <p>Instagram</p>
            </div>
            <div className='cursor-pointer'>
                <h3 className='font-bold text-lg'>Make Money with Us</h3>
                <p>Sell on Shophub</p>
                <p>Sell under Shophub Accelerator</p>
                <p>Protect and Build Your Brand</p>
                <p>Become an Affilate</p>
                <p>Advertise Your Products</p>

            </div>
            <div className='cursor-pointer'>
            <h3 className='font-bold text-lg'>Let Us Help You</h3>
                <p>COVID-19 and Shophub</p>
                <p>Your Acoount</p>
                <p>Returns Centre</p>
                <p>100% Purchase Protection</p>
                <p>Help</p>
            </div>
            
        </div>
    </div>
  )
}

export default Footer