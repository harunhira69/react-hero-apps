import React from 'react';
import useApps from '../../Hooks/useApps';
import AppCards from './AppCards';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import LoadingSpinner from '../LoadingSpinner';

const AppsCard = () => {
  const { apps, loading, error } = useApps()
 
  const navigate = useNavigate()
  const trendingApps = apps.slice(0,8)


  
  if(loading) return <LoadingSpinner></LoadingSpinner>
  if(error) return <p>error page...</p>

     return (
    <div className=''>
       <div className='text-center mt-10'>
         <h3 className='font-bold text-5xl'>Trending Apps</h3>
         <p className='text-2xl mt-2'>Explore All Trending Apps on the Market developed by us</p>
       </div>
       {/* map-section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 px-5  mx-auto'>
        {trendingApps.map(app=>(
            <AppCards onClick={()=>toast.success("Congratulations! Now we can see the card details.")} key={app.id} app={app}></AppCards>
        ))}
            
        </div>
        {/* button section */}
  <div className='text-center'>
     <button onClick={()=>navigate('/apps')} className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center text-white rounded-[4px] w-[150px] h-[48px] mt-4 mb-10'>
      Show All
      </button>
  </div>
    </div>
    );
};

export default AppsCard;