// function greet (name){
//     // console.log(`Hello ${name}`);

// }
// let globalVar="I am global"

// function modifyglobal(){
//     globalVar="I am modified"

//     let blockedScopedVar="I am blocked-scoped".
//     console.log(blockedScopedVar);
// }
// modifyglobal()

// let config=function(){
//     let settings={
//         theme:"dark"
//     }
//     return settings
// }() // this is IIFE

// (()=>{})()   // this is also IIFE


let person1={
    name:"ravi",
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

let person2={
    name :"hitesh",

}
const callgreet=person1.greet.call(person2);
// console.log(callgreet());
person1.greet.call({name:"mukul"})