import benchmark from "benchmark";
import bubbleSort from "../bubbleSort.js";
import insertionSort from "../insertionSort.js";
import selectionSort from "../selectionSort.js";
const suite = new benchmark.Suite();

const input = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 40)
);
suite
  .add("bubbleSort", function () {
    bubbleSort(input);
  })
  .add("insertionSort", function () {
    insertionSort(input);
  })
  .add("selectionSort", function () {
    selectionSort(input);
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
