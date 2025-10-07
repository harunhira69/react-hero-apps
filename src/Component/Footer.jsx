import React from 'react';
import heroLogo from '../assets/logo.png'
import x from '../assets/x.png';
import fb from '../assets/fb.png'
import link from '../assets/link.png'

const Footer = () => {
    return (
       <footer className="bg-neutral text-neutral-content flex flex-col sm:flex-row justify-between items-center p-4">
<div className='flex items-center gap-3'>
    <img className='w-12 h-12 rounded-mb' src={heroLogo} alt="" />
    <p className='font-bold text-lg'>HERO.IO</p>
</div>


<div className='flex flex-col items-center  sm:items-end mt-4  '>
    <p className='font-semibold uppercase tracking-wide mb-2 '>Special Links</p>
    <div className='flex gap-4'>
        <img src={x} alt="" />
           <img src={fb} alt="" />
              <img src={link} alt="" />
    </div>
</div>
</footer>
    );
};

export default Footer;