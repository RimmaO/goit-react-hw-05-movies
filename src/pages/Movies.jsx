import { useEffect, useState } from 'react';
import { getQuery } from 'Services/API';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {
  Button,
  Input,
  Wrapper,
} from 'components/SearchForm/SearchForm.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    !currentQuery && setSearchParams({});

    const addQuery = async () => {
      try {
        const data = await getQuery(currentQuery);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    addQuery();
  }, [currentQuery, setSearchParams]);

  const handleSubmit = event => {
    event.preventDefault();

    if (currentQuery.trim() === '') {
      return alert('Input is empty');
    }
    setSearchParams({ query: currentQuery });
  };

  const handleChange = event => {
    setSearchParams({ query: event.target.value });
  };

  return (
    <>
      <Wrapper className="form" onSubmit={handleSubmit}>
        <Input
          className="input"
          type="text"
          id="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
          value={currentQuery}
        />
        <Button type="submit" className="button">
          Search
        </Button>
      </Wrapper>
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
