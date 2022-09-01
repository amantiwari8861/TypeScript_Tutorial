function getProductDetails2(productobj) {
    return "the productid is " + productobj.productId;
}
var prodObject4 = { productId: 20000, getDetails: function () { console.log("hiii"); } };
var productDetails3 = getProductDetails2(prodObject4);
console.log(productDetails3);
