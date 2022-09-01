interface IEmployee {
    empCode: number;
    name: string;
    getSalary:(empCode: number) => number;
}
class Employee implements IEmployee { 
    empCode: number;
    name: string;

    constructor(code: number, name: string) { 
        this.empCode = code;
        this.name = name;
    }

    getSalary(empCode:number):number { 
        return 20000;
    }
    getDetails()
    {
        return `empcode ${this.empCode}  name ${this.name}`;
    }
}
let emp = new Employee(1, "Steve");
console.log(emp.getDetails());
console.log(emp.getSalary(2));