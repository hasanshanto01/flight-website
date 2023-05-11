import React from 'react';
import ContractUs from '../ContractUs/ContractUs';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div>
            <ContractUs></ContractUs>
            <div className='relative'>
                <Navbar className=""></Navbar>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Header;