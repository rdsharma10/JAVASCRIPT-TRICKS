// // // 
// // let obj={
// // }
// // obj.val="Rishi";

// // console.log(Reflect.has(obj,"val"));
// // console.log("val" in obj);
// // let arr=[1,2,3];
// // let arr1=[4,5,6];
// // [arr,arr1]=[arr1,arr]
// // console.log(arr)
// // console.log(~~9.9999);

let obj1={
    f_name:"Rishi",
    l_name:"Sharma"
}
let functionCall= function(Hometown)
{
    console.log(this.f_name+" "+this.l_name + " "+ Hometown);
}
let an=["kanpur","Delhi"];
functionCall.apply(obj1,an);
let ans=functionCall.bind(obj1,an[0]);
ans()




// let ans=[[1,2],[3,2][1,2]];

// let res=ans.map((x)=>{

// })