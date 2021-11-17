/**
 * Generates a number between min and max.
 * @param {number} min
 * @param {number} max
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default (min, max) => {
  return Math.floor(Math.random() * max) + min;
};
