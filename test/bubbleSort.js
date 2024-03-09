import { expect } from "chai";
import bubbleSort from "../bubbleSort.js";
import insertionSort from "../insertionSort.js";
import selectionSort from "../selectionSort.js";
describe("Sort", function () {
  it("Bubble Sort", function () {
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9]).to.deep.equal(
      bubbleSort([1, 3, 2, 4, 5, 7, 6, 8, 9])
    );
  });
  it("Insertion Sort", function () {
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9]).to.deep.equal(
      insertionSort([1, 3, 2, 4, 5, 7, 6, 8, 9])
    );
  });
  it("Selection Sort", function () {
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9]).to.deep.equal(
      selectionSort([1, 3, 2, 4, 5, 7, 6, 8, 9])
    );
  });
});
