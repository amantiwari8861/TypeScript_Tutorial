// Type casting allows you to convert a variable from one type to another.
// Use the as keyword or <> operator for type castings.

// let num:unknown=56;
// console.log(typeof(num));

// let num2:string = num as string;
// console.log(num2.concat("items")) ;
// console.log(typeof(num2));

// let num3=(num as string).concat(" hai value");

// console.log(num3);


// let x: unknown = 'hello';
// let x: unknown = 98; //will give error
// console.log((x as string).length);
// console.log((x as string).concat(" items"));

// console.log((<string>x).length);
// console.log((<string>x).concat(" items"));

// let x2 = 'hello';
// console.log(((x2 as unknown) as string).length);

// let x3: unknown = 4;
// console.log((x3 as string).length);
// console.log(((x3 as unknown) as string).concat("items"));


// let x4 = 'hello';
// console.log(((x4 as unknown) as number).length);