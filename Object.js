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


// Singleton


// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]



