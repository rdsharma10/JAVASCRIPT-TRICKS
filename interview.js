// //question 1
// //loop an array(contain additional properties) but display only original properties;
// //  Array.prototype.extraProperty="hitesh";
 const arr=[1,2,3,4,5];
 for(let i in arr)
 {
    if(arr.hasOwnProperty(i))
    {
            console.log(i)
    }
 }

// //question 2
Object.prototype.extraprop="Rishi"
const obj={name:"Hitesh",age:26};
for (let key in obj){
    if(!obj.hasOwnProperty("extra")){
        console.log(`${key}: ${obj[key]}`);
        }
        }

// question 3
// custom foreach loop
function Custom()
{
Array.prototype.myOwnForEach=((callback)=>{
for(let i=0;i<this.length;i++)
{
    callback(this[i],i,this)
}
})
}

// //approach 2
// Array.prototype.forEachTwo=function(callback,thiscontext){
//     if(typeof callback !=="function")
//     {
//      throw `not a valid function`;
//     }
//     const length=this.length;
//     let i=0;
//     while(i<length)
//     {
//         if(this.hasOwnProperty)
//         {
//             callback.call(thiscontext,this[i],i,this)
//         }
//         i++;
//     }
// }

//1
//because of HOISTING
// console.log(age);//UNDEFINED
// var age=10;
// console.log(age);//20



//2
// age=10;//temporal deadzone(let,const)
// console.log("the value of age",age);
// let age=10;//because let cannot be reassigned


//var follows hoisting but let,const create temporal deadzone(TDZ)



//3
myfun();
var myfun=function()
{
    console.log("First");
}
myfun();
function myfun()
{
    console.log("second")
}
myfun()
//second first first 