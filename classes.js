var Student = /** @class */ (function () {
    function Student(address, phone) {
        // val num=67;
        // let num3=89;
        // let num4:number=86;
        // var num5:number=86;
        this.id = 56;
        this.name1 = "AMan";
        this.name = "hemant";
        this.address = address;
        this.phone = phone;
    }
    Student.prototype.greet = function () {
        console.log("---Greetings----");
        return "hello " + this.name;
    };
    return Student;
}());
var s1 = new Student("noida", 9891062743);
// console.log(  `id is  ${s1.id} and name is ${s1.name1} `  );
// console.log(  `address is  ${s1.address} and phone is ${s1.phone} `  );
console.log(s1.greet());
// class Student {
//     // val num=67;
//     // let num3=89;
//     // let num4:number=86;
//     // var num5:number=86;
//     id:number=56;
//     name1="AMan";
//     name="hemant";
//     address;
//     phone:number;
//     constructor(address?:number,phone?:number)
//     {
//         if(address!=undefined)
//         this.address=address;
//         if(phone!=undefined)
//         this.phone=phone;
//     }
// }
// let s1=new Student();
// console.log(  `id is  ${s1.id} and name is ${s1.name1} `  );
// console.log(  `id is  ${s1.id} and name is ${s1.name} `  );
