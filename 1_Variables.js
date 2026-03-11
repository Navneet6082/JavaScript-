const name =" NAvneet"
const repoCount= 10

console.log(name+repoCount);
console.log(name+repoCount+"value is 10");

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('Navneet')

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,3)  //substring(-7,3) it is not allowed negative value determine as 0
console.log(newString)


const anotherString= gameName.slice(-6,2)  //.slice(-6,2) negative and positive value are allowed
console.log(anotherString);


const newStringOne="    navneet   "
console.log(newStringOne);
console.log(newStringOne.trim());


const STRING ="navneet singh age 21"
console.log(STRING.split(' '));



//https://www.w3schools.com/js/js_string_methods.asp
// String length
// String charAt()
// String charCodeAt()
// String codePointAt()
// String concat()
// String at()
// String [ ]
// String slice()
// String substring()
// String substr()
// String toUpperCase()
// String toLowerCase()
// String isWellFormed()
// String toWellFormed()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String repeat()
// String replace()
// String replaceAll()
// String split()