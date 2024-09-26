let x=[10,203,40,89,888,89];
let y=x.filter(un);
function un(value,index,array)
{
        return value<41;
}
console.log(y);
let m=x.reduce(un1);
function un1(total,value)
{
    return total+value;
}
console.log(m);
console.log(typeof(y)+typeof(y));

 