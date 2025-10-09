import React from 'react';
import playstore from '../assets/playstore.png'
import appstore from '../assets/app.png'
import hero from '../assets/hero.png'

const Banner = () => {
    return (
        <div className=' text-center px-4 sm:px-6  lg:px-8 w-full overflow-x-hidden'>
            <h3 className='lg:text-[72px] mt-14 sm:text-5xl text-4xl '>We Build <br></br> 
            <span className=' bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
            bg-clip-text text-transparent sm:mt-4 lg:text-[72px] 
            sm:text-3xl text-4xl'>Productive</span> Apps</h3>
            <p className='text-[#626482]  '>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className=' gap-4 mt-8 justify-center flex flex-col sm:flex-row'>
                   <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
        >
                <button className='btn btn-outline border-1 
                 text-[#001931] font-bold flex items-center justify-center gap-2 w-full sm:w-48 py-2'>
                    <img className='w-8 h-8' src={playstore} alt="" />Google Play</button></a>
                      <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        > 
                <button className='btn btn-outline border-1 
                 text-[#001931] font-bold flex items-center justify-center gap-2 w-full sm:w-48 py-2'>
                    <img className='w-8 h-8' src={appstore} alt="" />App Store</button></a>
            </div>
            <div className='mt-10' >
                <img className='mx-auto' src={hero} alt="" />

            </div>
            <div className='bg-gradient-to-r w-full from-[#632EE3] to-[#9F62F2]'>
              <div className='sm:p-10 p-8 '>
                  <h3 className='lg:text-5xl sm:text-4xl text-2xl  text-center 
                   text-white font-bold '>Trusted by Millions, Built for You</h3>
              </div>
              <div className='flex flex-col sm:flex-row gap-8 sm:gap-12 pb-10 justify-center 
              items-center  '>
                  <div className='mb-10'>
                    <p className='text-white  '>Total Downloads</p>
                    <h3 className='font-extrabold text-4xl sm:text-5xl  text-white lg:text-[64px]'>29.6M</h3>
                    <p className='text-white'>21% more than last month</p>

                </div>
                <div className='mb-10'>
                    <p className='text-white '>Total Reviews</p>
                    <h3 className='font-extrabold text-4xl sm:text-5xl  text-white lg:text-[64px]'>906K</h3>
                    <p className='text-white'>46% more than last month</p>

                </div>
                <div className='mb-10'>
                    <p className='text-white '>Active Apps</p>
                    <h3 className='font-extrabold text-4xl sm:text-5xl  text-white lg:text-[64px]'>132+</h3>
                    <p className='text-white'>31% more will Launch</p>

                </div>
              </div>


            </div>
        </div>
  
    );
};

export default Banner;