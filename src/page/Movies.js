import { getSearchMovies } from 'api/api';
import { MoviesList } from 'components/MoviesList';
import { SearchForm } from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleFormSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { results } = await getSearchMovies(query);
        setMovies([...results]);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <>
      <h1>Search movies </h1>
      <SearchForm onSubmit={handleFormSubmit} />
      {movies?.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
