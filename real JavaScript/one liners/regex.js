//regular expression  are usd
//suppose if u have a passwords and want to acheck a acertain criteria.this can be done with the regular expression.
//extract some information from the url
//if u have a email address to make sure it meets the format of an email address.This can be done with the help of a regular expression. 


//GREP STANDS FRO  gloabal search for regular expression and Print matching
//the first version of RE was used in 1980;

// let y=" 12122khn ";
// let x=y.replace(/\D/g,"");
// console.log(typeof(/\D/g));//object
//regex is a OBJECT IN JAVASCRIPT;


//PRINT VOWELS IN JAVASCRIPT
// let y="Hello World";
// let vowels=/[aeiou]/gi;
// let result=y.match(vowels);
// console.log(result.join(""))


//extract vowels from objects
// const arr=["messi","oroe","miasous"];
// const ans=arr.map((x)=>{
//     return x.replace(/[m]/gi,"")
// })
// console.log(ans)


//usually there  are two ways to create regex objects 
// 1=literal syntax ,2=Constructor

//USING CONSTRUCTOR
// let regex=new RegExp("hello");

let text="Hello world ";
let regex=new RegExp("Hello");
// let regex2=/World/;
// console.log(regex.test(text));//false; 
// console.log(regex2.test(text));//false;
// console.log(regex2.exec(text));
// console.log(typeof(  RegExp));


///STRING METHODS

console.log(text.match(regex));//null and in browser show some result
console.log(text.search(regex))//;
console.log()


