/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

export class Euler {
  static run(): void {
    // assume number not divisible by 2 (which this one obviously isn't)
    let num = 600851475143;
    let maxSoFar = 1;
    let factor = 3;
    let stopAt = Math.floor(Math.sqrt(num));

    while (factor <= num) {
      while (!(num % factor)) {
        num /= factor;
        maxSoFar = factor;
      }
      factor += 2;
      stopAt = Math.floor(Math.sqrt(num));
    }

    if (num > maxSoFar) {
      num = maxSoFar;
    }

    console.log("Maximum Factor: ", maxSoFar);
  }
}
