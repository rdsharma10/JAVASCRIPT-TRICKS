var a=document.querySelector("h1");
a.addEventListener("click",()=>{
    a.innerHTML="Hello"
    a.style.color="green"
    a.style.transition="all .6s ease"
})


var b=document.querySelector("#bulb");
b.addEventListener("click",()=>{
    b.style.backgroundColor="yellow"
    b.style.border="dotted"
    b.style.animation="360 deg infinite"
});

var x=document