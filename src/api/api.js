import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const KEY_API = 'db7d4d12a3c39732a732f124f925562b';

// для трендових фільмів за день на головну сторінку
export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${KEY_API}&language=en-US&page=1`
  );
  return data;
};

// для пошуку фільмів за ключовим словом
export const getSearchMovies = async query => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${KEY_API}&language=en-US&query=${query}&page=1`
  );

  return data;
};

// запит повної інформації про фільм для сторінки кінофільму.
export const getMovieDetails = async movie_id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movie_id}?api_key=${KEY_API}&language=en-US&page=1`
  );
  return data;
};
// запит інформації про акторський склад для сторінки кінофільму
export const getMovieCredits = async movie_id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${KEY_API}&language=en-US&page=1`
  );
  return data;
};

// запит оглядів для сторінки кінофільму
export const getMovieReviews = async movie_id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${KEY_API}&language=en-US&page=1`
  );
  return data;
};
