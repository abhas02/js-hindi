// // numbers
// BigInt
// String
// Boolean=true or false;
// null
// undefined
//symbol
// const teas={
//     name:"lemon",
//     type:"green",
//     caffine:"low",
// }
// //adding new property
// teas.origin = "China"


// // changing caffine level
// teas.caffine="medium"

// //deleting existing property
// delete teas.type;

// //checking for origin property
// if (teas.hasOwnProperty('origin')) {
//     console.log("The 'origin' property exists.");
// } else {
//     console.log("The 'origin' property does not exist.");
// }
// const myTeas={
//     greenteas:{
//         name:"green tea",
//         cup:{
//             one:"1",
//             two:"2"
//         }

//     },
//     blackteas:{
//         name:"black tea"
//     }
// }
// const teaCopy={...myTeas}
// const anotherCopy={myTeas}
// console.log(teaCopy);



// console.log(teas.name);
// console.log(teas.type);
// console.log(teas);
// console.log("origin" in teas);
// for(let keys in teas){
//     console.log(`${keys}:${keys[teas]}`);
// }

Object.prototype.chai=function(){
   console.log('chai');

}
 const arr=[1,2,3]
 //dot operator help in accessing the properties of object

 const str='abhishek'
 const obj={
    x:1
 }
 obj.chai()

 //Array.prototype.abhishek=function(){console.log('this is hacked by abhishek)}
 const arr2=[1,2,3,4]
 arr2.abhishek()
 