import { getMovieDetails } from 'api/api';
import { GoBackBtn } from 'components/GoBackBtn';
import { MovieInfo } from 'components/MovieInfo';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export const MovieDetails = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState({});
  const [backLink, setBackLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (backLink) {
      return;
    }
    const backLinkHref = location.state?.from ?? '/';
    setBackLink(backLinkHref);
  }, [backLink, location.state?.from]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await getMovieDetails(moviesId);
        setMovie(details);
      } catch (error) {
        new Error(error);
      }
    };
    fetchDetails();
  }, [moviesId]);
  if (Object.keys(movie).length === 0) {
    return;
  }

  return (
    <>
      <GoBackBtn path={backLink} />
      {movie && <MovieInfo {...movie} />}
    </>
  );
};

export default MovieDetails;
