// variables & options
const middleStone = "x".repeat(60);
const toSlice = 2;
const start = (middleStone.length - 1) / (toSlice > 2 ? toSlice : 2);
const zigZagIn = middleStone.length / 10;

/**
 * @description stones trimer
 *
 * @param {String} stones
 *
 * @returns trimed stones line
 */
function stoneTrimer(stones) {
  // convert to Array
  stones = Array.from(stones);

  // delete edge
  delete stones[stones.length - 1];
  delete stones[0];

  // convert to String
  return stones.toString().replace(/,/g, "");
}

/**
 * @description the pyramid builder
 *
 * @param {String} stones
 * @param {Number} j
 *
 * @returns line stones with edge
 */
function pyramidBuilder(stones, j) {
  return " ".repeat(j) + "/" + stoneTrimer(stones) + "\\";
}

// show output
for (let i = start; i > 0; i--) {
  if (zigZagIn > 1 && toSlice >= 2) {
    if (!(i % zigZagIn > zigZagIn - 1)) {
      console.log(pyramidBuilder(middleStone.slice(i * toSlice), i));
    }
  } else {
    console.log(pyramidBuilder(middleStone.slice(i * toSlice), i));
  }
}
