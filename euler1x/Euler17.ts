const and = 3;
const hundred = 7;
const thousand = 8;
const ones = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4, 3, 6, 6, 8, 8, 7, 7, 9, 8, 8];
const tens = [0, 0, 6, 6, 5, 5, 5, 7, 6, 6];
const one = 3;

const getLetterCount = (n: number): number => {
  if (n < 20) {
    return ones[n];
  } else if (n < 100) {
    return tens[Math.floor(n / 10)] + ones[n % 10];
  } else if (n == 1000) {
    return ones[1] + thousand;
  } else if (n % 100 == 0) {
    return ones[Math.floor(n / 100)] + hundred;
  } else {
    return ones[Math.floor(n / 100)] + hundred + and + getLetterCount(n % 100);
  }
};

export class Euler {
  run(): void {
    let sum = 0;
    for (let n = 1; n <= 1000; n++) {
      sum += getLetterCount(n);
    }

    console.log(`FINAL ${sum}`);
  }
}
