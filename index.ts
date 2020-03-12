import { Euler } from "./euler8x/Euler81";

const start = new Date().getTime();

new Euler().run();

const end = new Date().getTime();
console.log(`Elapsed time: ${end - start} ms`);
