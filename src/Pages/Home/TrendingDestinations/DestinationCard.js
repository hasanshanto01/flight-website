import React from 'react';
import Btn from '../../../Components/Btn/Btn';

const DestinationCard = ({ item }) => {

    const btnStyle = {
        backgroundColor: '#4AB449',
        color: 'white',
        border: 'none'
    }

    const { img, title, days, cost } = item;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <div>
                    <div className='flex items-center gap-x-8'>
                        <h2 className="card-title">{title}</h2>
                        <p className='text-xl bg-info p-1 rounded'>{days} days</p>
                    </div>
                    <p><span>Starts From:</span> <span>{cost}</span>TK</p>
                </div>
                <div className="card-actions">
                    <Btn
                        btnStyle={btnStyle}
                    >View Details</Btn>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;