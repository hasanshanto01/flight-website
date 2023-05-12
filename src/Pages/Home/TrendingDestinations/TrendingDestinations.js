import React from 'react';
import DestinationCard from './DestinationCard';
import dubaiImg from '../../../Assests/dubai.png';
import chinnamonImg from '../../../Assests/chinnamon.png';
import egyptImg from '../../../Assests/egypt.png';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';


const TrendingDestinations = () => {

    const cardItems = [
        {
            id: 1,
            img: dubaiImg,
            title: 'Dubai: The city of life',
            days: 4,
            cost: '27, 500'
        },
        {
            id: 2,
            img: chinnamonImg,
            title: 'Dubai: The city of life',
            days: 4,
            cost: '69,300'
        },
        {
            id: 3,
            img: egyptImg,
            title: 'Dubai: The city of life',
            days: 4,
            cost: '35,200'
        },
        {
            id: 4,
            img: dubaiImg,
            title: 'Dubai: The city of life',
            days: 4,
            cost: '27, 500'
        },
        {
            id: 5,
            img: chinnamonImg,
            title: 'Dubai: The city of life',
            days: 4,
            cost: '69,300'
        },
        {
            id: 6,
            img: egyptImg,
            title: 'Dubai: The city of life',
            days: 4,
            cost: '35,200'
        }
    ];

    const scrollRight = () => {
        document.getElementById('carouselContent').scrollLeft += 800
    };

    const scrollLeft = () => {
        document.getElementById('carouselContent').scrollRight -= 800
    }

    return (
        <div>
            <div className='text-center mb-10'>
                <h2 className='text-2xl font-bold mb-2'>Trending International Destinations</h2>
                <p>The world is now just a hop, skip and jump away and here’s how<br />
                    you can make your travel easier and better. </p>
            </div>

            <div className='flex justify-end gap-x-2  mr-4 mb-3'>
                <button onClick={scrollRight}>
                    <ArrowRightIcon className='w-6 h-6 text-black' />
                </button>
                <button onClick={scrollLeft}>
                    <ArrowLeftIcon className='w-6 h-6 text-black' />
                </button>
            </div>


            <div id='carouselContent' className='carousel p-4 m-5 flex items-center justify-center overflow-x-auto relative'>

                {
                    cardItems.map((item, index) => <DestinationCard
                        key={index}
                        item={item}
                    ></DestinationCard>)
                }

            </div>

        </div>
    );
};

export default TrendingDestinations;