import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getDetails } from 'Services/API';
import { BackLink } from 'components/BackLink/BackLink';
import { Container, Image } from 'components/MovieCard/MovieCard.styled';

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';
  const DEFAULT_URL_IMG = 'https://placehold.co/600x400?font=roboto';

  useEffect(() => {
    const addDetails = async () => {
      try {
        const data = await getDetails(movieId);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    addDetails();
  }, [movieId]);

  return (
    <Container>
      <BackLink to={backLink.current}>Go back</BackLink>
      <Image
        src={
          movies.poster_path
            ? BASE_URL_IMG + movies.poster_path
            : DEFAULT_URL_IMG
        }
        alt="movie"
      />

      <ul>
        <li>
          <h2>{movies.title}</h2>
          <p>User Score: {Math.round(movies.vote_average) * 10}%</p>
        </li>
        <li>
          <h2>Overview</h2>
          <p>{movies.overview}</p>
        </li>
        <li>
          <h2>Genres</h2>
          <p>{movies.genres?.map(genre => genre.name).join(' ')}</p>
        </li>
      </ul>

      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast" state={{ from: location }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default MovieDetails;
