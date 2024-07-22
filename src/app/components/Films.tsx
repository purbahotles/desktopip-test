"use client";

import { useEffect, useState } from 'react';

type Film = {
  episode_id: number;
  title: string;
};

const Films: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://swapi.dev/api/films/');
      const data = await res.json();
      setFilms(data.results);
    }
    fetchData();
  }, []);

  return (
    <div>
      {films.map(film => (
        <div key={film.episode_id}>
          <h3>{film.title}</h3>
          {/* Use random images for now */}
          <img src={`https://picsum.photos/seed/${film.episode_id}/200/300`} alt={film.title} />
        </div>
      ))}
    </div>
  );
};

export default Films;
