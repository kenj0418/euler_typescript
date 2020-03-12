import * as fs from "fs";

const toNumber = (st: string): number => parseInt(st);

const readFileAsArray = (filename: string): Array<Array<number>> =>
  fs
    .readFileSync(filename)
    .toString()
    .split("\n")
    .filter(st => st.length)
    .map((st: string): Array<number> => st.split(",").map(toNumber));

let minPathCache: Array<Array<number>> = [];

const getMinPathRaw = (
  dist: Array<Array<number>>,
  rowNum: number,
  colNum: number
): number => {
  const myVal = dist[rowNum][colNum];
  if (rowNum == 0 && colNum == 0) {
    return myVal;
  } else if (rowNum == 0) {
    return getMinPath(dist, 0, colNum - 1) + myVal;
  } else if (colNum == 0) {
    return getMinPath(dist, rowNum - 1, 0) + myVal;
  } else {
    return (
      Math.min(
        getMinPath(dist, rowNum - 1, colNum),
        getMinPath(dist, rowNum, colNum - 1)
      ) + myVal
    );
  }
};

const getMinPathCached = (
  cache: Array<Array<number>>,
  rowNum: number,
  colNum: number
): number | undefined => {
  if (cache && cache[rowNum]) {
    return cache[rowNum][colNum];
  } else {
    return undefined;
  }
};

const setMinPathCached = (
  cache: Array<Array<number>>,
  rowNum: number,
  colNum: number,
  value: number
): void => {
  if (!cache) return;

  if (!cache[rowNum]) {
    cache[rowNum] = [];
  }

  cache[rowNum][colNum] = value;
};

const getMinPath = (
  dist: Array<Array<number>>,
  rowNum: number,
  colNum: number
): number => {
  const cachedValue = getMinPathCached(minPathCache, rowNum, colNum);
  if (cachedValue) {
    return cachedValue!;
  }

  const calcedValue = getMinPathRaw(dist, rowNum, colNum);
  setMinPathCached(minPathCache, rowNum, colNum, calcedValue);
  return calcedValue;
};

export class Euler {
  run(): void {
    const nums = readFileAsArray("./euler8x/p081_matrix.txt");
    const size = nums.length;

    // console.log(nums);
    console.log(`FINAL ${getMinPath(nums, size - 1, size - 1)}`);
  }
}
