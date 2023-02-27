import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DetailsBox, InfoBox } from './MovieInfo.styled';
export const MovieInfo = ({
  poster_path,
  release_date,
  title,
  name,
  vote_average,
  overview,
  genres,
}) => {
  const allGenres = genres.map(genre => genre.name).join('  ');

  return (
    <>
      <DetailsBox>
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={title}
        />
        <div>
          <h1>
            {title || name} ({new Date(release_date).getFullYear()})
          </h1>
          <p>User Score: {`${Math.round(Number(vote_average) * 10)} %`}</p>
          <h3>Overview </h3>
          <p>{overview}</p>
          <h3>Genres </h3>
          <p>{allGenres}</p>
        </div>
      </DetailsBox>
      <h4>Additional information</h4>
      <InfoBox>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </InfoBox>

      <Outlet />
    </>
  );
};

MovieInfo.propTypes = {
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
};
