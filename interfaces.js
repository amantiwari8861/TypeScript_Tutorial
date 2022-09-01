// logic to display the Product details with interface object as parameter
function getProductDetails(productobj) {
    return 'The product name is : ' + productobj.productName;
}
// declaring a variable having interface properties
// const prodObject = {productId: 1001, productName: 'Mobile'};
// const productDetails: string = getProductDetails(prodObject);
// // line to populate the created product on console
// console.log(productDetails);
// // declaring variable and invoking Product details function
// let prodObject1={productName:'Mobile', productPrice:10000};
// const productDetails1: string = getProductDetails(prodObject1);
// // line to populate the created product on console
// console.log(productDetails1);
// declaring variable and invoking Product details function
var prodObject2 = { productId: 1001, productName: 'Mobile', productPrice: 10000 };
var productDetails2 = getProductDetails(prodObject2);
// line to populate the created product on console
console.log(productDetails2);
