import { Notify } from 'notiflix/build/notiflix-loading-aio';

import { checkMovie, saveMovie, removeMovie } from '../services/storage-api';
import { instance } from './modal';
import { removeMovieFromMarkup } from '../partials/library';
import { fetchMovieById } from '../services/fetch-api';

export const initAddToLibraryBtn = btn => {
  const id = Number.parseInt(btn.dataset.movieId);

  if (checkMovie(id)) {
    btn.textContent = 'Remove from my library';
    btn.addEventListener('click', handlerRemoveFromLibrary);
    return;
  }

  btn.addEventListener('click', handlerAddToLibrary);
};

const handlerAddToLibrary = async e => {
  const target = e.target;
  const id = Number.parseInt(target.dataset.movieId);

  try {
    const movie = await fetchMovieById(id);
    saveMovie(movie);
    target.textContent = 'Remove from my library';
    target.removeEventListener('click', handlerAddToLibrary);
    target.addEventListener('click', handlerRemoveFromLibrary);

    if (location.pathname.includes('library')) {
      instance.close();
      removeMovieFromMarkup();
    }
  } catch (error) {
    Notify.failure('Unable to save the movie. Try again later!');
  }
};

const handlerRemoveFromLibrary = e => {
  const target = e.target;
  const id = Number.parseInt(target.dataset.movieId);
  removeMovie(id);
  target.textContent = 'Add to my library';
  target.removeEventListener('click', handlerRemoveFromLibrary);
  target.addEventListener('click', handlerAddToLibrary);

  if (location.pathname.includes('library')) {
    instance.close();
    removeMovieFromMarkup();
  }
};
