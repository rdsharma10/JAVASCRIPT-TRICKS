// const dark=window.matchMedia && window.matchMedia('prefers-color-scheme :dark)').matches;
// console.log(dark)
// 2
// const stripHtml=html =>(new DOMParser().parseFromString(html,'text/html')).body.textContent || "";
// console.log(stripHtml("<h1><marquee><mm> this is text</h1>"));
// 3
// const Datedif=(date1,date2)=> Math.ceil(Math.abs(date1.getTime() - date2.getTime()) /86400000);
// console.log(Datedif(new Date("2021-08-23"),new Date("2021-11-01")));
//4
// const totop=()=>{
//     window.scrollTo(0,0);
// }
// setTimeout(()=>{
// totop();
// },1000)
//Random hex color;
// const hexcolor=()=>"#"+Math.floor(Math.random()*0xfffff).toString(16).padEnd(6,'0');
// console.log(hexcolor())
// toggle display of an element
//6 
// const toggle=element=>element.style.display=(element.style.display=== "none" ? "block" : "none");

//7 check whetehr user touches the bottom or not
// window.onscroll=()=>{
//     if((window.innerHeight+window.screenY)>=document.body.offsetHeight)
//     {
//         console.log("bottom")
//     }
// }

//8
// generate random id

const randId =  Math.random().toString(36).substring(2);
console.log(randId)