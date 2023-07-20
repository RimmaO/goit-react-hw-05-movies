import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from './Services/API';

const Cast = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();
  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';
  const DEFAULT_URL_IMG = 'https://placehold.co/600x400?font=roboto';

  useEffect(() => {
    const addCast = async () => {
      try {
        const data = await getCast(movieId);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    addCast();
  }, [movieId]);

  return (
    <section>
      <ul>
        {movies.map(({ profile_path, name, character, id }) => (
          <li key={id}>
            <img
              src={profile_path ? BASE_URL_IMG + profile_path : DEFAULT_URL_IMG}
              alt="cast"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast;
