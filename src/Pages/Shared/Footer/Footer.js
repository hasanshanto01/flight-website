import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import facebookImg from '../../../Assests/facebook.svg';
import twitterImg from '../../../Assests/twitter.svg';
import imoImg from '../../../Assests/imo.svg';
import whatsappImg from '../../../Assests/whatsapp.svg';
import instragramImg from '../../../Assests/instragram.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-secondary text-white">
            <div>
                <span className="text-lg font-semibold">BD Office Address</span>
                <div className='flex items-center'>
                    <PhoneIcon className="h-4 w-4 text-white mr-1" />
                    <p>+8801XXXXXXXX</p>
                </div>
                <div className='flex items-center'>
                    <PhoneIcon className="h-4 w-4 text-white mr-1" />
                    <p>+8801XXXXXXXX</p>
                </div>
                <div className='flex'>
                    <MapPinIcon className="h-4 w-4 text-whitemr-1" />
                    <p>Dhaka Tower, L XX, XX Topkhana Rd,<br />
                        Purana Paltan, Dhaka XX</p>
                </div>
            </div>
            <div>
                <span className="text-lg font-semibold">USA Office Address</span>
                <div className='flex items-center'>
                    <PhoneIcon className="h-4 w-4 text-white mr-1" />
                    <p>+1 470 XXXXXX(USA)</p>
                </div>
                <div className='flex items-center'>
                    <PhoneIcon className="h-4 w-4 text-white mr-1" />
                    <p>+1 470 XXXXXX(USA)</p>
                </div>
                <div className='flex'>
                    <MapPinIcon className="h-4 w-4 text-white mr-1" />
                    <p>USA Address: XXX Arbor Creek Ln, <br />
                        Doraville, GA XXXX</p>
                </div>
            </div>
            <div>
                <span className="text-lg font-semibold">Social Media</span>
                <div className='flex gap-x-2'>
                    <img src={facebookImg} alt="" />
                    <img src={twitterImg} alt="" />
                    <img src={imoImg} alt="" />
                    <img src={whatsappImg} alt="" />
                    <img src={instragramImg} alt="" />
                </div>
                <div className='flex items-center'>
                    <EnvelopeIcon className="h-4 w-4 text-white mr-1" />
                    <p>XYZ@gmail.com</p>
                </div>
                <div className='flex'>
                    <GlobeAltIcon className="h-4 w-4 text-white mr-1" />
                    <p>www.XYZ.com</p>
                </div>
            </div>
            <div>
                <span className="text-lg font-semibold">Help</span>
                <Link to='/' className="link link-hover">FAQ</Link>
                <Link to='/' className="link link-hover">Privacy policy</Link>
                <Link to='/' className="link link-hover">Terms & Condition</Link>
            </div>
        </footer>
    );
};

export default Footer;