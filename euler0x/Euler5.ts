/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

/*
 2   3 5 7 9
 2^3 3^2 5 7
*/

/*
 2   3   5 7 11 13 17 19
 2^4 3^2 5 7 11 13 17 19
*/

export class Euler {
  static run(): void {
    //const answer = 2 * 2 * 2 * 3 * 3 * 5 * 7;
    const answer = 2 * 2 * 2 * 2 * 3 * 3 * 5 * 7 * 11 * 13 * 17 * 19;

    console.log("Answer: ", answer);
  }
}
