import { swap } from "./swap.js";

/**
 * @param {number[]} input array to be sorted.
 * @return {void}
 */
export default function sort(input) {
  for (let i = 0; i < input.length - 2; i++) {
    const j = i;
    do {
      if (input[j + 1] < input[j]) {
        swap(input, j, j + 1);
      } else break;
    } while (j > 0);
  }
  return input;
}
