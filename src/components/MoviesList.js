import { MovieCard } from './MovieCard';
import PropTypes from 'prop-types';
import { List } from './MoviesList.styled';
export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
