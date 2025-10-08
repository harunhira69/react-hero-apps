import React from 'react';
import icons from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import { Link } from 'react-router';


const AppCards = ({app}) => {
  const {id,image,title,downloads,ratingAvg} = app
 
    return (
       <Link to={`/apps/${id}`}>

        <div>
             <div className=' bg-white rounded-2xl shadow-2xl p-4'>
            <img className='w-full h-48 object-cover rounded-xl' src={image} alt="" />
            <h3 className='text-xl font-medium mt-4'>{title}</h3>
            <div className='flex justify-between mt-4'> 
                <span className='text-[#00D390] btn'><img className='w-4 h-4' src={icons} alt="" />{downloads}</span>
                <span className='text-[#00D390] btn' ><img className='w-4 h-4' src={rating} alt="" />{ratingAvg}</span>
            </div>
        </div>
        </div>
       </Link>
    );
};

export default AppCards;