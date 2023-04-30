import isOdd from "is-odd";
import { helloFromSub } from "./sub.js";

// const myModule = require('./sub.js')
helloFromSub();
const oddy = isOdd(3);
console.log(oddy);
