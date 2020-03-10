/*
A palindromic number reads the same both ways. The largest palindrome made from the
product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const isPal = (n: number): boolean => {
  const st = new Number(n).toString();
  //this is quicker than looping and we are doing it a 10^6 ish times
  switch (st.length) {
    case 1:
      return true;
    case 2:
      return st[0] == st[1];
    case 3:
      return st[0] == st[2];
    case 4:
      return st[0] == st[3] && st[1] == st[2];
    case 5:
      return st[0] == st[4] && st[1] == st[3];
    case 6:
      return st[0] == st[5] && st[1] == st[4] && st[2] == st[3];
    default:
      throw new Error(`n was larger than expected: ${n}`);
  }
};

export class Euler {
  static run(): void {
    let maxSoFar = 0;
    for (let a = 1; a < 1000; a++) {
      for (let b = a; b < 1000; b++) {
        const product = a * b;
        if (product > maxSoFar && isPal(product)) {
          maxSoFar = product;
        }
      }
    }

    console.log("Maximum Product: ", maxSoFar);
  }
}
