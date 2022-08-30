class Person {
    public firstName:string;
    public lastName;
    constructor( firstName: string,  lastName: string) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}
class Employee extends Person 
{
    constructor()
    {
        super("Hii","hello");
    }
    n1() 
    {
        this.firstName="AMan";  
    }
}

let e=new Employee();
e.n1();
console.log(e.getFullName());
