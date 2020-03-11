import { Euler } from "./euler1x/Euler13";

const start = new Date().getTime();

Euler.run();

const end = new Date().getTime();
console.log(`Elapsed time: ${end - start} ms`);
