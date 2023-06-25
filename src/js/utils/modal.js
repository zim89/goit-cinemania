import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { fetchMovieById, fetchMovieTrailer } from '../services/fetch-api.js';
import { initAddToLibraryBtn } from './ad-btn.js';
import {
  modalMovieInfoMarkup,
  modalMovieVideoMarkup,
  modalNotFoundMarkup,
} from '../markup/modalMarkup.js';

export let instance;
let markup;

export const openMovieInfoModal = async id => {
  try {
    Loading.standard('Loading...', {
      backgroundColor: 'rgba(0,0,0,0.8)',
      svgColor: 'rgb(248, 119, 25)',
    });
    const movie = await fetchMovieById(id);
    markup = modalMovieInfoMarkup(movie);
    instance = basicLightbox.create(markup, {
      onShow: instance => {
        const upcomingBtn = instance.element().querySelector('.modal__btn');
        initAddToLibraryBtn(upcomingBtn);
        instance.element().querySelector('.modal__btn-close').onclick =
          instance.close;
        document.addEventListener('keydown', closeModalOnKeyPress);
      },
      onClose: instance => {
        document.removeEventListener('keydown', closeModalOnKeyPress);
      },
    });
    instance.show();
  } catch (error) {
    markup = modalNotFoundMarkup('movie');
    instance = basicLightbox.create(markup, {
      onShow: instance => {
        instance.element().querySelector('.d-modal__btn-close').onclick =
          instance.close;
        document.addEventListener('keydown', closeModalOnKeyPress);
      },
      onClose: instance => {
        document.removeEventListener('keydown', closeModalOnKeyPress);
      },
    });
    instance.show();
  } finally {
    Loading.remove();
  }
};

export const openMovieVideoModal = async id => {
  try {
    Loading.standard('Loading...', {
      backgroundColor: 'rgba(0,0,0,0.8)',
      svgColor: 'rgb(248, 119, 25)',
    });
    const { results } = await fetchMovieTrailer(id);
    markup = modalMovieVideoMarkup(results[0]);

    instance = basicLightbox.create(markup, {
      onShow: instance => {
        instance.element().querySelector('.iframe__close').onclick =
          instance.close;
        document.addEventListener('keydown', closeModalOnKeyPress);
      },
      onClose: instance => {
        document.removeEventListener('keydown', closeModalOnKeyPress);
      },
    });

    instance.show();
  } catch (error) {
    markup = modalNotFoundMarkup('movie');
    instance = basicLightbox.create(markup, {
      onShow: instance => {
        instance.element().querySelector('.d-modal__btn-close').onclick =
          instance.close;
        document.addEventListener('keydown', closeModalOnKeyPress);
      },
      onClose: instance => {
        document.removeEventListener('keydown', closeModalOnKeyPress);
      },
    });
    instance.show();
  } finally {
    Loading.remove();
  }
};

const closeModalOnKeyPress = e => {
  console.log(e.code);
  if (e.code !== 'Escape') return;
  instance.close();
};
