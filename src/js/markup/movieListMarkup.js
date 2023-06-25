import { getGenreNames } from '../utils/genre-names';

export const movieListMarkup = movie => {
  let posterBgStyles;
  const {
    id,
    title,
    original_title,
    poster_path,
    release_date,
    genre_ids,
    vote_average,
  } = movie;

  poster_path
    ? (posterBgStyles = `
      style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), url(https://image.tmdb.org/t/p/original/${poster_path}); background-repeat: no-repeat; background-size: cover;"`)
    : (posterBgStyles = `
      style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), url(${new URL(
        '/src/images/img/mobile/default-movie-img@2x.png',
        import.meta.url
      )}); background-repeat: no-repeat; background-size: contain;"`);

  const genres = getGenreNames(genre_ids)[0];

  markup = `
    <li class="movie__item" data-movie-id="${id}" ${posterBgStyles}>
      <h3 class="movie__title">${title || original_title}</h3>
      <div class="movie__meta">
        <p class="movie__text">${genres} | ${
    release_date ? release_date.slice(0, 4) : 'No date'
  }</p>
        <div class="rating movie__rating">
          <div class="rating__body">
            <div class="rating__active" style="width: ${
              vote_average * 10
            }%;"></div>
            <div class="rating__items">
              <input type="radio" class="rating__item" value="1" name="rating" />
              <input type="radio" class="rating__item" value="2" name="rating" />
              <input type="radio" class="rating__item" value="3" name="rating" />
              <input type="radio" class="rating__item" value="4" name="rating" />
              <input type="radio" class="rating__item" value="5" name="rating" />
            </div>
          </div>
        </div>
      </div>
    </li>`;

  return markup;
};

export const libMovieListMarkup = movie => {
  let posterBgStyles;
  const {
    id,
    title,
    original_title,
    poster_path,
    release_date,
    genres,
    vote_average,
  } = movie;

  poster_path
    ? (posterBgStyles = `
      style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), url(https://image.tmdb.org/t/p/original/${poster_path}); background-repeat: no-repeat; background-size: cover;"`)
    : (posterBgStyles = `
      style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), url(${new URL(
        '/src/images/img/mobile/default-movie-img@2x.png',
        import.meta.url
      )}); background-repeat: no-repeat; background-size: contain;"`);

  const genreList = genres.map(genre => genre.name)[0];

  markup = `
    <li class="movie__item" data-movie-id="${id}" ${posterBgStyles}>
      <h3 class="movie__title">${title || original_title}</h3>
      <div class="movie__meta">
        <p class="movie__text">${genreList} | ${
    release_date ? release_date.slice(0, 4) : 'No date'
  }</p>
        <div class="rating movie__rating">
          <div class="rating__body">
            <div class="rating__active" style="width: ${
              vote_average * 10
            }%;"></div>
            <div class="rating__items">
              <input type="radio" class="rating__item" value="1" name="rating" />
              <input type="radio" class="rating__item" value="2" name="rating" />
              <input type="radio" class="rating__item" value="3" name="rating" />
              <input type="radio" class="rating__item" value="4" name="rating" />
              <input type="radio" class="rating__item" value="5" name="rating" />
            </div>
          </div>
        </div>
      </div>
    </li>`;

  return markup;
};
