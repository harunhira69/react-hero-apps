import React from 'react';
import playstore from '../assets/playstore.png'
import appstore from '../assets/app.png'
import hero from '../assets/hero.png'

const Banner = () => {
    return (
        <div className='bg-[#D2D2D2] text-center '>
            <h3 className='text-[72px]'>We Build <br></br> <span className=' bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-[70px]'>Productive</span> Apps</h3>
            <p className='text-[#626482] '>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex gap-4 mt-8 justify-center'>
                <button className='btn btn-outline border-1 text-[#001931] font-bold'><img className='w-8 h-8' src={playstore} alt="" />Google Play</button>
                <button className='btn-outline btn border-1 text-[#001931] font-bold'><img className='w-8 h-8' src={appstore} alt="" />App Store</button>
            </div>
            <div className='mt-10' >
                <img className='mx-auto' src={hero} alt="" />

            </div>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
              <div className='p-10'>
                  <h3 className='text-5xl text-center  text-white font-bold '>Trusted by Millions, Built for You</h3>
              </div>
              <div className='flex justify-center items-center gap-12  '>
                  <div className='mb-10'>
                    <p className='text-white  '>Total Downloads</p>
                    <h3 className='font-extrabold text-white text-[64px]'>29.6M</h3>
                    <p className='text-white'>21% more than last month</p>

                </div>
                <div className='mb-10'>
                    <p className='text-white '>Total Reviews</p>
                    <h3 className='font-extrabold text-white text-[64px]'>906K</h3>
                    <p className='text-white'>46% more than last month</p>

                </div>
                <div className='mb-10'>
                    <p className='text-white '>Active Apps</p>
                    <h3 className='font-extrabold text-white text-[64px]'>132+</h3>
                    <p className='text-white'>31% more will Launch</p>

                </div>
              </div>


            </div>
        </div>
  
    );
};

export default Banner;