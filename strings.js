//  let name="Rishi";
//  let repoCount=100;
//  console.log(`Hello my name is ${name.toUpperCase()} and i am ${repoCount}`);

// let GameName=new String('Rishi');
// console.log(GameName[0]);
// console.log(GameName.__proto__);
// console.log(typeof(__proto__));
// console.log(GameName.substring(0,-2));


// const x="Rishi messi Ronaldo";
// let y=x.split(" ");
// console.log(y);
// console.log(typeof(y))
 
// console.log(Number.M)


//maths

const math=["-123","-980","-432"];
const ans=math.map((x)=>{
    return x.replace(x[0],"")
})
console.log(ans)

console.log(Math.random());
const min=1;
const max=6;
console.log(Math.round(Math.random()*(max-min+1))+min)



