/* var num="aman";
console.log("hello world "+num);
console.log(typeof(num));
var num2;
console.log(typeof(num2));
 */
//tsc hello.ts
//node hello.js 
// var name2:string="Aspire";
// console.log(name2);
// enum Direction { EAST, WEST = 4, NORTH, SOUTH, } class DirectionEnum {
//     show() {
//         var x: number = Direction.EAST;
//         var y: number = Direction.SOUTH;
//         var plumber = Direction.SOUTH; 
//         console.log("East=" + x + ", South =" + y);
//     }
// } let obj = new DirectionEnum(); obj.show(); 
function add(a, b) {
    if (b === void 0) { b = 13; }
    var result = a + b;
    console.log("sum :", result);
}
add(2);
