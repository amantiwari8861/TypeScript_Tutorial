"use strict";
exports.__esModule = true;
var moduleDemo_1 = require("./moduleDemo");
var util = new moduleDemo_1.Utility();
var price = util.CalculateAmount(1350, 4);
console.log("price is:", price);
// import { Utility as mainUtility, Category, productName, MaxDiscountAllowed } from "./moduleDemo";
// const discount = MaxDiscountAllowed(2);
// console.log(`Maximum discount allowed is: ${discount}`);
// console.log(`Amount to be paid: ${price}`);
// console.log(`ProductName is: ${productName}`);
// tsc moduleDemo.ts moduleImports.ts
// node moduleImports.js
