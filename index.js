let arr=[1010101,101010,1010101,1010101];
let ans=arr.map((x)=>{
  return x+"0b";
}).join(" ")
let ans2=[...ans].join("").toString(10);
ans2.map((x)=>(x.replace(x[0],x[-1])))
console.log(ans2)