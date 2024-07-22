// src/app/components/AutoPlaySlider.tsx

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Ensure pagination styles are imported
import { Pagination } from 'swiper/modules';
// import Image from 'next/image';

type Slide = {
  title: string;
  description: string;
  year: string;
  duration: string;
  imageUrl: string;
};

const slides: Slide[] = [
  {
    title: 'Video Title 1',
    description: 'Description for video 1.',
    year: '2022',
    duration: '2H 23m',
    imageUrl: '',
  },
  {
    title: 'Video Title 2',
    description: 'Description for video 2.',
    year: '2022',
    duration: '2H 23m',
    imageUrl: '',
  },
  // Add more slides as needed
];

const AutoPlaySlider = () => {
  return (
    <Swiper
      modules={[Pagination]} // Add Pagination module to Swiper
      spaceBetween={10}
      slidesPerView={1}
      pagination={{
        dynamicBullets: true,
      }}
      // pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }} // Auto-play interval
      loop={true} // Loop the slides
      className="relative"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <div className="absolute bottom-0 left-0 flex flex-col justify-center md:w-2/4 md:min-h-screen bg-blue-900 p-5 shadow-lg">
            <div className="md:absolute inset-0 flex items-center justify-center md:w-3/4 p-5 text-white">
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                <h3 className="text-xl font-semibold mb-4">{slide.description}</h3>
                <p className="text-sm mb-2">{slide.year} | {slide.duration}</p>
                <p className="text-sm mb-4">{slide.description}</p>
                <button className="bg-yellow-500 text-black px-4 py-2 w-20 rounded-lg hover:bg-yellow-600">
                  Play
                </button>
              </div>
            </div>
          </div>
          {/* <Image
            src={slide.imageUrl}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-[-1]" // Ensure image is behind content
          /> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AutoPlaySlider;
