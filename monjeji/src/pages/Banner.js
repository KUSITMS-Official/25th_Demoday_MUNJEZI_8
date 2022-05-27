import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper';
import "./Banner.css"
import "swiper/css";
import "swiper/css/pagination";

function Banner() {
    return (
        <Swiper className="banner"
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                autoplay={{delay: 3000}}
                pagination={{clickable: true}}
                loop={true}
                direction={"vertical"}>
            <SwiperSlide><img src="../img/banner1.svg" alt="banner1"/></SwiperSlide>
            <SwiperSlide><img src="../img/banner2.svg" alt="banner2"/></SwiperSlide>
            <SwiperSlide><img src="../img/banner3.svg" alt="banner3"/></SwiperSlide>
            <SwiperSlide><img src="../img/banner4.svg" alt="banner4"/></SwiperSlide>
        </Swiper>
    );
}

export default Banner;