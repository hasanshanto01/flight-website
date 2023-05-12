import React from 'react';
import AgencyBanner from '../AgencyBanner/AgencyBanner';
import MissionAndVision from '../MissionAndVision/MissionAndVision';
import CustomerReview from '../CustomerReview/CustomerReview';

const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <AgencyBanner></AgencyBanner>
            <MissionAndVision></MissionAndVision>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;