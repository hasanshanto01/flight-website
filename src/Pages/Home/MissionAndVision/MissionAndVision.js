import React from 'react';
import cardImg from '../../../Assests/card-board.png';

const MissionAndVision = () => {
    return (
        <div className='my-16'>
            <div className='text-center mb-10'>
                <h2 className='text-2xl font-bold mb-2'>Our Mission &  Vision</h2>
                <p>Serving our customer, searching their entire satisfaction and providing <br />
                    touristic services of quality, committing to the social, cultural and <br />
                    environmental reality of our country.</p>
            </div>
            <div className='flex justify-evenly'>
                <div className='w-[350px] h-[350px] relative'>
                    <p className='text-2xl font-medium absolute top-7 left-16'>Mission</p>
                    <img src={cardImg} alt="" />
                    <p className='absolute left-28 bottom-32'>Providing advanced<br />
                        travel solutions with<br />
                        great care and<br />
                        satisfaction.</p>
                </div>
                <div className='w-[350px] h-[350px] relative'>
                    <p className='text-2xl font-medium absolute top-7 left-16'>Vision </p>
                    <img src={cardImg} alt="" />
                    <p className='absolute left-28 bottom-32'><span className='text-primary'>Ghurtoni.com</span> is<br />
                        partnering with you<br />
                        to reach your dream<br />
                        destinations.</p>
                </div>
            </div>
        </div>
    );
};

export default MissionAndVision;