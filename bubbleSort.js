import { swap } from "./swap.js";

/**
 *
 * @param {number[]} input array to be sorted.
 * @return {void}
 */
export default function sort(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length - 1; j++) {
      if (input[j] > input[j + 1]) {
        swap(input, j, j + 1);
      }
    }
  }
  return input;
}
