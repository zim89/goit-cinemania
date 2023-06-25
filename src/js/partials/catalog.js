import { Loading } from 'notiflix/build/notiflix-loading-aio';

import {
  fetchTrendingMoviesByWeek,
  fetchSearchMovies,
} from '../services/fetch-api';
import initPagination from './pagination';
import { movieListMarkup } from '../markup/movieListMarkup';
import { openMovieInfoModal } from '../utils/modal.js';
import { refs } from '../refs.js';

refs.catalogForm.addEventListener('submit', handlerSubmit);
refs.catalogMovieList.addEventListener('click', handlerMovieListClick);

// !RENDER MOVIE LIST
export const renderCatalogMovieList = async (page = 1) => {
  try {
    Loading.standard('Loading...', {
      className: 'hero-loading',
      backgroundColor: 'rgba(0,0,0,0.8)',
      svgColor: 'rgb(248, 119, 25)',
    });
    const { results, total_pages } = await fetchTrendingMoviesByWeek(page);
    initPagination(total_pages, page);
    const markup = results.map(movie => movieListMarkup(movie)).join('');
    refs.catalogMovieList.innerHTML = markup;
    // refs.catalogMovieList.addEventListener('click', handlerMovieListClick);
  } catch (error) {
  } finally {
    Loading.remove();
  }
};

export const renderSearchMovieList = async (query, page = 1) => {
  try {
    Loading.standard('Loading...', {
      backgroundColor: 'rgba(0,0,0,0.8)',
      svgColor: 'rgb(248, 119, 25)',
    });
    const { results, total_pages } = await fetchSearchMovies(query, page);
    if (results.length === 0) {
      refs.catalogMovieList.innerHTML = `
        <li class="movie__item--notfound">
          OOPS...<br/>
          We are very sorry!<br/>
          We don’t have any results matching your search.<br/>
        </li>`;
      refs.paginationEl.classList.toggle('vhidden');
    } else {
      initPagination(total_pages, page, query);
      const markup = results.map(movie => movieListMarkup(movie)).join('');
      refs.catalogMovieList.innerHTML = markup;
      refs.catalogMovieList.addEventListener('click', handlerMovieListClick);
    }
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
  const form = e.currentTarget;
  const query = form.elements.search.value.trim();
  query ? renderSearchMovieList(query) : renderCatalogMovieList();
  form.reset();
}

renderCatalogMovieList();
