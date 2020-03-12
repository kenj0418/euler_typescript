const sum = (arr: Array<number>): number => {
  return arr.reduce((acc, currVal) => acc + currVal);
};

export class Euler {
  run(): void {
    let n: bigint = BigInt(1);
    for (let i = 1; i <= 100; i++) {
      n = n * BigInt(i);
    }
    const st = n.toString();
    const total = sum(st.split("").map(ch => ch.charCodeAt(0) - 48));

    console.log(n);

    console.log(`FINAL ${total}`);
  }
}
