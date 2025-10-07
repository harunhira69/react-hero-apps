import React from 'react';
import error from '../assets/error-404.png'

const ErrorHandling = () => {
    return (
        <div className='bg-[#D2D2D2]'>
            <div className='text-center'>
                <img className='mx-auto' src={error} alt="" />
                <h3 className='text-[#001931] font-semibold text-5xl mt-4'>Oops, page not found!</h3>
                <p className='text-[#626482] text-2xl mt-2'>The page you are looking for is not available.</p>
                <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center text-white rounded-[4px] w-[150px] h-[48px] mt-4 mb-10'>Go Back</button>
            </div>
            
        </div>
    );
};

export default ErrorHandling;