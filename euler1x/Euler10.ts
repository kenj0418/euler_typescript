/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

const isPrime = (n: number, primes: Array<number>): boolean => {
  const factor = primes.find(prime => n % prime == 0);
  return !factor;
};

const sum = (arr: Array<number>): number => {
  return arr.reduce((acc, currVal) => acc + currVal);
};

export class Euler {
  static run(): void {
    const stopAt = 2000000;
    let primes: Array<number> = [2];
    let nextCandidate = 3;

    while (nextCandidate < stopAt) {
      if (isPrime(nextCandidate, primes)) {
        primes.push(nextCandidate);
      }

      nextCandidate += 2;
    }

    console.log("sum: ", sum(primes));
  }
}
