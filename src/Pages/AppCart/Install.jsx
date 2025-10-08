import React, { useState } from 'react';
import { loadApplist, removeFromApplist } from '../../utils/localStorage';
import iconDownloads from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import AppsNotFound from '../AppsNotFound';


const Install = () => {
    const appList = loadApplist();
    const [sortOrder,setSortOrder] = useState('none')
    const handleUninstall = (id)=>{
        removeFromApplist(id)
        window.location.reload();
     
    }
    const getSortedList =()=>{
      const sorted = [...appList]
      if(sortOrder==='low-high'){
        sorted.sort((a,b)=>a.size-b.size)
      }
      else if(sortOrder==='high-low'){
        sorted.sort((a,b)=>b.size-a.size)
      }
      return sorted;
    
    }
      const sortedList = getSortedList()
    return (
          <div className='bg-[#D2D2D2]'>
                 <div className='text-center mt-10'>
                <h3 className='font-bold text-5xl'>Your Installed Apps</h3>
                <p className='text-2xl mt-2'>Explore All Trending Apps on the Market developed by us</p>
              </div>
               <div className='flex justify-between py-5 items-center'>
               <h1 className='text-3xl font-semibold'>
                 Apps{' '}
                 <span className='text-sm text-gray-500'>
                    {sortedList.length} Products Found.
                 </span>
               </h1>
       
               <label className='form-control w-full max-w-xs'>
                 <select
                   className='select select-bordered'
                   value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
                 
                 >
                   <option value='none'>Sort by Size</option>
                   <option value='low-high'>Low-&gt;High</option>
                   <option value='high-low'>High-&gt;Low</option>
                 </select>
               </label>
             </div>
                {
                    sortedList.length===0?<AppsNotFound/>:sortedList.map(a=>
                         <div className='bg-white flex items-center justify-between p-5 mb-3 rounded-md shadow-sm'>
                 
                <div className='flex items-center gap-4'>
                      <div className='flex items-center gap-4'>
                    <img className='w-12 h-12 rounded-md ' src={a.image} alt="" />
                   </div>
                   <div className='flex flex-col gap-2'>
                    
                         <h3>{a.title}</h3>
                      <div className='flex items-center gap-4 text-sm'>
                        <span className='flex items-center gap-1'>
                         <img className='w-4 h-4' src={iconDownloads} alt="" />{a.downloads}</span>
                       <span className='flex items-center gap-1'>
                         <img className='w-4 h-4' src={rating} alt="" />{a.ratingAvg}</span>
                       <span>{a.size}MB</span>
                      </div>
                    
                    
                   </div>
                </div>
                <button onClick={()=>(handleUninstall(a.id))} className='bg-[#00B1D3] w-[100px] h-[43px] text-center text-white
                 rounded-[4px]'>Uninstall</button>
               </div>
                    )
                    
                }
             </div>
    );
};

export default Install;