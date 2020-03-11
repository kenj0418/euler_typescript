const range = (min: number, max: number, step?: number): Array<number> => {
  const actualStep = step ? step : 1;
  let arr = [];
  for (let i = min; i <= max; i += actualStep) {
    arr.push(i);
  }
  return arr;
};

const calculateSquares = (max: number): Array<number> =>
  range(0, max).map((n: number): number => n * n);

export class Euler {
  static run(): void {
    const squares: Array<number> = calculateSquares(1000);

    let maxSoFar = 0;
    for (let a = 1; a < 333; a++) {
      for (let b = a + 1; b < 500; b++) {
        const c = 1000 - a - b;
        if (squares[c] == squares[a] + squares[b]) {
          console.log(`a=${a}, b=${b}, c=${c}`);
          console.log(`abc=${a * b * c}`);
          return;
        }
      }
    }
  }
}
