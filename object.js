const obj1={
    fname:"abhishek",
    lname:"tiwary",

    getFullname:function(){
        if(this.lname!==undefined)
        return`${this.fname} ${this.lname}`;
    return this.fname;
    },
};


const obj2={
    fname:"abhas",
    lname:"tiwary",

    getFullname:function(){
        return `${this.fname}${this.lname}`
    }
}
console.log(obj1.getFullname());
console.log(obj2.getFullname());