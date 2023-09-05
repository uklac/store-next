'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Banner, { BannerProps } from '../../server/banner/banner';

interface SliderProps {
  slides: BannerProps[];
}

export default function Slider(props: SliderProps) {
  const { slides } = props;
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      effect="fade"
    >
      {slides.map((slides, index) => (
        <SwiperSlide key={index}>
          <Banner
            image={slides.image}
            title={slides.title}
            link={slides.link}
            size="big"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
