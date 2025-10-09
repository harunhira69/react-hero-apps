import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import icons from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'
import { Link } from 'react-router';
import LoadingSpinner from './LoadingSpinner';

const Allapps = () => {
    const {apps,loading,error} = useApps();
    const [search,setSearch] = useState('')
    const[loadings,setLoadings] = useState(false)
    const[filterData,setFilterData] = useState([])


useEffect(()=>{
  if(!apps.length) return;
  setLoadings(true)
  const timer = setTimeout(()=>{
 const term = search.trim().toLocaleLowerCase()
 const result = term?apps.filter(a=>
    a.title.toLocaleLowerCase().includes(term)):apps;
     setFilterData(result)
     setLoadings(false)
  },500)
  return()=>clearTimeout(timer)
 
},[search,apps])





  
   
 




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
            ({filterData.length}) Apps Found.
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
           <div className="mt-10 min-h-[300px] flex justify-center items-center">
        {loadings ? (
          <LoadingSpinner />
        ) : filterData.length === 0 && search ? (
          <h3 className='text-3xl  font-bold'>No Found Data</h3>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto w-full">
            {filterData.map((app) => (
              <Link key={app.id} to={`/apps/${app.id}`}>
                <div className="bg-white rounded-2xl shadow-2xl p-4 hover:shadow-lg transition">
                  <img
                    className="w-full h-48 object-cover rounded-xl"
                    src={app.image}
                    alt={app.title}
                  />
                  <h3 className="text-xl font-medium mt-4">{app.title}</h3>
                  <div className="flex justify-between mt-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2 text-green-600 font-semibold">
                      <img className="w-4 h-4" src={icons} alt="" />
                      {app.downloads}
                    </div>
                    <div className="flex items-center gap-2 text-yellow-500 font-semibold">
                      <img className="w-4 h-4" src={rating} alt="Rating" />
                      {app.ratingAvg}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      
          
            {/* loadings?<LoadingSpinner/>:filterData.length===0&& 
            search?<AppsNotFound/>: */}
</div>
    
    );
};

export default Allapps;