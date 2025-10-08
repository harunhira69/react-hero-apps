import React from 'react';

import AppsCard from './AppCart/AppsMap';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='bg-[#D2D2D2]'>
            <Banner></Banner>
          <AppsCard></AppsCard>
        </div>
    );
};

export default Home;