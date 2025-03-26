// Basic Type
// - Primitive types (numbers , strings, booleans)
// - arrays
// - Tuple
// - Enum
// - Any,Unknown,Void,Null, Undefined, Never

// Tuples
// mention type at the time of declaration
let arr: [string, number] = ["purv", 1];
let arr2: [number, string] = [1, "purv"];
// ---------------------

// Enums
enum userRole {
  ADMIN = "admin",
  USER = "guest",
  AUTHOR = "author",
}
//write userRole and give suggestions
userRole.ADMIN;
// -----------------------

// Any
let anyType: any; // USE save any type of data
let any;

//Unknown
let a: unknown;

// Void
// function not return value so this function is void
function print(): void {
  console.log("Hello");
}

//null
let n: null;

//undefined
let u: undefined;


//never
// never rarely use  
// function never return value 
function error(message: string): never {
  throw new Error(message);
}
// function that never ends