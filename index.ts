import { Euler } from "./euler1x/Euler19";

const start = new Date().getTime();

new Euler().run();

const end = new Date().getTime();
console.log(`Elapsed time: ${end - start} ms`);
