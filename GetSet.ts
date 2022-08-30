class Person2 {
    private _age: number;

    public get age() {
        return this._age;
    }
    public set age(theAge: number) {
        this._age = theAge;
    }
}
let p2=new Person2();
p2.age=23;
console.log(p2.age);

//only works in EMCA 5 or higher
    // or
// tsc --target ES5 GetSet.ts
// node GetSet.js