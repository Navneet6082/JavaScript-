// Dates 

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(myDate.toJSON());

console.log(myDate.toLocaleDateString());

console.log(myDate.toTimeString());


console.log(typeof myDate);

// let mycreatedDate = new Date (2026,10,24)
// let mycreatedDate = new Date (2024,0,23,5,3)
let mycreatedDate = new Date ("2026,10,24")
console.log(mycreatedDate);
console.log(mycreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());    // monday start with 1
console.log(newDate.getMonth());  //start with 0 ,  0 for january

