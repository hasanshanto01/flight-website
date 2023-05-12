import React from 'react';
import AgencyBanner from '../AgencyBanner/AgencyBanner';
import MissionAndVision from '../MissionAndVision/MissionAndVision';
import CustomerReview from '../CustomerReview/CustomerReview';
import TrendingDestinations from '../TrendingDestinations/TrendingDestinations';
import DestinationCard from '../TrendingDestinations/DestinationCard';


const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <AgencyBanner></AgencyBanner>
            <TrendingDestinations></TrendingDestinations>
            <DestinationCard></DestinationCard>
            <MissionAndVision></MissionAndVision>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;