var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (theAge) {
        this.age = theAge;
    };
    return Person;
}());
var p = new Person();
// p.age=23;
p.setAge(23);
// console.log(`the age is `,p.age);
console.log("the age is ", p.getAge());
