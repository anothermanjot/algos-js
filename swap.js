/**
 * swap two elements.
 * @param {number[]} input The array to be sorted.
 * @param {number} x The first element index.
 * @param {number} y  The second element index.
 * @return {void} The sum of the two numbers.
 */
export function swap(input, x, y) {
  input[x] = input[x] * input[y];
  input[y] = input[x] / input[y];
  input[x] = input[x] / input[y];
}
