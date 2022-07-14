import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Featured.css';

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            arrows: false,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1312,
                    settings: {
                        dots: true,
                        infinite: true,
                        slidesToShow: 3,
                        arrows: false,
                        slidesToScroll: 1,
                        autoplay: true,
                        speed: 2000,
                        cssEase: "linear",
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        dots: true,
                        infinite: true,
                        slidesToShow: 3,
                        arrows: false,
                        slidesToScroll: 1,
                        autoplay: true,
                        speed: 2000,
                        cssEase: "linear",
                    }
                },
                {
                    breakpoint: 688,
                    settings: {
                        dots: true,
                        infinite: true,
                        slidesToShow: 1,
                        arrows: false,
                        slidesToScroll: 1,
                        autoplay: true,
                        speed: 2000,
                        cssEase: "linear",
                    }
                }
            ]

        };
        return (
            <div className='container' >
                <h2 className=' text-center mt-5 mb-4' >Brands we repair</h2>
                <Slider className='mt-4' {...settings}>
                    <div className='text-center container'>
                        <img className='custom-img container ' src="https://static.businessworld.in/article/article_extra_large_image/1568786528_SCiGl5_apple.jpg" alt="loading" />
                        <h6 className='text-center mt-4'>Apple</h6>
                    </div>
                    <div className='text-center container'>
                        <img className='custom-img container' src="https://www.gizmochina.com/wp-content/uploads/2020/08/Samsung-Galaxy-Logo-Featured.jpg" alt="loading" />
                        <h6 className='text-center mt-3  '>Samsung</h6>
                    </div>
                    <div className='text-center container'>
                        <img className='custom-img container' src="https://download.logo.wine/logo/Huawei/Huawei-Logo.wine.png" alt="loading" />
                        <h6 className='text-center mt-1 '>Huawei</h6>
                    </div>
                    <div className='text-center container'>
                        <img className='custom-imgII container' src="https://upload.wikimedia.org/wikipedia/commons/1/1c/OPPO_LOGO.jpg" alt="loading" />
                        <h6 className='text-center'>Oppo</h6>
                    </div>
                    <div className='text-center container'>
                        <img className='custom-img container' src="https://www.mediascrolls.com/wp-content/uploads/2021/12/Xiaomi-foldable-smartphone.png" alt="" />
                        <h6 className='text-center mt-4'>Xiaomi</h6>
                    </div>
                    <div className='text-center container'>
                        <img className='custom-img container d-flex' src="https://www.androidguys.com/wp-content/uploads/2020/07/OnePlus-Logo.png" alt="loading" />
                        <h6 className='text-center mt-1 '>Oneplus</h6>
                    </div>
                </Slider>
            </div>
        );
    }
}