// const arr1=[12,65,33,34,56];
// const nums=arr1.reduce(add);
// function add(total,value)
// {
//     return total+value;
// }
// console.log(nums);

// finding sum
// const arr=[1,2,4,5,7,8,9,210];
// const y=arr.reduce((acc , current)=>{ return acc+current});
// console.log(y);
// //

// finding max
// const arr=[90,89,67,56,45];
// const x=arr.reduce((variable, iterator)=>{if(iterator>variable){variable=iterator} return variable});
// console.log(x)


// extract data from array object;
// const users=[{name:"Rishi",age:45},{name:"messi",age:40},{name:"ronaldo",age:45},];
// const y=users.reduce((variable ,iterator)=>{
//     if(variable[iterator.age]){
//         variable[iterator.age]= ++variable[iterator.age];
//     }
//     else{
//         variable[iterator.age] = 1;
//     }
//     return variable;

// },{})
// console.log(y);
// const users=[{name:"Rishi",age:45},
// {name:"messi",age:40},
// {name:"ronaldo",age:45}];
// const y= users.filter((x)=>x.age<41).map((x)=>{return x.age})
// console.log(y)

// let x=[1,3.,5,6,3,23,23,23,232,];
// let y=x.reduce((variable,iterator)=>{return variable+iterator});
// console.log(y);
// let y=[1,2,4,5,7,7,8];
// let x=y.map((x)=>{return x.toString(2)}).reduce((variable,iterator)=>{return variable+iterator});
// console.log(x);
// let y=[1,2,4,6,8,0,0,54,5];
// let x=y.map((x)=>{return x*2}).reduce((variable, iterator)=>{
//     if(iterator>variable)
//     {
//     variable=iterator;
//     }
//     return variable;
// })
// console.log(x);