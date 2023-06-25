const gradients = {
  v320: 'linear-gradient(86.47deg, #111111 33.63%, rgba(17, 17, 17, 0) 76.86%)',
  v768: 'linear-gradient(81.57deg, #111111 12.76%, rgba(17, 17, 17, 0) 72.65%)',
  v1280:
    'linear-gradient(83.06deg, #111111 11.91%, rgba(17, 17, 17, 0) 73.11%)',
};

export const heroMarkup = movie => {
  const { id, title, original_title, overview, backdrop_path, vote_average } =
    movie;

  const params = {
    gradient: `${gradients.v320}`,
    url: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
    bg: 'background-size: cover; background-repeat: no-repeat;',
  };

  if (window.innerWidth < 768) {
    params.bg =
      'background-size: 768px; background-position: center; background-repeat: no-repeat;';
  }

  if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    params.gradient = gradients.v768;
  }

  if (window.innerWidth >= 1280) {
    params.gradient = gradients.v1280;
  }

  return `
    <div
      class="hero__wrap"
      style="background: ${params.gradient}, ${params.url}; ${params.bg}"
    >
      <div class="container">
        <div class="hero__inner">
          <h1 class="hero__title">${title || original_title}</h1>
          <div class="rating hero__rating">
            <div class="rating__body">
              <div
                class="rating__active"
                style="width: ${vote_average * 10}%;"
              ></div>
              <div class="rating__items">
                <input
                  type="radio"
                  class="rating__item"
                  value="1"
                  name="rating"
                />
                <input
                  type="radio"
                  class="rating__item"
                  value="2"
                  name="rating"
                />
                <input
                  type="radio"
                  class="rating__item"
                  value="3"
                  name="rating"
                />
                <input
                  type="radio"
                  class="rating__item"
                  value="4"
                  name="rating"
                />
                <input
                  type="radio"
                  class="rating__item"
                  value="5"
                  name="rating"
                />
              </div>
            </div>
          </div>
          <p class="hero__text hero__text--trunc">${overview}</p>
          <div class="btn-group" data-movie-id="${id}">
            <button class="btn btn--primary" data-movie="video">
              Watch trailer
            </button>
            <button class="btn btn--secondary" data-movie="info">
              More details
            </button>
          </div>
        </div>
      </div>
    </div>`;
};

export const heroMarkupDefault = () => {
  return `
    <div class="hero__wrap">
      <div class="container">
        <div class="hero__inner">
          <h1 class="hero__title hero__title--default">
            Let’s Make Your Own Cinema
          </h1>
          <p class="hero__text">
            Is a guide to creating a personalized movie theater experience.
            You'll need a projector, screen, and speakers.
            <span class="hero__text--add">
              Decorate your space, choose your films, and stock up on snacks for
              the full experience.
            </span>
          </p>

          <div class="btn-group">
            <a href="./catalog.html">
              <button class="btn btn--primary">Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
};
