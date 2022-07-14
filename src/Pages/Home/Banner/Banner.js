import React from 'react';
import './Banner.css';
import image from './bannerImg/cover image one.png'
import image2 from './bannerImg/cover image two.png'
import image3 from './bannerImg/cover image three.png'

const Banner = () => {
    return (
        <div>
            <section className="container">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item  active">

                            <div className="row p-5 d-flex align-items-center">
                                <div className="col-lg-7">
                                    <h1>We Provied <span className='custom-color'>Our Best Services</span> </h1>
                                    <p>For us, the repair work is not just about finding the fault and fixing it, it is about quality parts that are made to last long.</p>
                                    <button className="services-btn">Our Services</button>
                                </div>

                                <div className="col-lg-5">
                                    <img src={image} className="d-block w-100" alt="..." />
                                </div>

                            </div>


                        </div>
                        <div className="carousel-item">
                            <div className="row p-5 d-flex align-items-center">
                                <div className="col-lg-7">
                                    <h1>Finding <span className='custom-color'>Solution</span> For Your Problems</h1>
                                    <p>Our repair technicians have a wealth of experience repairing mobile devices and diagnosing errors</p>

                                    <button className="services-btn">Our Services</button>
                                </div>

                                <div className="col-lg-5">
                                    <img src={image2} className="d-block w-100" alt="..." />
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row p-5  d-flex align-items-center">
                                <div className="col-lg-7">
                                    <h1>Receive <span className='custom-color'>Instant Service</span> </h1>
                                    <p>We offer repair many different types of devices including computers, smartphones, tablets, gaming consoles etc.</p>

                                    <button className="services-btn">Our Services</button>
                                </div>

                                <div className="col-lg-5">
                                    <img src={image3} className="d-block w-100" alt="..." />
                                </div>

                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Banner;