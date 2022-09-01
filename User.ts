interface User 
{
  id: number;
  firstName1: string;
  lastName2: string;
  getFullName:()=>string;
}

const user: User = {
    id: 12,
    firstName1: "Aman",
    lastName2: "Tiwari",
    // getFullName:()=> { return `id ${this.id} ${this.firstName1} ${this.lastName2}`}
    getFullName:function(){ return `id ${this.id} ${this.firstName1} ${this.lastName2}`}
  };


  function getProductDetails3(u: User): string 
{
    return "the productid is "+u.id+" "+u.getFullName();
}

console.log(getProductDetails3(user));
