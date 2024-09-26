//immeditely invoked function expression.
//(()=>{})()syntax
//function that immediately execute;
//to get rid off from the pollution of global scole variable.

//semicolon is necessary for more than one function expression
// function code(){
//     console.log("code")
// };
// code();
// ((name)=>{
// console.log(`hello ${name}`)
// })("Rishi"")
function main()
{
console.log("sas");}
main();
(()=>{
    console.log("code") ;

})();
(()=>{
    console.log("code 2")
})()