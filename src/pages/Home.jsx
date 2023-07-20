import { useEffect, useState } from 'react';
import { getMovies } from './../components/Services/API';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  // console.log(movies);

  useEffect(() => {
    const addMovies = async () => {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    addMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(({ original_title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
