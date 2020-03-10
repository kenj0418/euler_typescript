/*
If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

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
    const below1000 = range(1, 999);
    const multiples = below1000.filter(isMulThreeOrFive);
    const total = sum(multiples);
    console.log("SUM: ", total);
  }
}
