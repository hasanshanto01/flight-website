import React, { useState } from 'react';
import Btn from '../../Components/Btn/Btn';
import DatePicker from "react-datepicker";
import format from 'date-fns/format';
import whatsAppLogo from '../../Assests/whatsapp-logo.png';

import "react-datepicker/dist/react-datepicker.css";

const SearchFlight = () => {

    const btnStyle = {
        backgroundColor: '#19ABE3',
        color: 'white',
        border: 'none'
    };

    const textStyle = {
        color: '#738187'
    };

    const [departDate, setDepartDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());

    return (
        <div className='mt-10 relative'>
            <ul className='grid grid-cols-3 justify-items-center border border-primary rounded bg-base-100  w-2/5 mx-auto p-2'>
                <li>One Way</li>
                <li>Round Trip</li>
                <li>Multi City</li>
            </ul>

            <div className='w-4/5 mx-auto my-10 grid grid-cols-2 gap-x-8 gap-y-5'>
                <div className='w-[418px] h-[65px] border border-primary bg-base-100 rounded-md drop-shadow-md'>
                    <p className='font-medium ml-3'>Flying From</p>
                    <input type="text" className='w-full px-3 py-[5px] mt-1 focus:outline-0' placeholder='City or Airport' />
                </div>
                <div className='w-[418px] h-[65px] border border-primary bg-base-100 rounded-md drop-shadow-md'>
                    <p className='font-medium ml-3'>Flying To</p>
                    <input type="text" className='w-full px-3 py-[5px] mt-1 focus:outline-0' placeholder='City or Airport' />
                </div>
                <div className='flex w-[418px] h-[65px] border border-primary bg-base-100 rounded-md drop-shadow-md'>
                    <div className='border-r-2 border-primary w-1/2 p-1'>
                        <div className='flex justify-between font-medium'>
                            <p>DepartTo</p>
                            <p>{format(departDate, "E")}</p>
                        </div>
                        <DatePicker
                            selected={departDate}
                            onChange={(date) => setDepartDate(date)}
                            dateFormat="MMMM d, yyyy"
                            className='w-full py-[5px] focus:outline-0' style={textStyle} />
                    </div>

                    <div className='w-1/2 p-1'>
                        <div className='flex justify-between font-medium'>
                            <p>ReturnTo</p>
                            <p>{format(returnDate, "E")}</p>
                        </div>
                        <DatePicker
                            selected={returnDate}
                            onChange={(date) => setReturnDate(date)}
                            dateFormat="MMMM d, yyyy"
                            className='w-full py-[5px] focus:outline-0' style={textStyle} />
                    </div>
                </div>
                <div className='flex w-[418px] h-[65px] border border-primary bg-base-100 rounded-md drop-shadow-md'>
                    <div className='w-3/5'>
                        <p className='font-medium ml-3'>Passengers & Cabin Class</p>
                        <input type="text" className='w-full px-3 py-[5px] mt-1 focus:outline-0' placeholder='1 Person' />
                    </div>
                    <div className='w-2/5'>
                        <select className='w-full font-medium focus:outline-0'>
                            <option>First Class</option>
                            <option>Business Class</option>
                            <option selected>Economy Class</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='text-center'>
                <Btn
                    btnStyle={btnStyle}
                >Search Flights</Btn>
            </div>

            <div className="avatar absolute right-12 bottom-2">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 p-1">
                    <img src={whatsAppLogo} alt='' />
                </div>
            </div>

        </div>
    );
};

export default SearchFlight;