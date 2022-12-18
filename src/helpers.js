export const pickRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

export const arrayDifference = (array1, array2) =>
  array1.filter((val) => !array2.includes(val));

export const mapIds = (array) => array.map(({ id }) => id);
