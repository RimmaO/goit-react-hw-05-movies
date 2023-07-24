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
  const [value, setValue] = useState(searchParams.get('query') ?? '');
  const currentQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: value });
    // setSearchParams({ query: event.target[0].value });  при неконтрольваному інпуті
  };

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

  const handleChange = event => {
    setValue(event.target.value);
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
          // defaultValue={currentQuery} - 2 варіант з сабміт при неконтрольваному інпуті
          onChange={handleChange}
          value={value}
          // value={currentQuery} - 1 варіант без сабміту - всі результати пошуку, при неконтрольваному інпуті
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
