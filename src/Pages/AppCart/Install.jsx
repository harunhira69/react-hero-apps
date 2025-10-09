import React, { useState } from 'react';
import { loadApplist, removeFromApplist } from '../../utils/localStorage';
import iconDownloads from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import AppsNotFound from '../AppsNotFound';
import { toast } from 'react-toastify';


const Install = () => {
   const [appList,setAppList] = useState(loadApplist())
    const [sortOrder,setSortOrder] = useState('none')




    // uninstall
    const handleUninstall = (id)=>{
        removeFromApplist(id)
          toast("Uninstall Successfully")
        // window.location.reload();
        setAppList(prev=>prev.filter(app=>app.id!==id))
      
     
    }
   
    const getSortedList =()=>{
      const sorted = [...appList]
      const parseDownloads = (value)=>{
        if(typeof value ==="string"){
          value=value.toUpperCase().trim();
          if(value.endsWith("M")) return parseFloat(value)* 1000000;
          return parseFloat(value)
        }
        return value;
      }
      if(sortOrder==='low-high'){
        sorted.sort((a,b)=>parseDownloads(a.downloads)-parseDownloads(b.downloads))
      }
      else if(sortOrder==='high-low'){
        sorted.sort((a,b)=>parseDownloads(b.downloads)-parseDownloads(a.downloads))
      }
      return sorted;
    
    }
      const sortedList = getSortedList()
    return (
          <div className='bg-[#D2D2D2] min-h-screen'>
                 <div className='text-center mt-15  py-10'>
                <h3 className='font-bold text-5xl'>Your Installed Apps</h3>
                <p className='text-2xl mt-2'>Explore All Trending Apps on the Market developed by us</p>
              </div>
               <div className='flex justify-between py-5 px-5 items-center'>
               <h1 className='text-3xl font-semibold'>
                 Apps{' '}
                 <span className='text-sm text-gray-500'>
                    {sortedList.length} Apps Found.
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
                         <div className='bg-white  flex items-center justify-between  m-5 p-5  rounded-md shadow-sm'>
                 
                <div className='flex items-center mb-3 gap-4'>
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