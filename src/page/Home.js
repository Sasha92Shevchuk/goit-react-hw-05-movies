import { MoviesList } from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../api/api';

export const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await getTrendingMovies();
        setTopMovies([...results]);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={topMovies} />
    </>
  );
};

export default Home;
