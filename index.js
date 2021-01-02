// variables & options
const s = "x";
const middleStone = s.repeat(40);
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
  delete stones[0];
  delete stones[stones.length - 1];

  // convert to String
  stones = stones.toString().replace(/,/g, "");

  // result
  return stones;
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
  const rightEdge = "\\";
  const leftEdge = "/";

  if (stones.length > 1) {
    return " ".repeat(j) + leftEdge + stoneTrimer(stones) + rightEdge;
  }
}

// show output
for (let i = start; i > 0; i--) {
  if (zigZagIn > 1 && toSlice >= 2) {
    if (i % zigZagIn > zigZagIn - 1) {
      continue;
    } else {
      console.log(pyramidBuilder(middleStone.slice(i * toSlice), i));
    }
  } else {
    console.log(pyramidBuilder(middleStone.slice(i * toSlice), i));
  }
}
