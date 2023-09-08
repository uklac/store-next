'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Hero, HeroProps } from 'components/server';

interface SliderHeroProps {
  slides: HeroProps[];
}

export function SliderHero(props: SliderHeroProps) {
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
          <Hero
            image={slides.image}
            title={slides.title}
            subtitle={slides.subtitle}
            text={slides.text}
            link={slides.link}
            dark={slides.dark}
            position={slides.position}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}