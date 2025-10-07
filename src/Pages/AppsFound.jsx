import React from 'react';
import apps from '../assets/logo.png'
import iconDownload from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'

const AppsFound = () => {
    return (
        <div className='bg-white flex items-center justify-between p-5 mb-3 rounded-md shadow-sm'>
         <div className='flex items-center gap-4'>
               <div className='flex items-center gap-4'>
             <img className='w-12 h-12 rounded-md ' src={apps} alt="" />
            </div>
            <div className='flex flex-col gap-2'>
             
                  <h3>Forest: Focus for Productivity</h3>
               <div className='flex items-center gap-4 text-sm'>
                 <span className='flex items-center gap-1'><img className='w-4 h-4' src={iconDownload} alt="" />9M</span>
                <span className='flex items-center gap-1'><img className='w-4 h-4' src={rating} alt="" />5</span>
                <span>258MB</span>
               </div>
             
             
            </div>
         </div>
         <button className='bg-[#00B1D3] w-[100px] h-[43px] text-center text-white
          rounded-[4px]'>Uninstall</button>
        </div>
    );
};

export default AppsFound;