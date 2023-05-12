import React from 'react';
import Menu from './Menu';
import SearchFlight from '../../SerachFlight/SearchFlight';

const Packages = () => {

    const packageBg = {
        backgroundColor: '#E5F8FF'
    }

    return (
        <div className='w-4/5 mx-auto -mt-80'>
            <h2 className='text-2xl font-bold text-center mb-3 z-10' >Welcome to Ghuronti! Find Flights, Hotels & Tour Packages</h2>

            <div className='w-full h-[459px] border rounded-2xl drop-shadow-md' style={packageBg}>

                <Menu></Menu>
                <SearchFlight></SearchFlight>
            </div>

        </div>
    );
};

export default Packages;