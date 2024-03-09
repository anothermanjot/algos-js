import { swap } from "./swap.js";
/**
 *
 * @param {number} input array to be sorted.
 */
export default function sort(input) {
  for (let i = 0; i < input.length; i++) {
    let max = 0;
    for (let j = 0; j < input.length - 1 - i; j++) {
      if (input[j] > input[j + 1]) {
        max = j;
      } else max = j + 1;
    }
    if (max != input.length - 1 - i) {
      swap(input, max, input.length - 1 - i);
    }
  }
  return input;
}
