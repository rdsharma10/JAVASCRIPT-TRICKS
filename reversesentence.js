let str="My name is Rishi";
let ans="";
for(let i=str.length-1;i>=0;i--){
    if(str[i]==" "){
        ans+=str[i];
    }
}
console.log(ans);
console.log(ans.length);