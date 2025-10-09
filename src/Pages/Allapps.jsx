import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import icons from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'
import { Link } from 'react-router';
import AppsNotFound from './AppsNotFound';
import LoadingSpinner from './LoadingSpinner';

const Allapps = () => {
    const {apps,loading,error} = useApps();
    const [search,setSearch] = useState('')
   const term = search.trim().toLocaleLowerCase()
   const searchApps = term?apps.filter(a=>
    a.title.toLocaleLowerCase().includes(term)):apps
 




    if(loading)return <LoadingSpinner></LoadingSpinner>
    if(error) return<p>Error....</p>
    return (
        <div className='bg-[#D2D2D2] px-4 sm:px-6 lg:px-8 sm:p-5'>
              <div className='text-center mt-16'>
         <h3 className='font-bold text-3xl sm:text-4xl lg:text-5xl md:text-5xl'>Our All Application</h3>
         <p className='lg:text-2xl md:text-xl text-base sm:text-lg  mt-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
       </div>
      <div className='flex flex-col sm:flex-row justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>
          All Products{' '}
          <span className='text-sm text-gray-500'>
            ({searchApps.length}) Products Found.
          </span>
        </h1>
        <label className='input'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            placeholder='Search Apps'
          />
        </label>
      </div>

       
        {
          term&& !searchApps[0]?<AppsNotFound/>:      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10  mx-auto'>
        {searchApps.map(app=>(
           <Link key={app.id} to={`/apps/${app.id}`}>
               <div className=' bg-white rounded-2xl shadow-2xl p-4'>
                          <img className='w-full h-48 object-cover rounded-xl' src={app.image} alt="" />
                          <h3 className='text-xl font-medium mt-4'>{app.title}</h3>
                          <div className='flex justify-between mt-4'> 
                              <span className='text-[#00D390] btn'>
                                <img className='w-4 h-4' src={icons} alt="" />{app.downloads}</span>
                              <span className='text-[#00D390] btn' >
                                <img className='w-4 h-4' src={rating} alt="" />{app.ratingAvg}</span>
                          </div>
                      </div>
           </Link>

        ))}
            
        </div>
        }
       

        </div>
    );
};

export default Allapps;