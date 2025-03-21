function prepareChai(type){
    if(type==="Masala Chai"){
        // console.log("Adding spices to the chai");

    }else{
        // console.log("Preparing regular chai");
    }

}
prepareChai("Masala Chai")
prepareChai("Ginger Chai")


function calculateTotal(amount){
    // convert tto number
    // if(amount>1000){
    //     return amount*0.9

    // }else{
    //     return amount // return statement ke baad code aage kuch bhi print nahi krta hai
    // }
    return amount >1000 ? amount*0.9 : amount
}

let finalBill=calculateTotal(1200)
// console.log(finalBill);


function trafficLight(color){
    switch(color){
        case  "red":
            
        // console.log("stop");
        break;
        case  "yellow":
        // console.log(" slow down");
        break;
        case "green":
        // console.log("go");
        break;

        default:
            // console.log("chalan kaat do");

    }
}
trafficLight("yellow")


function checktruthyvalue(value){
    if(value){
        console.log("Truthy");
    }else{
        console.log("Falsy");
    }
}

checktruthyvalue(1)
checktruthyvalue(0)
checktruthyvalue("Abhishek")
checktruthyvalue("")
checktruthyvalue([])
checktruthyvalue([1,2,3])

function login(username,password){
    if(username==='admin' && (password==="1234" || loginIp=="127")){
        console.log("Login Successfull");

    }else{
        console.log('Invalid credentials');
    }



}

