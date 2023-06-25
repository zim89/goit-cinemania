import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { fetchUpcomingMovies } from '../services/fetch-api';
import { upcomingMarkup } from '../markup/upcomingMarkup';
import { initAddToLibraryBtn } from '../utils/ad-btn';
import { randomIndex } from '../utils/random-index';
import { refs } from '../refs.js';

export const renderUpcomingMovies = async () => {
  const index = randomIndex()[0];

  try {
    Loading.standard('Loading...', {
      backgroundColor: 'rgba(0,0,0,0.8)',
      svgColor: 'rgb(248, 119, 25)',
    });
    const { results } = await fetchUpcomingMovies();
    refs.upcomingContainer.innerHTML = upcomingMarkup(results[index]);
    const upcomingBtn = document.querySelector('.upcoming .btn');
    initAddToLibraryBtn(upcomingBtn);
  } catch (error) {
    console.log(`upcomingError: ${error}`);
  } finally {
    Loading.remove();
  }
};

renderUpcomingMovies();
