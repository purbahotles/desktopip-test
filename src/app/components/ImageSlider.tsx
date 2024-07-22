'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Correct import
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import type { Film } from '../types';

const ImageSlider = ({ filmsData }: { filmsData: { results: Film[] } }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Navigation]} // Enable Navigation module
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {filmsData.results.map((film) => (
        <SwiperSlide key={film.episode_id} className="relative">
          <Image
            src="/images/card-image.png"
            alt={film.title}
            width={400}
            height={300}
            className="w-full h-60 object-cover rounded-lg gap-4"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white text-xl font-semibold p-2 rounded-b-lg">
            <h3>{film.title}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
