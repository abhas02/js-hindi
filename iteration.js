let salesData=[
    {proudct:"Laptop",price:1200},
    {proudct:"Smartphone",price:800},
    {proudct:"Headphones",price:150},
    {proudct:"Keyboard",price:80},
];
let initialValue=0
let totalSales=salesData.reduce((acc,sale)=>0 + sale.price,0)
// console.log(totalSales);// reduce expect a callback and this statement is callback

// Items less than 50
let inventory=[
    {name : "Widget A", stock:30},
    {name : "Widget B", stock:120},
    {name : "Widget C", stock:45},
    {name : "Widget D", stock:70},



];
let lowStockItems=inventory.filter((item)=>{
    return item.stock<50;
})
    // item.stock<50)
// console.log(lowStockItems);


let userActivity=[
    {user:"Alice", activityCount:45},
    {user:"Bob", activityCount:72},
    {user:"Charlie", activityCount:33},



];

// find most active user using reduce
let mostActiveUser = userActivity.reduce((maxUser,user) => 
    user.activityCount>maxUser.activityCount ? user :maxUser
);
console.log(mostActiveUser);
