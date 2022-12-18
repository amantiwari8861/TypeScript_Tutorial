function add<datatype>(num1:datatype,num2:datatype):any
{
    if(typeof(num1)=='string' && typeof(num2)=='string')
    {
        return (num1 as string).concat(num2 as string);
    }
    else if(typeof(num2)=='number' && typeof(num2)=='number')
    {
        return (num1 as number)+(num2 as number);
    }
    else
    {
        return "this operation is not allowed";
    }
}
console.log(add(10,20));
console.log(add("Hello ","Aman"));
// console.log(add(10,"Aman")); //error



// function add<datatype>(num1:datatype,num2:datatype):datatype
// {
//         return typeof(num1) as datatype;
    
// }
// console.log(add<number>(10,20));
// console.log(add<string>("Hello ","Aman"));

// function add2<datatype,T>(num1:datatype,num2:T):string
// {
//     return 'the first one is '+typeof(num1) +' and second one is '+typeof(num2) ;
// }
// console.log(add2<number,number>(10,20));
// console.log(add2<string,string>("Hello ","Aman"));
// console.log(add2<number,string>(10,"Aman"));



// function add<datatype>(num1:datatype,num2:datatype):datatype
// {
//         return num1+num2; //error
// }
// console.log(add<number>(10,20));
// console.log(add<string>("Hello ","Aman"));

// function add(num1:any,num2:any):any
// {
//     return num1+num2;
// }
// console.log(add(10,20));
// console.log(add("Hello ","Aman"));