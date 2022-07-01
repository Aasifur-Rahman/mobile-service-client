import React from 'react';
import './Banner.css';
import image from './bannerImg/kilian-seiler-PZLgTUAhxMM-unsplash.jpg';
import image2 from './bannerImg/pr-media-iuU2aZdzp_M-unsplash.jpg';
import image3 from './bannerImg/thisisengineering-raeng-IpTPp_aPbYE-unsplash.jpg';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" data-interval="4000" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='blur-img'><img src={image} className="d-block w-100 " alt="..." /></div>
                        <div className="carousel-caption ">
                            <h1 className='text-size'><span className='main-text'>We deliver you the best service</span> <br /> to replace your damaged device.</h1>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='blur-img'><img src={image2} className="d-block w-100" alt="..." /></div>
                        <div className="carousel-caption ">
                            <h1 className='style-color text-size'><span className='main-text'>Broken display or display issue?</span> <br /> Don't worry we've got you covered.</h1>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='blur-img'><img src={image3} className="d-block w-100" alt="..." /></div>
                        <div className="carousel-caption ">
                            <h1 className='text-size'><span className='main-text'>We satify our customer how we work on your device.</span><br /> Your device will remain spotless and will feel like new device.</h1>

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;