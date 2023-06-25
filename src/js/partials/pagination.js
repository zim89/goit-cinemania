const Pagination = require('tui-pagination');

import { renderCatalogMovieList, renderSearchMovieList } from './catalog';
import { scrollUp } from '../utils/scroll-up';

const initPagination = (totalItems, page = 1, query = '') => {
  const options = {
    totalItems,
    itemsPerPage: 20,
    visiblePages: 3,
    page,
    centerAlign: true,
    firstItemClassName: 'pagination--first',
    lastItemClassName: 'pagination--last',
    template: {
      page: '<a href="#" class="pagination__btn">{{page}}</a>',
      currentPage:
        '<strong class="pagination__btn pagination__btn--current">{{page}}</strong>',
      moveButton:
        '<a href="#" class="pagination__btn pagination__btn--{{type}}"></a>',
      disabledMoveButton:
        '<a href="#" class="pagination__disabled pagination__btn--{{type}}"></a>',
      moreButton:
        '<a href="#" class="pagination__btn pagination__btn--{{type}}-ellipsis">' +
        '<i class="fa-solid fa-ellipsis"></i>' +
        '</a>',
    },
  };

  const container = document.getElementById('pagination');
  const instance = new Pagination(container, options);

  instance.on('beforeMove', function (eventData) {
    !query
      ? renderCatalogMovieList(eventData.page)
      : renderSearchMovieList(query, eventData.page);
    scrollUp();
  });

  instance.on('afterMove', function (eventData) {});

  return instance;
};

export default initPagination;
