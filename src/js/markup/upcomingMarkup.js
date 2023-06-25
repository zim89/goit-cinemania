import { getGenreNames } from '../utils/genre-names';

export const upcomingMarkup = movie => {
  const {
    id,
    title,
    original_title,
    vote_average,
    vote_count,
    popularity,
    overview,
    genre_ids,
    poster_path,
    backdrop_path,
    release_date,
  } = movie;
  let posterUrl;

  const genres = getGenreNames(genre_ids).join(', ');

  window.innerWidth < 768
    ? (posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`)
    : (posterUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`);

  if (!poster_path || !backdrop_path) {
    if (window.innerWidth < 768) {
      posterUrl = new URL(
        '/src/images/img/mobile/default-movie-img@2x.png',
        import.meta.url
      );
    }

    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      posterUrl = new URL(
        '/src/images/img/tablet/default-movie-img@2x.png',
        import.meta.url
      );
    }

    if (window.innerWidth >= 1280) {
      posterUrl = new URL(
        '/src/images/img/desktop/default-movie-img@2x.png',
        import.meta.url
      );
    }
  }

  const markup = `
    <div class="upcoming__thumb">
      <img class ="upcoming__image" src="${posterUrl}" alt="${
    title || original_title
  }" />
    </div>

    <div class="upcoming__meta">
      <h3 class="upcoming__caption">${title || original_title}</h3>
      
      
      <div class="upcoming__ctx">
        <ul class="upcoming__list">
          <li class="upcoming__item">
            <div class="upcoming__desc">Release date</div>
            <div class="upcoming__date">${release_date.slice(0, 4)}</div>
          </li>
          <li class="upcoming__item">
            <div class="upcoming__desc">Vote / Votes</div>
            <div class="upcoming__value">
              <span class="tag">
                ${vote_average.toFixed(1)}
              </span>
              &nbsp;/&nbsp;
              <span class="tag">
                ${vote_count}
              </span>
            </div>
          </li>
        </ul>
        <ul class="upcoming__list">
          <li class="upcoming__item">
            <div class="upcoming__desc">Popularity</div>
            <div class="upcoming__value">${popularity.toFixed(1)}</div>
          </li>
          <li class="upcoming__item">
            <div class="upcoming__desc">Genre</div>
            <div class="upcoming__value">${genres}</div>
          </li>
        </ul>
      </div>

      <div class="upcoming__about">
        <h3 class="upcoming__subtitle">About</h3>
        <p class="upcoming__text">${overview}</p>
      </div>

      <button class="btn btn--primary" data-movie-id="${id}" data-lable="upcoming" type="button">
        Add to my library
      </button>
    </div>`;

  return markup;
};
