import { Euler } from "./euler0x/Euler5";

const start = new Date().getTime();

Euler.run();

const end = new Date().getTime();
console.log(`Elapsed time: ${end - start} ms`);
