import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
export const MovieCard = ({ id, title, name }) => {
  const location = useLocation();
  const currentPage = location.pathname === '/' ? '/movies' : location.pathname;

  return (
    <li>
      <Link to={`${currentPage}/${id}`} state={{ from: location }}>
        {title || name}
      </Link>
    </li>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
};
