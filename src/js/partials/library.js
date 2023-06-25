import { loadMovies } from '../services/storage-api';
import { libMovieListMarkup } from '../markup/movieListMarkup';
import { openMovieInfoModal } from '../utils/modal';
import { refs } from '../refs';

const PER_PAGE = 9;
let currentPage = 0;
let filter = '';

function appendMoviesToMarkup(movies) {
  const markup = movies.map(movie => libMovieListMarkup(movie)).join('');
  refs.libraryMovieList.insertAdjacentHTML('beforeend', markup);
}

export const initLibrary = async () => {
  const { movies, total } = await loadMovies(PER_PAGE, currentPage, filter);
  if (movies.length === 0 && !filter) {
    refs.dropdown.classList.toggle('vhidden');
    const markup = `
    <li class="library__item">
      <p class="library__text">
        OOPS...<br/>
        We are very sorry!<br/>
        You don’t have any movies at your library.
      </p>
      <a href="./catalog.html" class="btn btn--primary" type="button">Search movie</a>
    </li>`;
    refs.libraryMovieList.innerHTML = markup;
    return;
  }
  // if (movies.length === 0) {
  //   const markup = `
  //   <li class="library__item">
  //     <p class="library__text">
  //       OOPS...<br/>
  //       We are very sorry!<br/>
  //       You don’t have any movies with genre "${filter}".
  //     </p>
  //   </li>`;
  //   refs.libraryMovieList.innerHTML = markup;
  //   return;
  // }

  appendMoviesToMarkup(movies);

  if (total > 1 && currentPage + 1 !== Math.ceil(total / PER_PAGE)) {
    refs.libLoadMoreBtn.classList.toggle('vhidden');
    refs.libLoadMoreBtn.addEventListener('click', handlerLoadMoreBtn);
  }
};

export const removeMovieFromMarkup = () => {
  refs.libraryMovieList.innerHTML = '';
  const len = currentPage;
  for (let i = 0; i <= len; i++) {
    currentPage = i;
    initLibrary();
  }
};

export const renderFilteredLibrary = genre => {
  if (genre === 'All') {
    filter = '';
    refs.libraryMovieList.innerHTML = '';
    initLibrary();
    return;
  }
  filter = genre;
  refs.libraryMovieList.innerHTML = '';
  initLibrary();
};

// !HANDLERS
export function handlerMovieListClick(e) {
  const closestId = e.target.closest('[data-movie-id]');
  if (!closestId) return;
  const movieId = closestId.dataset.movieId;
  openMovieInfoModal(movieId);
}

function handlerLoadMoreBtn() {
  refs.libLoadMoreBtn.classList.toggle('vhidden');
  currentPage += 1;
  initLibrary();
}
