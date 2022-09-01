var p1 = {
    name: "Richards", age: 40, toString: function () {
        console.log(this.name + ":" + this.age);
    }
};
function print2(v) {
    console.log(v.toString());
}
print2(p1);
