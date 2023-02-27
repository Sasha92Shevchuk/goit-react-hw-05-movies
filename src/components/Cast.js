import { getMovieCredits } from 'api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Item, List } from './Cast.styled';

export const Cast = () => {
  const { moviesId } = useParams();
  const [casts, setCasts] = useState(null);
  console.log('Cast ~ casts:', casts);

  useEffect(() => {
    const getCastInfo = async () => {
      try {
        const { cast } = await getMovieCredits(moviesId);
        setCasts(cast);
      } catch (error) {
        new Error(error);
      }
    };
    getCastInfo();
  }, [moviesId]);
  if (!casts) {
    return;
  }

  return (
    <div>
      <List>
        {casts.map(({ profile_path, name, character, cast_id }) => (
          <Item key={cast_id}>
            <Image
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
            <h4>{name}</h4>
            <p>Character: {character}</p>
          </Item>
        ))}
      </List>
    </div>
  );
};
