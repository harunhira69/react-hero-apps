import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png'
import { Github } from 'lucide-react';

const Navbar = () => {
    return (
       <div className="navbar bg-base-100  shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><Link className=' font-bold hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent'>Home</Link></li>
       <li><Link className='font-bold hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent'>Apps</Link></li>
       <li><Link className='font-bold hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent'>Installation</Link></li>
      </ul>
    </div>
      <div className='flex items-center ml-5  gap-2'>
        <img className='h-10 w-10' src={logo }alt="" />
        <h3 className='font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Hero.IO</h3>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li><Link className=' font-bold hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent'>Home</Link></li>
       <li><Link className='font-bold hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent'>Apps</Link></li>
       <li><Link className='font-bold hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent'>Installation</Link></li>
    </ul>
  </div>
  <div className="navbar-end flex mr-5">
    <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-[4px] w-[145px] text-center p-1 "> <span className='flex items-center gap-2'><Github className='rounded-full' /> Contribute</span>  </button>
  </div>
</div>
    );
};

export default Navbar;




 