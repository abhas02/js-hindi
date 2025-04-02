// if(!Array.prototype.myForEach){
//     Array.prototype.myForEach=function(cb){
//         for(let i=0;i<this.length;i++){
//             cb(this[i],i);
//         }
//     }
// };


// // for map
// if(!Array.prototype.myMap){
//     Array.prototype.myMap=function(cb){
//         const result=[]
//         for(let i=0;i<this.length;i++){
//            const value= cb(this[i],i)
//            result.push(value);
//         }


//         return result;
//     }
// }
// const arr=[1,2,3,4,5]

// // // arr.forEach();
// // arr.myForEach((value,index)=>console.log(`At Index:${index} value:${value}`));


// const trippedArr=arr.myMap((e)=> e*3);
// console.log(trippedArr)



if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (cb, initialValue) {
        let acc = initialValue !== undefined ? initialValue : this[0];
        let startIndex = initialValue !== undefined ? 0 : 1;

        for (let i = startIndex; i < this.length; i++) {
            acc = cb(acc, this[i]);
        }

        return acc;
    };
}

const arr = [1, 2, 3, 4, 5];

const res = arr.reduce((abTakKKiValue, currentValue) => abTakKKiValue + currentValue, 12);
console.log("Native reduce:", res); // Output: 27

const myRes = arr.myReduce((abTakKKiValue, currentValue) => abTakKKiValue + currentValue, 12);
console.log("Custom myReduce:", myRes); // Output: 27





