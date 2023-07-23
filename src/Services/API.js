import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ca1e14ffb473d6a82f337d8c688837e0';

// список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
export const getMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

// пошук фільму за ключовим словом на сторінці фільмів.
export const getQuery = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data.results;
};

// запит повної інформації про фільм для сторінки кінофільму.
export const getDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

// запит інформації про акторський склад для сторінки кінофільму.
export const getCast = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
};

// запит оглядів для сторінки кінофільму
export const getReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
};
