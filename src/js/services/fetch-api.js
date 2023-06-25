import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWYwYzIyMWE2YTRjMTZkOTRjZTUwMDIzYjU4MzMzYiIsInN1YiI6IjY0NGZiYzBhMjNhMzE0MDJlNTdjM2Q0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZBqemQQaP5AfqtlQ7E69qa116O60SNbbfSuHzK1gjU',
    accept: 'application/json',
  },
};

export const fetchTrendingMoviesByDay = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?language=en-US`,
      options
    );
    return response.data;
  } catch (error) {
    Notify.failure("Can't fetch trending movies by day");
    console.error(`Error in fetchTrendingMoviesByDay: ${error}`);
  }
};

export const fetchTrendingMoviesByWeek = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?language=en-US&page=${page}`,
      options
    );
    return response.data;
  } catch (error) {
    Notify.failure("Can't fetch trending movies by week");
    console.error(`Error in fetchTrendingMoviesByWeek: ${error}`);
  }
};

export const fetchUpcomingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/upcoming?language=en-US&page=1`,
      options
    );
    return response.data;
  } catch (error) {
    Notify.failure("Can't fetch upcoming movies");
    console.error(`Error in fetchUpcomingMovies: ${error}`);
  }
};

export const fetchMovieById = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?language=en-US`,
      options
    );
    return response.data;
  } catch (error) {
    Notify.failure("Can't fetch movie by id");
    console.error(`Error in fetchMovieById: ${error}`);
  }
};

export const fetchMovieTrailer = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/videos?language=en-US`,
      options
    );
    return response.data;
  } catch (error) {
    Notify.failure("Can't fetch movie trailer");
    console.error(`Error in fetchMovieTrailer: ${error}`);
  }
};

export const fetchSearchMovies = async (query, page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
      options
    );
    return response.data;
  } catch (error) {
    Notify.failure("Can't fetch search movies");
    console.error(`Error in fetchSearchMovies: ${error}`);
  }
};
