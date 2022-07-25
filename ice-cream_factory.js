//callback chaining hell
let stocks = {
    Fruits: ['Apple', 'banana', 'strawberry', 'papaya'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'bowl', 'cup'],
    toppings: ['chocolate', 'nuts', 'peanuts']
};
let order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} flavoured ice-cream is selected`);
        call_production();
        // console.log("take feedback after serving the ice-cream");//not a part of fxn calling stack
    }, 2000);
}
let production = () => {
    setTimeout(() => {
        console.log('order is placed')
        setTimeout(() => {
            console.log(`cutting the ${stocks.Fruits[0]}`);
            setTimeout(() => {
                console.log(`adding the ${stocks.liquid[0]} and ${stocks.liquid[1]}`);
                setTimeout(() => {
                    console.log('starting the machine');
                    setTimeout(() => {
                        console.log(`selecting the ${stocks.holder[0]} for putting ice-cream`);
                        setTimeout(() => {
                            console.log(`selecting the ${stocks.toppings[0]} topping`);
                            setTimeout(() => {
                                console.log("now serve the ice-cream");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 2000);
}
order(0, production);//callback