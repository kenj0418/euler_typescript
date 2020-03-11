import * as fs from "fs";

const readFileAsArray = (filename: string): Array<BigInt> =>
  fs
    .readFileSync(filename)
    .toString()
    .split("\n")
    .filter(st => st.length)
    .map((st: string): BigInt => BigInt(st));

const sum = (arr: Array<BigInt>): BigInt =>
  arr.reduce((acc, currVal) => acc.valueOf() + currVal.valueOf());

export class Euler {
  static run(): void {
    const numbers: Array<BigInt> = readFileAsArray("./euler1x/data13.txt");
    const total = sum(numbers);
    const st = total.toString();
    console.log("Start: " + st.slice(0, 10));
  }
}
