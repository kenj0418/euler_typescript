/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10,001st prime number?
*/

const isPrime = (n: number, primes: Array<number>): boolean => {
  const factor = primes.find(prime => n % prime == 0);
  return !factor;
};

export class Euler {
  static run(): void {
    const stopAt = 10001;
    let primes: Array<number> = [2];
    let nextCandidate = 3;

    while (primes.length < stopAt) {
      if (isPrime(nextCandidate, primes)) {
        primes.push(nextCandidate);
      }

      nextCandidate += 2;
    }

    console.log("prime: ", primes[stopAt - 1]);
  }
}
