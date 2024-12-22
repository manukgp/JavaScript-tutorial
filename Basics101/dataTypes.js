// to declare that all the code be treated as per the newer guidelines (optional).
"use strict";

/* Primitive data types: call by value, copied from memory to access/modify

    number: 3, 0 , 3.14, NaN, Infinity, -Infinity
    BigInt: big numbers, like scientific calculations
    string: "hello"
    boolean: true, false
    null: intentional absence of value
    undefined: variable initialised but value not given
    symbol: for unique immutable identifier

*/

let value;                          //undefined
let emptyValue = null;              //null

const bigNumber = 94874524524527968424546n;
const bigIntNumber = 544545n;       // add n to convert into BigInt
// console.log(typeof bigIntNumber);   // bigint


const id = Symbol('123')              //symbol
let anotherId = Symbol('123')
// console.log(id == anotherId)        //false ,as Symbols are meant to be unique, hence unequal.



/* NOTE:
    1. JS is dynamically typed
    2. typeof(null) -> Object
        null == undefined -> true 
        null === undefined -> false
        as both represent empty value but types are different
*/

/* Reference type (Non primitive): call by reference from memory
    Objects, Array, Functions, Map, Set, Date
    All these return type as object, func -> func object
*/
let obj = {
    name: "user",
    age: 30
}

const arr = [1, 2, 4]

const func = function(){
    console.log("Hello World");
}

// console.log(typeof func);