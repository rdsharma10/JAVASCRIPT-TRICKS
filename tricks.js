// array to objectsm
// let arr=["1","2","3"];
// var obj={...arr};
// console.log( (obj))

//Fill array with data
// var array=new Array(10).fill(100);
// console.log(array)


// remove duplicates from array
// var x=new Array(10).fill("ronaldo");
// console.log(x);
// var removeduplicates=Array.from(new Set(x));
// console.log(removeduplicates);


// Merge two arrays

var array1=[8,5,2,12];
var array2=[1,2,4,5,7,9];
var mins=[...array1 ,...array2];//merging two arrays
var minss=mins.sort((a,b)=>{return a-b});//sorting 
var rd=Array.from(new Set(minss))//removing duplicates
console.log(rd);


let arr=[1,2,3];
let arr1=[4,5,6];
let z=[...arr, ...arr1];
console.log(z)

console.log("9">"81");