export const randomIndex = (num = 1) => {
  const result = [];
  let index;
  let prevIndex = null;

  while (result.length < 3) {
    index = Math.floor(Math.random() * 20);
    if (index === prevIndex || result.includes(index)) {
      continue;
    }
    prevIndex = index;
    result.push(index);
  }

  return result;
};
