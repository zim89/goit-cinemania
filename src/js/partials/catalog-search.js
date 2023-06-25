import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { fetchSearchMovies } from '../services/fetch-api';
import { movieListMarkup } from '../markup/movieListMarkup';
import initPagination from './pagination';
import { openMovieInfoModal } from '../utils/modal.js';
import { scrollUp } from '../utils/scroll-up';
import { refs } from '../refs.js';

refs.catalogForm.addEventListener('submit', handlerSubmit);
// const paginations = initPagination();

// !RENDER MOVIE LIST
const renderSearchMovieList = async (query, page) => {
  try {
    Loading.standard('Loading...', {
      backgroundColor: 'rgba(0,0,0,0.8)',
      svgColor: 'rgb(248, 119, 25)',
    });
    const { results, total_pages } = await fetchSearchMovies(query, page);
    const markup = results.map(movie => movieListMarkup(movie)).join('');
    refs.catalogMovieList.innerHTML = markup;
    refs.catalogMovieList.addEventListener('click', handlerMovieListClick);
  } catch (error) {
  } finally {
    Loading.remove();
  }
};

// !HANDLERS
function handlerMovieListClick(e) {
  const closestId = e.target.closest('[data-movie-id]');
  if (!closestId) return;
  const movieId = closestId.dataset.movieId;
  openMovieInfoModal(movieId);
}

function handlerSubmit(e) {
  e.preventDefault();
  const query = e.currentTarget.elements.search.value.trim();
  searchQuery = query;
  query ? renderSearchMovieList(query) : renderCatalogMovieList();
}
