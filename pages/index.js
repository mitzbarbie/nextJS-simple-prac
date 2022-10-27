import { useEffect, useState } from 'react';
import Title from '../components/Title';

const API_KEY = '10923b261ba94d897ac6b81148314a3f';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, [])
  return (
    <div>
      <Title title='Home' />
      {movies.map(movie=><div key={movie.id}></div>)}
    </div>
  );
}
