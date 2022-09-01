var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.name = name;
    }
    Employee.prototype.getSalary = function (empCode) {
        return 20000;
    };
    Employee.prototype.getDetails = function () {
        return "empcode ".concat(this.empCode, "  name ").concat(this.name);
    };
    return Employee;
}());
var emp = new Employee(1, "Steve");
console.log(emp.getDetails());
console.log(emp.getSalary(2));
