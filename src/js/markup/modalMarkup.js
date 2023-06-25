export const modalMovieInfoMarkup = movie => {
  const {
    id,
    title,
    original_title,
    vote_average,
    vote_count,
    popularity,
    overview,
    genres,
    poster_path,
  } = movie;

  const genreList = genres.map(({ name }) => name).join(', ');
  let posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  if (!poster_path) {
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

  return `
    <div class="modal">
      <button class="modal__btn-close" type="button">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <img class ="modal__image" src="${posterUrl}" alt="${
    title || original_title
  }" />

      <div class="modal__content">
        <h2 class="modal__title">${title || original_title}</h2>
        
        <ul class="modal__list">
          <li class="modal__item">
            <div class="modal__desc">Vote / Votes</div>
            <div class="modal__value">
              <span class="tag">
                ${vote_average.toFixed(1)}
              </span>
              &nbsp;/&nbsp;
              <span class="tag">
                ${vote_count}
              </span>
            </div>
          </li>
          <li class="modal__item">
            <div class="modal__desc">Popularity</div>
            <div class="modal__value">${popularity.toFixed(1)}</div>
          </li>
          <li class="modal__item">
            <div class="modal__desc">Genre</div>
            <div class="modal__value">${genreList}</div>
          </li>
        </ul>

        <div class="modal__about">
          <h3 class="modal__subtitle">About</h3>
          <p class="modal__text">${overview}</p>
        </div>

        <button class="btn btn--secondary modal__btn" type="button" data-movie-id="${id}">
          Add to my library
        </button>
      
      </div>
    </div>
  `;
};

export const modalMovieVideoMarkup = ({ key }) => {
  return `
    <button class="iframe__close" type="button">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <iframe
    class="iframe"
    src="https://www.youtube.com/embed/${key}" 
    frameborder="0" 
    allowfullscreen></iframe>`;
};

export const modalNotFoundMarkup = text => {
  return `
    <div class="d-modal">
      <button class="d-modal__btn-close" type="button">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <p class="d-modal__text">
        OOPS...<br/>
        We are very sorry!<br/>
        But we couldn’t find the ${text}.
      </p>
      <picture class="d-modal__picture">
        <!-- Desktop-->
        <source
          type="image/png"
          media="(min-width: 1280px)"
          srcset="
          ${new URL(
            '/src/images/img/desktop/default-movie-img.png',
            import.meta.url
          )}   1x,
          ${new URL(
            '/src/images/img/desktop/default-movie-img@2x.png',
            import.meta.url
          )}   2x"
        />
        
        <!-- Tablet-->
        <source
          type="image/png"
          media="(min-width: 768px)"
          srcset="
          ${new URL(
            '/src/images/img/tablet/default-movie-img.png',
            import.meta.url
          )}   1x,
          ${new URL(
            '/src/images/img/tablet/default-movie-img@2x.png',
            import.meta.url
          )}   2x"
        />

        <!-- ?Mobile -->
        <source
          type="image/png"
          media="(max-width: 767px)"
          srcset="
          ${new URL(
            '/src/images/img/mobile/default-movie-img.png',
            import.meta.url
          )}   1x,
          ${new URL(
            '/src/images/img/mobile/default-movie-img@2x.png',
            import.meta.url
          )}   2x"
        />

        <img
          class="modal__img" 
          src="
          ${new URL(
            '/src/images/img/mobile/default-movie-img.png',
            import.meta.url
          )}"
          alt="${text} not found"
        />
      </picture>
    </div>
  `;
};
