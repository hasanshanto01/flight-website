import React from 'react';
import './Navbar.css';
import softypyLogo from '../../../Assests/softypy-logo.png';
import searchIcon from '../../../Assests/searchIcon.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItem = <>
        <li><Link to='/about'>About Us</Link></li>
    </>

    return (
        <div className="navbar navbarBg px-20 absolute">
            <div className="navbar-start w-1/5">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        {menuItem}
                    </ul>
                </div>
                <div>
                    <img src={softypyLogo} alt="Logo" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex w-1/5">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end w-3/5">
                <div className='flex items-center'>
                    <div className="form-control flex-row border border-primary rounded-md">
                        <input type="text" placeholder="Search Flight, Hotel, Visa" className='w-60 p-2' />
                        <span className='p-2'>
                            <img src={searchIcon} alt="Search Icon" className='w-5' />
                        </span>
                    </div>
                </div>
                <div className='ml-8'>
                    <button className='btn btn-primary mr-3'>Log In</button>
                    <button className='btn btn-secondary'>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;