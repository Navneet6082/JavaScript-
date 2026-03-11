// singleton
//onject.create

//object literals 

const mySym = Symbol("key1")

const JsUser ={
    name: "NAvneet",
    age: 20,
    [mySym]:"myKey1",     // data type of [mySym] is ymbol
    location:"kanpur",
    email: "navneet@gmail.com",
    isLoggedIn: false,
    lasytLoginDays: ["monday","friday"]
}
// there are two method to access object 
console.log(JsUser.name);
console.log(JsUser.email);

console.log(JsUser["email"]);

// JsUser.email= "NAvneet@chatgpt.gmail"
// Object.freeze(JsUser)
// JsUser.email= "NAvneet@chat.gmail"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JsUser")
}

JsUser.greetingt2 = function(){
    console.log(`HEllo JsUser, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingt2());

