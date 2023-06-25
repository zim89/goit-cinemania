import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { fetchTrendingMoviesByWeek } from '../services/fetch-api';
import { trendsMarkup } from '../markup/trendsMarkup';
import { openMovieInfoModal } from '../utils/modal.js';
import { refs } from '../refs.js';

export const renderTrendingMoviesByWeek = async () => {
  try {
    Loading.standard('Loading...', {
      className: 'hero-loading',
      backgroundColor: 'rgba(0,0,0,0.8)',
      svgColor: 'rgb(248, 119, 25)',
    });
    const { results } = await fetchTrendingMoviesByWeek();
    refs.movieList.innerHTML = trendsMarkup(results);
    refs.movieList.addEventListener('click', handlerMovieListClick);
  } catch (error) {
    console.log(`Error in renderTrendingMoviesByWeek: ${error}`);
    // FIXME: add default cards
  } finally {
    Loading.remove();
  }
};

function handlerMovieListClick(e) {
  const closestId = e.target.closest('[data-movie-id]');
  if (!closestId) return;
  const movieId = closestId.dataset.movieId;
  openMovieInfoModal(movieId);
}

renderTrendingMoviesByWeek();
