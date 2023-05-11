import React from 'react';
import AgencyBanner from '../AgencyBanner/AgencyBanner';
import MissionAndVision from '../MissionAndVision/MissionAndVision';

const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <AgencyBanner></AgencyBanner>
            <MissionAndVision></MissionAndVision>
        </div>
    );
};

export default Home;