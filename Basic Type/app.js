"use strict";
// Basic Type
// - Primitive types (numbers , strings, booleans)
// - arrays
// - Tuple
// - Enum
// - Any,Unknown,Void,Null, Undefined, Never
// Tuples
// mention type at the time of declaration
let arr = ["purv", 1];
let arr2 = [1, "purv"];
// ---------------------
// Enums
var userRole;
(function (userRole) {
    userRole["ADMIN"] = "admin";
    userRole["USER"] = "guest";
    userRole["AUTHOR"] = "author";
})(userRole || (userRole = {}));
//write userRole and give suggestions
userRole.ADMIN;
// -----------------------
// Any
let anyType; // USE save any type of data
let any;
//Unknown
let a;
// Void
// function not return value so this function is void
function print() {
    console.log("Hello");
}
//null
let n;
//undefined
let u;
//never
// never rarely use  
// function never return value 
function error(message) {
    throw new Error(message);
}
// function that never ends
