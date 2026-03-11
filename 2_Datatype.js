"use strict" //treat all js code as newer version

console.log (3+3)

let name="NAvneet"  //string
let age = 20          //number
let islogged=true/false  //boolean
let income;        //undefined

// number => 2 to power 53
// bigint
//string
//boolean 
//null=> standalone value
//undefined
// symble=> unique value

console.log(typeof null)  //null is a object
console.log(typeof undefined) //undefined is a datatype

// data type
// 1.primitive   (7 type)
        //   String,number,null,boolean,undefined,Symbol,BigInt

// let name="NAvneet"  //string
// let age = 20          //number
// let islogged=true/false  //boolean
// let income;        //undefined
// const BigInt= 31511561121351n
// let temp= null

const id = Symbol('123')    //type of symbol is symbol
const anotherId = Symbol('123')

// 2.non primitive  or reference type
        // Array,object, function ,graph ,tree ,etc

        const heros= ["Nav","harsh","aman"]

        let myObj ={
            name:"navneet"
            age= 20
        }


        const myFunction=function(){
            console.log("hello world")
        }



        //type of memory  
        // Stack (primitive), Heap (non primitive)