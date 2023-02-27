import { getMovieReviews } from 'api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const { results } = await getMovieReviews(moviesId);
      setReviews(results);
    };

    getReviews();
  }, [moviesId]);
  if (!reviews) {
    return;
  }

  return (
    <div>
      <ul>
        {reviews.length > 0
          ? reviews.map(review => (
              <li key={review.id}>
                <h5>Author: {review.author}</h5>
                <p>"{review.content}"</p>
              </li>
            ))
          : `We don't have any reviews for this movie.`}
      </ul>
    </div>
  );
};
