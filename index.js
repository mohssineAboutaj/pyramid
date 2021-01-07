class Pyramid {
  /**
   * stones count to slice from both edge
   */
  toSlice = 2;

  /**
   * @description stones trimer
   *
   * @param {String} stones
   *
   * @returns trimed stones line
   */
  stoneTrimer(stones) {
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
  pyramidBuilder(stones, j) {
    return " ".repeat(j) + "/" + this.stoneTrimer(stones) + "\\";
  }

  // show output
  constructor(middleStone, zigZagIn = 1, toSlice = this.toSlice) {
    for (
      let i = (middleStone.length - 1) / (toSlice > 2 ? toSlice : 2);
      i > 0;
      i--
    ) {
      if (zigZagIn > 1 && toSlice >= 2) {
        if (!(i % zigZagIn > zigZagIn - 1)) {
          console.log(this.pyramidBuilder(middleStone.slice(i * toSlice), i));
        }
      } else {
        console.log(this.pyramidBuilder(middleStone.slice(i * toSlice), i));
      }
    }
  }
}

// set variables & create new instance to build the pyramid
const middleStone = "x".repeat(60);
new Pyramid(middleStone, middleStone.length / 10);
