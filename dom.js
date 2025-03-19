// Function.prototype.describe=function(){
//     console.log(`Function name is ${this.name}`);
// };
// function masalaChai(){}
// function gingerChai(){}

// function greet(name){
//     return `Hello ${name}`;



// }
// greet.describe('abhishek');
// masalaChai.describe()
// gingerChai.describe()  // output will be 



// function add(a,b){ // this is function declaration
//     return a+b
// }


// const subtract=function(a,b){ // this is function expression
//     return a-b

// }


// const mulip=(a,b)=>a*b // arrow function

// function applyOperation(a,b,operation){
//     return operation(a,b)                      // this is called first class function
// }
// const resul=applyOperation(5,4,(x,y)=>x/y)


// function createCounter(){
//     let count=0;
//     return function(){
//         count++;
//         return count
//     }
// }

// const counter=createCounter()
// console.log(counter());


// function onef(){
//     let myName="abhishek"

// }
// onef();
// console.log(myName);

// (function(){
//     console.log("abhishek");
// })()
// ()()

// window is a global object which makes js engine available for you under  browser

function ChangeBackground(color){
    document.body.style.backgroundColor=color;
}

const themeButton=document.getElementById('theme-button');


themeButton.addEventListener('click',()=>{
    console.log(document.body.style.backgroundColor);
    const currentcolor=document.body.style.backgroundColor;


    if(!currentcolor|| currentcolor=='white'){
        ChangeBackground('black')
        themeButton.innerText='Light Mode'
    }else{
        ChangeBackground('white')
        themeButton.innerText='Dark Mode'

    }

});
