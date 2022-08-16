// arr=[12,45,67,88,98]
arr2=[6,2,3,4,5]

// arr.forEach(itr)
// function itr(e) 
// {
//     console.log(e);
// }


// let num2=arr.map((value, index) => {return value+" at index "+index})
// let num2=arr.map(change1)

// function change1(v,i) {
//     return v+" at index "+i;
// }

// console.log(num2)

// let greater=arr.filter(filterByGreater)
// let smaller=arr.filter(filterBySmaller)


// function filterByGreater(e) {
//     return e>50;
// }
// function filterBySmaller(e) {
//     return e<50;
// }

// console.log(greater);
// console.log(smaller);



// let res=arr.reduce((sum, v) =>  sum+v );
// console.log(res);

let mul=arr2.reduce(multi,0); //must give initial value
let a=0;
function multi(a,e) {
    // console.log(a+(e*2));
    return a=a+(e*2);
}

console.log(mul);
