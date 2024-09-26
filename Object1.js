//collection of multiple values
//key value pairs

// let obj={};//declaration method1 ;
// obj.name="sai";//assignment
// obj.name="14"

// let obj={
//     name:"Rishi",
//     age:21,
//     address:{
//         city:"kanpur",
//         state:"UP",
//         country:"India"
//     }
// }
// console.log(obj["age"]);//Bracket Notation
// console.log(obj.age);









var emp1={};
emp1.name="Rishi";
emp1.lastName="Sharma";
emp1.Designation="AIR1";
emp1.gender="Male";

var emp2={};
emp2.name="RedX";
emp2.lastName="Sharma";
emp2.Designation="AIR2";
emp2.gender="Male";
// 
//to stop repetition we create a function;


// function CreateObj(fname,lastName,Designation,gender)
// {
//     var emp={};
//     emp.fname=fname;
//     emp.lastName=lastName;
//     emp.Designation=Designation
//     emp.gender=gender;
//     return emp;
// }
// let emp3=CreateObj("Rishi","Sharma","Air3","M");
// console.log(emp3)
///constructor =functions which let u populate the object;
//constructor is a function which is used to create an object




//use of new word in  js
function CreateObj(fname,lastName,Designation,gender,sub)
{    // this is what new keyword does
    // var emp={}; var this={} beacuse of new keywod line63 and 68
    this.fname=fname;
    this.lastName=lastName;
    this.Designation=Designation
    this.gender=gender;
    this.sub=sub;
    this.marks=function()
    {
        this.sub+=10;

    }
    // return emp;//return this;
}
let emp4= new CreateObj("Ram","ji","world winner","M",99)

// let emp4= CreateObj("Ram","ji","world winner","M")calling a constructor function without new keyword doesn,t work no new objects get created and then the return values is undefined;

let emp5=new CreateObj("Shyam","ji","Brother","M",97);
emp5.marks();
console.log(emp5["sub"])


//Calling a Regular Function in constructor mode using new Keyword still works

emp4.marks()
console.log(emp4["sub"])


// functions calling MEthod 
//there are 4 methods of calling a function;
function foo()
{
    console.log("JavaScript");
};
//1. foo(); //calling a function
 


var obj={};
obj.foo=function(){    console.log("JavaScript");
};
//2. obj.foo(); //calling a function;
//3new foo()
//3. obj["foo"](); //calling a function;
//





//4. obj.foo.call(); //calling a function;
//5. obj.foo.apply(); //calling a function;
//6. obj.foo.bind(); //calling a function;
//7. obj.foo.call(this); //calling a function;
//8. obj.foo.apply(this); //calling a function;
//9. obj.foo.bind(this); //calling a function;
//10. obj.foo.call(this,1,2,3); //calling a function;
//11. obj.foo.apply(this,[1,2,3]); //calling a function;


function Meachnic(name)
{
this.name=name;
}
var mike=new Meachnic("mike");
mike.marks=emp5.marks;
console.log(mike.marks.call(emp5));
console.log(emp5);




///prototype


function  foos(){};
foos;
console.log(foos.prototype)

var myObj=new foos();
console.log(myObj); 





///\






function Main(name){this.name=name};
var e1=new Main("Sri");
e1;
var e2=new Main("Ram");
Main.prototype.legacy=function(){console.log("Legacy")};
e1.legacy();
e2.legacy();
Main.prototype.incr=function(x){
    console.log(x+4);

}
var e2=new Main.prototype.constructor();
console.log(e2.constructor===Main)

// var x = new Main.prototype.constructor();
//  // Output: Direct
// x.legacy();  // Output: Legacy
// x.incr(5);   // Output: 9

// // Verifying the constructor
// console.log(x.constructor === Main);



 
// Create an object
// let animal = {
//     eats: true
// };

// // Create another object that inherits from animal
// let rabbit = {
//     jumps: true
// };

// // Set the prototype of rabbit to be animal
// rabbit.__proto__ = animal;

// console.log(rabbit.eats); // true
// console.log(rabbit.jumps); // true



console.log(Object());

