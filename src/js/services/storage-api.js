import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const STORAGE_KEY = 'movies-library';

export const saveMovie = movie => {
  const movies = loadMoviesFromStorage();

  if (movie.id === undefined) {
    Notify.failure('No movie id');
    throw new Error('No movie id');
  }
  if (movies.some(savedMovie => savedMovie.id === movie.id)) {
    Notify.failure('Movie already in library');
    throw new Error('Movie already in library');
  }

  movies.push(movie);
  saveMoviesToStorage(movies);
};

export function removeMovie(id) {
  const movies = loadMoviesFromStorage();
  const moviesToSave = movies.filter(movie => movie.id !== id);
  saveMoviesToStorage(moviesToSave);
}

export function checkMovie(id) {
  const movies = loadMoviesFromStorage();
  return movies.some(movie => movie.id === id);
}

function saveMoviesToStorage(movies) {
  try {
    const moviesString = JSON.stringify(movies);
    localStorage.setItem(STORAGE_KEY, moviesString);
  } catch (error) {
    Notify.failure("Can't save movies to storage.");
    console.error(error);
  }
}

function loadMoviesFromStorage() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
  } catch (error) {
    Notify.failure("Can't load saved movies.");
    console.error(error);
    return [];
  }
}

const filteredMovies = filter => {
  const result = [];
  const savedMovies = loadMoviesFromStorage();
  savedMovies.forEach(movie => {
    const hasGenre = movie.genres.some(genre => genre.name === filter);
    if (hasGenre) result.push(movie);
  });
  return result;
};

export async function loadMovies(limit = 0, page = 0, filter = '') {
  try {
    const previousMovies = page * limit;
    const savedMovies = !filter
      ? loadMoviesFromStorage()
      : filteredMovies(filter);

    const moviesToLoad =
      page === 0
        ? savedMovies.slice(0, limit)
        : savedMovies.slice(previousMovies, previousMovies + limit);

    return { movies: moviesToLoad, total: savedMovies.length };
  } catch (err) {
    Notify.failure("Can't load movies. " + err.message);
    console.error(err);
    return [];
  }
}

// FIXME: ???
export async function loadMovie(idx) {
  const savedMovies = loadMoviesFromStorage();
  if (idx >= savedMovies.length) return;

  return await fetchMovie(savedMovies[idx]);
}

// FIXME: ???
async function fetchMovie({ id }) {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?language=en-US`,
    options
  );
  const {
    data: { poster_path, title, vote_average, release_date, genres },
  } = response;
  const genre_ids = genres.map(({ id }) => id);

  return { genre_ids, poster_path, title, vote_average, release_date, id };
}
