/*
  f(n)=n^2+an+b, where |a|<1000 and |b|≤1000
  where f(n) is prime for most consecutive n starting with n=0
*/

export class Euler {
  private stopAt: number;
  private primes: Array<number>;

  constructor() {
    this.primes = [2, 3];
    this.stopAt = 3;
  }

  checkPrime(n: number): boolean {
    const factor = this.primes.find(prime => n % prime == 0);
    return !factor;
  }

  loadPrimes(newStopPoint: number): void {
    if (newStopPoint < this.stopAt) {
      return;
    }

    const start = new Date().getTime();
    console.log(`Loading primes to ${newStopPoint}`);

    let nextCandidate = this.stopAt + 2;
    this.stopAt = newStopPoint;

    while (nextCandidate < this.stopAt) {
      if (this.checkPrime(nextCandidate)) {
        this.primes.push(nextCandidate);
      }

      nextCandidate += 2;
    }
    console.log("Primes Loaded");
    const end = new Date().getTime();
    console.log(`Elapsed time: ${end - start} ms`);
  }

  isPrime(n: number): boolean {
    this.loadPrimes(n);
    return this.primes.indexOf(n) >= 0;
  }

  getPrimeCount(a: number, b: number): number {
    let n = 0;
    while (this.isPrime((a + n) * n + b)) {
      n++;
    }
    return n;
  }

  run(): void {
    this.loadPrimes(2000000);

    let maxA = 0;
    let maxB = 0;
    let maxPrimesSoFar = 0;

    for (let a = -999; a <= 999; a++) {
      for (let b = -1000; b <= 1000; b++) {
        const countPrimes = this.getPrimeCount(a, b);
        if (countPrimes > maxPrimesSoFar) {
          maxA = a;
          maxB = b;
          maxPrimesSoFar = countPrimes;
          console.log(
            `a=${maxA}, b=${maxB} ab=${maxA * maxB}, count:${maxPrimesSoFar}`
          );
        }
      }
    }

    console.log(
      `FINAL a=${maxA}, b=${maxB} ab=${maxA * maxB}, count:${maxPrimesSoFar}`
    );
  }
}
