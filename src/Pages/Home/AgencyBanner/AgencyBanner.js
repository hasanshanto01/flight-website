import React from 'react';
import agencyBanner from '../../../Assests/agency-banner.png';
import camera from '../../../Assests/cameraIcon.svg';


const AgencyBanner = () => {
    return (
        <div className='mt-60 mb-16 relative'>
            <img src={agencyBanner} alt="" />
            <div className='absolute left-40 bottom-16'>
                <img src={camera} alt="Camera Icon" />
            </div>
        </div>
    );
};

export default AgencyBanner;