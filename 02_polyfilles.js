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

// Object.prototype.chai=function(){
//    console.log('chai');

// }
// //  const arr=[1,2,3]
//  //dot operator help in accessing the properties of object

// //  const str='abhishek'
//  const obj={
//     x:1
//  }
//  obj.chai()

//  //Array.prototype.abhishek=function(){console.log('this is hacked by abhishek)}
//  const arr2=[1,2,3,4]
//  arr2.abhishek()
if(!Array.prototype.myforEach){
   Array.prototype.myforEach=function(userFunction){
      const originalArr=this // current object ki taraf point krta hai
      for(let i=0;i<originalArr.length;i++){
         userFunction(originalArr[i],i);

      }

   }
}

if(!Array.prototype.myMap){
   Array.prototype.myMap=function(userFunction){
      const result=[]
      for(let i=0;i<this.length;i++){
         const value=userFunction(this[i],i)
         result.push(value)
      }



      return result;


   }
}
if(!Array.prototype.myFilter){
   Array.prototype.myFilter=function(userFunction){
      const result=[]
      for(let i=0;i<this.length;i++)
         if(userFunction(this[i],i)){
            result.push(this[i])
         }



      return result;

   }
}



const arr=[1,2,3,4,5,6]
const ret=arr.myforEach(function(Value,index){
   console.log(`value at Index ${index}is ${Value}`);
});
console.log(`ret is`,ret);

 // signature of foreach= no return,function input,value ,index
 // call my function at every value

 // signature for map= newarray,element ke upar iterate krna
 const n=arr.map((e) => e *2);
 const n2=arr.map((e) => e *3);

 console.log(n);
 console.log(arr);
 console.log(n2);

 // signature for filter=new array , input me user ka function leta hai
 // agar user ka function true return krta hai toh current value ko new array me include krta hai


 const n3=arr.filter((e)=>e % 2==0)
 console.log(n3);