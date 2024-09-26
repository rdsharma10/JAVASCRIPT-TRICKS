setTimeout(myFunction,3000)
function myFunction(){
    console.log("Hi");
}
function myDisplayer(something){
    console.log(something);
}
function myCalculator(num1,num2,myCallback){
    var sum=num1+num2;
    myCallback(sum);
}
myCalculator(5,5,myDisplayer);

function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5)); // Output: 120