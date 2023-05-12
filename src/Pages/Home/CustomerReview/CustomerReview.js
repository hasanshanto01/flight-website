import React from 'react';
import quoteImg from '../../../Assests/quote .png';

const CustomerReview = () => {

    const reviewBannerStyle = {
        backgroundColor: '#E5F8FF'
    };

    return (
        <div className='my-16'>
            <div className='text-center mb-10'>
                <h2 className='text-2xl font-bold mb-2'>Customer satisfaction is our top priority</h2>
                <p>Our clients praise us for our great results, personable service,<br />
                    expert knowledge. Here are what just a few of them had to say</p>
            </div>

            <div className='relative'>

                <img src={quoteImg} alt="Quote" className='absolute bottom-[105px]' />

                <div className="carousel w-full h-[228px]" style={reviewBannerStyle}>

                    <div id='slide1' className="carousel-item relative w-full">

                        <p className='w-full flex items-center justify-center text-center'>1.Your thoughtfulness and support of Ghuronti is very much appreciated.<br />
                            You are a very dear friend to the Chamber, and I want to assure you that<br />
                            your confidence in Ghuronti will be justified.</p>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle btn-outline btn-info">❮</a>
                            <a href="#slide2" className="btn btn-circle btn-outline btn-info">❯</a>
                        </div>
                    </div>
                    <div id='slide2' className="carousel-item relative w-full">

                        <p className='w-full flex items-center justify-center text-center'>2.Your thoughtfulness and support of Ghuronti is very much appreciated.<br />
                            You are a very dear friend to the Chamber, and I want to assure you that<br />
                            your confidence in Ghuronti will be justified.</p>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle btn-outline btn-info">❮</a>
                            <a href="#slide3" className="btn btn-circle btn-outline btn-info">❯</a>
                        </div>
                    </div>
                    <div id='slide3' className="carousel-item relative w-full">

                        <p className='w-full flex items-center justify-center text-center'>3.Your thoughtfulness and support of Ghuronti is very much appreciated.<br />
                            You are a very dear friend to the Chamber, and I want to assure you that<br />
                            your confidence in Ghuronti will be justified.</p>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle btn-outline btn-info">❮</a>
                            <a href="#slide1" className="btn btn-circle btn-outline btn-info">❯</a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default CustomerReview;