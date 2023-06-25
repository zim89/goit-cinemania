import { genres } from '/src/data/genres.json';

export const getGenreNames = arr => {
  const result = [];

  if (arr.length === 0) {
    result.push('No genres');
    return result;
  }

  genres.forEach(({ id, name }) => {
    if (arr.includes(id)) {
      result.push(name);
    }
  });
  return result;
};
