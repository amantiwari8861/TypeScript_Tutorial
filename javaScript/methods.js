
// greet();
// function greet()
// {
//     console.log("Good Morning!");
// }

// let sum= function add() { return 10+20};
// console.log(sum());

// let sum1= function () { return 10+20};
// console.log(sum1());
// let sum1=  () => { return 10+20};
// console.log(sum1());

// let sum1=  function abc(a,b) { console.log("i am adding "); return a+b};

// console.log(sum1(20,30));

// let num=sum1(22,33);
// console.log(num);

// let sum1=  function(a,b) { console.log("i am adding "); return a+b};

// let num=sum1(22,33);
// console.log(num);

// let sum1= (a,b) => console.log("i am adding "+a+" "+b); 
// let sum1= (a,b) => a+b; 

// let num=sum1(22,33);
// console.log(num);


// let num=10;

// console.log("num="+num+" hai");

// console.log(" "aman"  ");
// console.log(" 'aman'  ");
// console.log(' 'aman'  ');

// console.log(" \"aman\"  ");
// console.log(" \"aman  ");
// console.log('  \'aman\'  ');
// console.log('  \'aman  ');
// console.log('  \ aman  ');
// console.log('  \\ aman  ');
// console.log('  am\ban  ');
// console.log('  am\tan  ');
// console.log('  am\nan  ');
// console.log('  am\van  ');

// console.log(`num ki value ${num} hai "aman"  'hemant'    `);

let stocks = {
    company:"Cream Bells",
    "shops":"4",
    Fruits: ['Apple', 'banana', 'strawberry', 'papaya'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'bowl', 'cup'],
    toppings: ['chocolate', 'nuts', 'peanuts'],
    base:["base1",["subbase","subbase2"]]
};
// console.log(stocks.Fruits[2])
// console.log(stocks.Fruits["Apple"])
// console.log(stocks["Fruits"])
// console.log(stocks["shops"])
// console.log(stocks["company"])
// console.log(stocks.base);
// console.log(stocks.base[1]);
// console.log(stocks.base[1][1]);


// console.log(stocks);
// console.table(stocks)

let obj='{"firstName":"John", "lastName":"Doe"}'

console.log(JSON.parse(obj))