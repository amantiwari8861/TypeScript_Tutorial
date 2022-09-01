interface Person {
    name: string;
    age: number;
    toString: () => string;
}

let p1: Person = {
    name: "Richards", age: 40, toString: function () {
        return this.name + ":" + this.age;
    }
};
function print2(v: Person) {
    console.log(v.toString());
}
print2(p1);

//---------------------------------------------------------------

// interface Person {
//     name: string;
//     age: number;
//     toString: () => void;
// }

// let p1: Person = {
//     name: "Richards", age: 40, toString: function () {
//         console.log(this.name + ":" + this.age);
//     }
// };
// function print2(v: Person) {
//    v.toString();
// }
// print2(p1);