let chaiTypes=["masala", "ginger","green","lemon"]
// console.log(chaiTypes[2]);

// console.log(`Total Chai Types: ${chaiTypes.length}`);
chaiTypes.push("Herbal Tea")
const data=chaiTypes.pop()
// console.log(data);

let index=chaiTypes.indexOf("green");
// console.log(index);

if(index!==-1){
    chaiTypes.splice(index,1);
}

chaiTypes.splice(2, 1);

// console.log(chaiTypes);

//2 → Start index (index where the removal begins).
// 1 → Number of elements to remove.


chaiTypes.forEach((chai,index)=>{
//     console.log(`${index+1}: ${chai}`);

 })
let moreChaiTypes=["oolong Tea","white Tea"]
let allChaiTypes=chaiTypes.concat(moreChaiTypes)
// console.log(allChaiTypes);

let newChaiTypes=[...allChaiTypes,"chamolina Tea"];
// console.log(newChaiTypes);

//object literals

let ChaiReceipe={
    name:"Masala Chai",
    ingredients:{
        teaLeaves:"Assam Tea",
        milk:"Full Cream Milk",
        sugar:"Brown Sugar",
        spices:["Dallchini","Ginger"],
    },
    instructions:"Boil water, add tea leaves, milk,sugar and spices",
}
// console.log(ChaiReceipe.ingredients.spices[1]);
// console.log(ChaiReceipe.instructions);

let updatedChaiReceipe={
    ...ChaiReceipe,
    insructions:"Boil water, add tea leaves, milk,sugar,spices with some love"
}
// console.log(updatedChaiReceipe);

let{name,ingredients}=ChaiReceipe // this is object destructring
let[firstchai,secondchai]=chaiTypes // this is array destructring
console.log(ingredients);
console.log(secondchai);