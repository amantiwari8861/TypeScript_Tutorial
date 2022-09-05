var Utility;
(function (Utility) {
    //Nested Namespace
    var Payment;
    (function (Payment) {
        function CalculateAmount(price, quantity) {
            return price * quantity;
        }
        Payment.CalculateAmount = CalculateAmount;
    })(Payment = Utility.Payment || (Utility.Payment = {}));
    function MaxDiscountAllowed(noOfProduct) {
        if (noOfProduct > 5) {
            return 40;
        }
        else {
            return 10;
        }
    }
    Utility.MaxDiscountAllowed = MaxDiscountAllowed;
    function privateFunc() {
        console.log('This is private...');
    }
})(Utility || (Utility = {}));
// /// <reference path="./namespaceDemo.ts" />
// //nested namespace using
// import util =Utility.Payment;
// let paymentAmount = util.CalculateAmount(1255, 6);
// console.log(`Amount to be paid: ${paymentAmount}`);
var discount = Utility.MaxDiscountAllowed(6);
console.log("Maximum discount allowed is: ".concat(discount));
// tsc --outFile Final.js namespaceDemo.ts TestNamespace.ts
// node Final.js
