// Implicit type conversion
/* JS automatically converts numbers into string and string into to numbers accordingly */

/*String concatenation(string addtion) can be done in JS*/
let value1 = "firstName";
let value2 = "lastName";
result = value1 + value2;

console.log(result);

/*Subtraction cannot be done in JS which will result in NaN(Not a Numnber)*/

let value3 = "firstName";
let value4 = "lastName";
result2 = value3 - value4;

console.log(result2);

/* JS does implicit conversion by converting number into string while doing string concatenation(string addition) */ 

let number1 = 123;
result3 = value1 + number1;

console.log(result3);

/* JS takes these variables as string and adds */
let value5 = "10";
let value6 = "3";
result4 = value5 + value6;

console.log(result4);

/*JS takes these variables as numbers and subs */ 
let value7 = "10";
let value8 = "3";
result5 = value7 - value8;

console.log(result5);
