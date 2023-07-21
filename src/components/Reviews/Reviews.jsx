import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../Services/API';

const Reviews = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const addReviews = async () => {
      try {
        const data = await getReviews(movieId);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    addReviews();
  }, [movieId]);
  return movies.length === 0 ? (
    <h2>We don't have any reviews for this movie.</h2>
  ) : (
    <section>
      <ul>
        {movies.map(({ author, content, id }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
