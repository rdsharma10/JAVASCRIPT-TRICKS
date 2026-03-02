let str="My name is Rishi";
let ans="";
for(let i=str.length-1;i>=0;i--){
    if(str[i]==" "){
         ans+=str[i];
    }
}
console.log(ans);
console.log(ans.length);
console.log(ans.length-1);
let j=ans.length-1;                     

for(let i=str.length-1;i>=0;i--){   
    if(str[i]!=" "){    
        ans+=str[i];    
    }
    else{
        while(j>=0 && ans[j]==" "){
            j--;
        }
        while(j>=0 && ans[j]!=" "){
            ans+=ans[j];
            j--;
        }
    }    
}       