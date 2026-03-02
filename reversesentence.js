let str="My name is Rishi";
let ans="";
for(let i=str.length-1;i>=0;i--){
    if(str[i]==" "){
        ans+=str.slice(i+1);
        str=str.slice(0,i);  
    }
}
console.log(ans);
