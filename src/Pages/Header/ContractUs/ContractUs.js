import React from 'react';
import phoneIcon from '../../../Assests/phoneIcon.svg';
import './Contract.css';

const ContractUs = () => {
    return (
        <div className='flex justify-center gap-x-5 font-semibold py-2 contractBg'>
            <p className='flex'>
                <img src={phoneIcon} alt="Phone Icon" className='w-6' />
                <span>+88-01885-XXX-XXX</span>
            </p>
            <p>Contract Us</p>
        </div>
    );
};

export default ContractUs;