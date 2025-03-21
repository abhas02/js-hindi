const pi= 3.14;
let name ="abhishek"


// data types in JS


let number=42 // Integer
let text="abhishek" // String
let isTrue="true" //Boolean
let nothing="null" //Object
let undefinedVar="undefined" //Undefined
// let symbolVar= symbol(); // symbol


let person={
    name:"abhishek",
    age:'25',
    isStudent:true

}

//type conversion

let num="42"
// let ConvertedNum=Number(num);
// let ConvertedNum=+num;
let ConvertedNum=parseInt(num);


// console.log(ConvertedNum);
// console.log(typeof ConvertedNum);

let str=123;
let convertedString=String(str);

//operations

let a=10;
let b=12;

let sum= a + b
let difference=a-b
let proudct=a*b
let quotient=a/b
let remainder=a%b
let power=a**b

//Comparisons

// let x=5
// let y=10
// console.log(x==y); //Equal to
// console.log(x!=y); // Not equal to
// console.log(x>y);
// console.log(x<y);
// console.log(x<=y);

console.log(Math.max(5,10));
console.log(Math.min(5,10));
console.log(Math.random()*10); //In JavaScript, the Math.random() function generates
//  a random floating-point number between 0 (inclusive) and 1 (exclusive)

let firstName="Abhishek"
let lastName="Tiwary"

let fullName=firstName + " " + lastName
let message="Hello world"
console.log(message.toUpperCase);
console.log(message.toLowerCase);
console.log(message.indexOf("world"));
console.log(message.slice(0,5));


let myName="Abhishek"
let greeting=`Hello ${myName}, from chaicode`







