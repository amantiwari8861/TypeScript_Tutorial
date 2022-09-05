import { Utility as mainUtility} from "./moduleDemo";

const util = new mainUtility();
const price = util.CalculateAmount(1350, 4);
console.log(`price is:`, price);


import {  Category, productName, MaxDiscountAllowed } from "./moduleDemo";

const discount = MaxDiscountAllowed(2);
console.log(`Maximum discount allowed is: ${discount}`);
console.log(`Amount to be paid: ${price}`);
console.log(`ProductName is: ${productName}`);

// tsc moduleDemo.ts moduleImports.ts   //transpiling more than 1 file
// node moduleImports.js //running Main file

//or

//tsc moduleDemo.ts
//tsc moduleImports.ts
//node moduleImports.js