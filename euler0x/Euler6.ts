const range = (min: number, max: number, step?: number): Array<number> => {
  const actualStep = step ? step : 1;
  let arr = [];
  for (let i = min; i <= max; i += actualStep) {
    arr.push(i);
  }
  return arr;
};

const isMulThreeOrFive = (n: number): boolean => {
  return n % 3 == 0 || n % 5 == 0;
};

const sum = (arr: Array<number>): number => {
  return arr.reduce((acc, currVal) => acc + currVal);
};

export class Euler {
  static run(): void {
    const natural = range(1, 100);
    // console.log(natural);
    const squares = natural.map(n => n * n);
    // console.log(squares);
    const sumNatural = sum(natural);
    // console.log(sumNatural);
    const sumSquares = sum(squares);
    // console.log(sumSquares);

    console.log("Diff: ", sumNatural * sumNatural - sumSquares);
  }
}
