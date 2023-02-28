import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Item, TitleMovie } from './MovieCard.styled';

export const MovieCard = ({ id, title, name, poster_path }) => {
  const location = useLocation();
  const currentPage = location.pathname === '/' ? '/movies' : location.pathname;

  return (
    <Item>
      <Link to={`${currentPage}/${id}`} state={{ from: location }}>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <TitleMovie>{title || name}</TitleMovie>
      </Link>
    </Item>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
};
