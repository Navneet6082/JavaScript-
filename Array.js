// // Arrays

// const myArr = [2,4,3,8,6]
// const myArray = ["Aman","Harsh","Ravi"]

// // console.log(myArr);
// // console.log(myArray);

// // console.log(myArr[2]);
// // console.log(myArray[0]);

// // Arrays method 

// myArr.push(7)
// myArr.push(9)         // push add value in last and unshift add value starting of the array

// // console.log(myArr);
// myArr.pop() 
// // console.log(myArr);

// // console.log(myArr.includes(9));
// // console.log(myArr.indexOf(9));

// const newArr = myArr.join()
// // console.log(myArr)
// // console.log(newArr)



// //slice,  splice
// console.log("A",myArr)

// const myn1 = myArr.slice(1,4)   //see the difference between slice and splice to execute the program.
// console.log(myn1)
// console.log("B",myArr);

// const myn2 = myArr.splice(1,3)
// console.log("C",myArr);
// console.log(myn2)




// //https://www.w3schools.com/js/js_array_methods.asp
// // Array length
// // Array toString()
// // Array at()
// // Array join()
// // Array pop()
// // Array push()
// // Array shift()
// // Array unshift()
// // Array isArray()
// // Array delete()
// // Array concat()
// // Array copyWithin()
// // Array flat()
// // Array slice()
// // Array splice()
// // Array toSpliced()

// const friend1 = ["aman","ravi"]
// const friend2 = ["kushwansh","nitin"]

// // friend1.push(friend2)    // push method push array in existing array
// // console.log(friend1);
// // console.log(friend1[2][1]);

// const newFriendList = friend1.concat(friend2) // concat method push array in new array
// console.log (newFriendList)

// const allNewfriend = [...friend1,...friend2]  // spread metyhod return new arrays
// console.log(allNewfriend);


const anotherArray = [4,2,3,[6,4,9],1,[6,7,[3,5]]]
const real_anotherArray = anotherArray.flat(Infinity)
// console.log(real_anotherArray);



console.log(Array.isArray("Navneet"));

console.log(Array.from("Navneet"));

let score1 = 100 
let score2 = 200 
let score3 = 400 
console.log(Array.of(score1,score2,score3));