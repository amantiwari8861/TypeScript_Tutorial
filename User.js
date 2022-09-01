var user = {
    id: 12,
    firstName1: "Aman",
    lastName2: "Tiwari",
    // getFullName:()=> { return `id ${this.id} ${this.firstName1} ${this.lastName2}`}
    getFullName: function () { return "id ".concat(this.id, " ").concat(this.firstName1, " ").concat(this.lastName2); }
};
function getProductDetails3(u) {
    return "the productid is " + u.id + " " + u.getFullName();
}
console.log(getProductDetails3(user));
