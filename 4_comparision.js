console.log(2<4)  //simple comparision 
console.log(3>5)
console.log(3>=4)



console.log("3">2);//it is not allowed   based on compiler
console.log(3>"3");//it is not allowed


// most of the cases we avoid null and undefined comparision
console.log(null>0);  //false
console.log(null==0);//false
console.log(null>=0);//true



console.log(undefined>0);  //false
console.log(undefined==0);//false
console.log(undefined>=0);//false

console.log(2==2);  //it compare value 
// console.log(2=2);
console.log(2===2); //it use to compare value with datatype
console.log("2"===2);


