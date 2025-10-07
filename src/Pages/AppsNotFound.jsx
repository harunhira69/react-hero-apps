import React from 'react';
import appError from '../assets/App-Error.png' 

const AppsNotFound = () => {
    return (
           <div className='bg-[#D2D2D2]'>
                   <div className='text-center'>
                       <img className='mx-auto' src={appError} alt="" />
                       <h3 className='text-[#001931] font-semibold text-5xl mt-4'>OOPS, APP NOT FOUND!</h3>
                       <p className='text-[#626482] text-2xl mt-2'>The App you are requisting is not found on our system. please try another apps</p>
                       <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center text-white rounded-[4px] w-[150px] h-[48px] mt-4 mb-10'>Go Back</button>
                   </div>
                   
               </div>
    );
};

export default AppsNotFound;