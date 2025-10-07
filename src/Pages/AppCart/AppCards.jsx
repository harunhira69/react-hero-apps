import React from 'react';
import icons from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'

const AppCards = ({app}) => {
  const {image,title,downloads,ratingAvg} = app
 
    return (
        <div className=' bg-white rounded-2xl shadow-2xl p-4'>
            <img className='w-full h-48 object-cover rounded-xl' src={image} alt="" />
            <h3 className='text-xl font-medium mt-4'>{title}</h3>
            <div className='flex justify-between mt-4'> 
                <span className='text-[#00D390] btn'><img className='w-4 h-4' src={icons} alt="" />{downloads}</span>
                <span className='text-[#00D390] btn' ><img className='w-4 h-4' src={rating} alt="" />{ratingAvg}</span>
            </div>
        </div>
    );
};

export default AppCards;