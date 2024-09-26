//remove html tags(strip HTML tag from String)
// const strip = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
// console.log(strip("<h1><span> hello</span></h1>"));

//2
//get the no of days between two days;
// const datediff=(date1,date2)=>Math.ceil(Math.abs(date1.getTime()-date2.getTime())/86400000)
// console.log(datediff(new  Date("2021-09-23"), new Date("2021-10-21")));

//3
//scroll to the top of the page;
const TOP=()=>window.scrollTo(0,0);

//4
//random hex color
// const hex = ()=> "#" + Math.floor(Math.random() *0xfffff).toString(16 ).padEnd(6,'0');
// console.log(hex()); 




/*5 */
// disappering an object ((TOGGLING))
const toggle = element => element.style.display=(element.style.display ==="none" ? "block" :"none");

//6
//check user scrollToBottom
// window.onscroll=(x)=>{
//     if((window.innerHeight+window.scrollY)>=document.body.offsetHeight){
//         console.log("you are at the bottom");
//     }
// }
//if want to make a endless page then add TOP function in 28 line;

//7
//GENERATE A RANDOM ID;
// const Random=Math.random().toString(36).substring(2);
// console.log(Random );

// let arr=["messi","ronaldo", "neymar"];
// let y=arr.map((x)=>{
//     return x.replace(x[0],x[0].toUpperCase());
// })
// console.log(y)

//8
//ROUND decimal to a certain number of decimal values;
const round=(number,decimal)=>Number(Math.round(number+"e"+decimal)+"e-"+decimal);
console.log(round(12.3456789,"2"));
//  


