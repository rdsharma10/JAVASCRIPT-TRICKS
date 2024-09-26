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
functionCall.apply(obj1,["kanpur","Delhi"]);
let ans=functionCall.bind(obj1,"kanpur");
ans()




// let ans=[[1,2],[3,2][1,2]];

// let res=ans.map((x)=>{

// })