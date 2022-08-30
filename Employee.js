var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Emp = /** @class */ (function () {
    function Emp(name, code) {
        this.empName = name;
        this.empCode = code;
    }
    return Emp;
}());
var SalesEmp = /** @class */ (function (_super) {
    __extends(SalesEmp, _super);
    function SalesEmp(name, code, department) {
        var _this = _super.call(this, name, code) || this;
        _this.department = department;
        _super.prototype.empName = "Aman";
        return _this;
    }
    return SalesEmp;
}(Emp));
var emp = new SalesEmp("John Smith", 123, "Sales");
console.log(emp.empName);
