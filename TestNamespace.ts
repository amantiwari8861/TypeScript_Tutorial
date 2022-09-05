/// <reference path="./namespaceDemo.ts" />
// //nested namespace using
// import util =Utility.Payment;
// let paymentAmount = util.CalculateAmount(1255, 6);
// console.log(`Amount to be paid: ${paymentAmount}`);


let discount = Utility.MaxDiscountAllowed(6);
console.log(`Maximum discount allowed is: ${discount}`);

// tsc --outFile Final.js namespaceDemo.ts TestNamespace.ts
// node Final.js