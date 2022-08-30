var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Object.defineProperty(Person2.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    return Person2;
}());
var p2 = new Person2();
p2.age = 23;
console.log(p2.age);
//only works in EMCA 5 or higher
