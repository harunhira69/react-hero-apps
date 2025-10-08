import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import { useNavigate, useParams } from 'react-router';
import downloadimg from '../assets/icon-downloads.png'
import ratingsimg from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'

 

import { loadApplist, updateList } from '../utils/localStorage';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { toast } from 'react-toastify';



const CardDetails = () => {
    const {id} = useParams()
    const {apps,loading,error}= useApps()

    const[isInstall,setIsInstall] = useState(false)

    useEffect(()=>{
     
      if(apps.length > 0){
         const app = apps.find(a=>a.id===Number(id));
        if(app){
           const installList = loadApplist()||[];
        const found = installList.some(a=>a.id===Number(id))
        setIsInstall(found)
        }
        
      
      }
    },[apps,id])
      

 
    // const navigate = useNavigate()
    if(loading) return<p>Loading...</p>
    if(error) return <p>Error....</p>

 const app = apps.find(a=>a.id===Number(id))
 if(!app)return <p>App Not Found</p>
const {image,title,downloads,companyName,reviews,size,ratings,description, ratingAvg} = app

 

       


   
    const handleInstall = ()=>{
      if(!isInstall) {
        setIsInstall(true)
        updateList(app)
        toast.success("APP Installed Succefully")
      }
     

    }
       const chartData = ratings.map(r => ({
        name: r.name,
        pv: r.count,
    }));
  
    
    return (
        <div className='mt-5 bg-[#D2D2D2]'>
             <div className='flex gap-5 items-center '>
           <img className='w-40 h-45' src={image} alt="" />
           <div className=''>
            <h3 className='text-3xl font-bold'>{title}</h3>
            <p>Developed by:{companyName}</p>
        
            {/* icon part */}
       <div className='flex gap-10 items-center mt-2'>


        <div className=''>
        <img className='w-4 h-4' src={downloadimg} alt="" />
        <p className='text-sm'>Downloading</p>
        <h3 className='font-bold'>{downloads}</h3>

      </div> 
   <div className=''>
        <img className='w-4 h-4' src={ratingsimg} alt="" />
        <p className='text-sm'>Ratings</p>
        <h3 className='font-bold'>{ratingAvg}</h3>

      </div> 
        <div className=''>
        <img className='w-4 h-4' src={review} alt="" />
        <p className='text-sm'>Review</p>
        <h3 className='font-bold'>{reviews}</h3>

      </div> 
      




       </div>
       <button
            onClick={handleInstall}
            
            className={`w-[239px] h-[40px] rounded-[4px] mt-1 text-white transition-colors duration-300 
        bg-[#00D390] hover:bg-[#00b37a]`}
          >
            {isInstall ? 'Installed' : `Install Now (${size} MB)`}
          </button>
      
            
             </div>
           </div>
           {/* chart */}
            <div className='mt-5'>
            <h3
             className='text-2xl font-bold'>Ratings</h3>
            <div className=' rounded-xl h-80'>
        <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
  <XAxis type="number" />
  <YAxis dataKey="name" type="category" reversed />
  <Tooltip />
  <Bar dataKey="pv" barSize={20} fill="#413ea0" name="Number of Ratings" />
</ComposedChart>
      </ResponsiveContainer>
            </div> 
 
           </div> 



           <div>
            <h3 className='text-2xl font-bold'>Description</h3>
            <p className='mt-2'>{description}</p>
           </div>
        </div>
     
           
 
     
      

    );
};

export default CardDetails;
 