"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ImageSlider from './components/ImageSlider';
import { Film } from './types';
import Header from './components/Header';
// import AutoPlaySlider from './components/AutoPlaySlider';
import { PlayIcon } from '@heroicons/react/24/outline';
import Footer from './components/Footer';

type Person = {
  name: string;
};

// Fetch data in server components
const fetchCharacterData = async () => {
  const res = await fetch('https://swapi.dev/api/people/1/', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch character data');
  return res.json();
};

const fetchFilms = async (): Promise<Film[]> => {
  const res = await fetch('https://swapi.dev/api/films');
  const data = await res.json();
  return data.results;
};

const Home: React.FC = () => {
  const [characterData, setCharacterData] = useState<Person | null>(null);
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const character = await fetchCharacterData();
        const filmData = await fetchFilms();
        setCharacterData(character);
        setFilms(filmData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!characterData) {
    return <div>Error loading character data</div>;
  }

  return (
    <div className=" bg-blue-950 h-full flex flex-col">
      <section className="bg-cover bg-center mb-10 min-h-screen relative" style={{ backgroundImage: 'url(/images/banner-image.png)' }}>
        <div className='grid grid-cols-1 md:m-10 p-5 rounded-lg relative z-50'>
          <Header characterName={characterData.name} />
        </div>

        <div className='grid grid-cols-2'>
          <div className="absolute bottom-0 left-0 flex flex-col justify-start md:w-2/4 md:min-h-screen  p-5 md:bg-custom-gradient-md bg-custom-gradient-sm">
              <div className="md:absolute inset-0 flex items-center justify-center md:w-3/4 p-5 text-white ">
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold mb-2">Video Title</h2>
                  <h3 className="text-xl font-semibold mb-4">Video Title</h3>
                  <p className="text-sm mb-2">2022 | 2H 23m</p>
                  <p className="text-sm mb-4">
                    Soda and Gembira are two best friends who have a lot in common. Their friendship begins to fall apart when they meet Jennie, a beautiful woman who is also an environmental activist. They were both interested and tried to win Jennie's heart. However, Jennie did not choose one of the two and decided to remain friends.
                  </p>
                    <button className="bg-yellow-500 text-black px-4 py-2 w-40 rounded-full hover:bg-yellow-600 flex items-center justify-center space-x-2">
                      <PlayIcon className="h-6 w-6" />
                      <span>Play</span>
                    </button>
                </div>
              </div>
            </div>
            {/* <AutoPlaySlider /> */}
        <div></div>
        </div>
      </section>

      <div className="ml-10 mr-10">
        <main className="bg-blue-950">
          <section>
            <ImageSlider filmsData={{ results: films }} />
            <br/>
            <ImageSlider filmsData={{ results: films }} />
          </section>
        </main>      
      </div>
      <Footer />
    </div>
  );
};

export default Home;
