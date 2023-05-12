import React from 'react';
import hajjIcon from '../../../Assests/Hajj.svg';
import planeIcon from '../../../Assests/Plane.svg';
import hotelIcon from '../../../Assests/Hotel.svg';
import visaIcon from '../../../Assests/Visa.svg';
import tourIcon from '../../../Assests/Tour.svg';
import busIcon from '../../../Assests/Bus.svg';
import trainIcon from '../../../Assests/Train.svg';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='flex p-3 bg-base-100 border border-b-0 rounded-t-xl'>
            <div className='flex items-center justify-center gap-x-2 w-2/12'>
                <img src={hajjIcon} alt="Hajj Icon" className='w-7' />
                <p>Hajj & Umrah</p>
            </div>
            <ul className='grid grid-cols-6 w-10/12'>
                <li className='flex items-center justify-center gap-x-2'>
                    <img src={planeIcon} alt="Plane Icon" className='w-7' />
                    <Link to='/'>
                        Flight
                    </Link>
                </li>
                <li className='flex items-center justify-center gap-x-2'>
                    <img src={hotelIcon} alt="Hotel Icon" className='w-7' />
                    <Link to='/'>
                        Hotel
                    </Link>
                </li>
                <li className='flex items-center justify-center gap-x-2'>
                    <img src={visaIcon} alt="Visa Icon" className='w-7' />
                    <Link to='/'>
                        Visa
                    </Link>
                </li>
                <li className='flex items-center justify-center gap-x-2'>
                    <img src={tourIcon} alt="Tour Icon" className='w-7' />
                    <Link to='/'>
                        Tours
                    </Link>
                </li>
                <li className='flex items-center justify-center gap-x-2'>
                    <img src={busIcon} alt="Bus Icon" className='w-7' />
                    <Link to='/'>
                        Buses
                    </Link>
                </li>
                <li className='flex items-center justify-center gap-x-2'>
                    <img src={trainIcon} alt="Train Icon" className='w-7' />
                    <Link to='/'>
                        Trains
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;