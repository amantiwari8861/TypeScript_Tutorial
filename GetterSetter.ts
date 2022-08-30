class Person {
    private age: number;
    private firstName: string;
    private lastName: string;

    public getAge() {
        return this.age;
    }
    public setAge(theAge: number) {
        this.age = theAge;
    }
}
let p=new Person();
// p.age=23;
p.setAge(23);
// console.log(`the age is `,p.age);
console.log(`the age is `,p.getAge());


