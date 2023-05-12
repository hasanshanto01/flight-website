import React from 'react';
import Img from '../../../Assests/card-board.png';

const TrendingDestinations = () => {
    return (
        <div className="carousel carousel-end rounded-box">
            <div className="carousel-item">
                <img src={Img} alt="Drink" />
            </div>
            <div className="carousel-item">
                <img src={Img} alt="Drink" />
            </div>
            <div className="carousel-item">
                <img src={Img} alt="Drink" />
            </div>
            <div className="carousel-item">
                <img src={Img} alt="Drink" />
            </div>
            <div className="carousel-item">
                <img src={Img} alt="Drink" />
            </div>
            <div className="carousel-item">
                <img src={Img} alt="Drink" />
            </div>
            <div className="carousel-item">
                <img src={Img} alt="Drink" />
            </div>
        </div>
    );
};

export default TrendingDestinations;