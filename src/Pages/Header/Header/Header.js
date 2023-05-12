import React from 'react';
import ContractUs from '../ContractUs/ContractUs';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';

const Header = () => {
    return (
        <div>
            <ContractUs></ContractUs>
            <div className='relative'>
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            <Packages></Packages>
        </div>
    );
};

export default Header;