import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router';
import Banner from '../Pages/Banner';
import ErrorHandling from '../Pages/ErrorHandling';
import AppsFound from '../Pages/AppsFound';
import AppsNotFound from '../Pages/AppsNotFound';
import AppsCard from '../Pages/AppCart/AppsMap';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
           <AppsCard></AppsCard>
          
            <div className='flex-1 max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12'>
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;