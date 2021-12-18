import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../image/banner-home (1).jpg'
import banner2 from '../../../../image/banner-home (2).jpg'
import banner3 from '../../../../image/banner-home (3).jpg'
import './HomeBanner.css'
const HomeBanner = () => {
    return (
        <div>
            <div className='home-banner'>
            
            <Carousel className='home-slider' variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100 banner-image"
                    src={banner1}
                    alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 banner-image"
                    src={banner2}
                    alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 banner-image"
                    src={banner3}
                    alt="Third slide"
                    />
                    
                </Carousel.Item>
            </Carousel>          
             
            </div>
        </div>
    );
};

export default HomeBanner;