interface Product2 
{
    productId: number ;
    getDetails:()=>void;
}

function getProductDetails2(productobj: Product2): string 
{
    return "the productid is "+productobj.productId;
}

let prodObject4={productId:20000,getDetails:function(){console.log(`hiii`);}};

const productDetails3: string = getProductDetails2(prodObject4);
console.log(productDetails3);