let stocks = {
    Fruits: ['Apple', 'banana', 'strawberry', 'papaya'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'bowl', 'cup'],
    toppings: ['chocolate', 'nuts', 'peanuts']
};
/* let is_shop_open=true;
let order=(time,work)=>{
    return new Promise((res,rej)=>{
        if (is_shop_open) {
            setTimeout(() => {
                res(work());
            }, time);
        } else {
            rej(console.log("sorry sir! shop is closed"));
        }
    });
};
order(2000,()=>console.log(`${stocks.Fruits[0]} is selected`)); */

let is_shop_open=true;
let order=(time,work)=>{

    return new Promise((resolver,rejection)=>{
        if (is_shop_open) {
            setTimeout(() => {
                resolver(work());
            }, time);
        } else {
            rejection(console.log("sorry sir! shop is closed"));
        }
    });
};
order(2000,()=>console.log(`${stocks.Fruits[0]} is selected`))

.then(()=>{
    return order(0000,()=>console.log('production is started')); 
})

.then()


.then()