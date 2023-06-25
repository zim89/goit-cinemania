import { randomIndex } from '../utils/random-index';
import { movieListMarkup } from './movieListMarkup';

export const trendsMarkup = movies => {
  let indexList;

  window.innerWidth < 768
    ? (indexList = randomIndex())
    : (indexList = randomIndex(3));

  const markup = indexList
    .map(index => movieListMarkup(movies[index]))
    .join('');

  return markup;
};
