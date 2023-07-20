import { getQuery } from 'components/Services/API';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuery = searchParams.get('currentQuery') ?? '';
  // const [value, setValue] = useState(searchParams.get('currentQuery') ?? '');
  console.log(movies);
  const location = useLocation();

  const handleSubmit = event => {
    event.preventDefault();

    if (event.target.value === '') {
      return alert('Input is empty');
    }
    setSearchParams({ currentQuery: event.target.value });
  };

  useEffect(() => {
    if (currentQuery === '') {
      return;
    }
    const addQuery = async () => {
      try {
        const data = await getQuery(currentQuery);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    addQuery();
  }, [currentQuery]);

  const handleChange = event => {
    if (event.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ currentQuery: event.target.value });
    // setValue(event.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          id="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
          value={currentQuery}
        />

        <button type="submit" className="button">
          Search
        </button>
      </form>
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

export default Movies;
