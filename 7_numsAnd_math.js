// const score =400 
// console.log(score);

// const balance = new Number (100)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 123.9325
// console.log(otherNumber.toPrecision(3));



// const otherNumber1 = 123.9325
// console.log(otherNumber.toPrecision(2));


// const OtherNumber = 1234.9325
// console.log(otherNumber.toPrecision(4));

// const hunderds = 10000000
// console.log(hunderds.toLocaleString('en-UN'));  //UN is american standard
// console.log(hunderds.toLocaleString('en-IN')); //IN is indian standard


// //https://www.w3schools.com/js/js_number_methods.asp

// // Basic Methods
// // Basic number methods can be used on any number:

// // toString()
// // toExponential()
// // toFixed()
// // toPrecision()
// // valueOf()


// // Static Methods
// // Static methods can only be used on Number:

// // Number.isFinite()
// // Number.isInteger()
// // Number.isNan()
// // Number.isSafeInteger()
// // Number.parseInt()
// // Number.parseFloat()





//****************Maths*************
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E


console.log(Math)
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9));
console.log(Math.min(4,3,7,2,9));
console.log(Math.max(4,6, 7,10,9));

console.log(Math.random());
console.log(Math.random()*10)
console.log((Math.random()*10)+1)

console.log(Math.floor(Math.random()*10)+1)


const min = 10
const max = 20 

console.log(Math.floor(Math.random()*(max-min+1))+min)  //important