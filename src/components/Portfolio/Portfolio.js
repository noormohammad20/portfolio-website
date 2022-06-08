import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Portfolio.css'
import Manufacturer from '../../img/manufacturer.png'
import Warehouse from '../../img/warehouse.png'
import Learn from '../../img/learn.png'
import Watch from '../../img/watch.png'
import "swiper/css"
const Portfolio = () => {
    return (
        <div className='portfolio'>
            {/* heading */}
            <span>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={Manufacturer} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Warehouse} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Learn} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Watch} alt="" />
                </SwiperSlide>

            </Swiper>

        </div>
    )
}

export default Portfolio