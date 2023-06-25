import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { fetchTrendingMoviesByDay } from '../services/fetch-api';
import { heroMarkup, heroMarkupDefault } from '../markup/heroMarkup';
import { openMovieInfoModal, openMovieVideoModal } from '../utils/modal.js';
import { randomIndex } from '../utils/random-index';
import { refs } from '../refs.js';

export const renderTrendingMoviesByDay = async () => {
  const index = randomIndex()[0];

  try {
    Loading.standard('Loading...', {
      className: 'hero-loading',
      backgroundColor: 'rgba(0,0,0,0.8)',
      svgColor: 'rgb(248, 119, 25)',
    });
    const { results } = await fetchTrendingMoviesByDay();
    refs.heroContainer.innerHTML = heroMarkup(results[index]);
    refs.heroContainer.addEventListener('click', handlerHeroClick);
  } catch (error) {
    refs.heroContainer.classList.toggle('hero--bg');
    refs.heroContainer.innerHTML = heroMarkupDefault();
  } finally {
    Loading.remove();
  }
};

function handlerHeroClick(e) {
  const movieType = e.target.dataset.movie;
  const movieId = e.target.parentNode.dataset.movieId;

  movieType === 'video' ? openMovieVideoModal(movieId) : null;
  movieType === 'info' ? openMovieInfoModal(movieId) : null;
}

renderTrendingMoviesByDay();
