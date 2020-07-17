// Arrays

/* Arrays are one of the datatypes which can store many and different types data together and can be accessed as many times as required */

//Varibles
let friend1 = "john";
let friend2 = "bob";
let friend3 = "jack";
let friend4 = "mark";

console.log(friend1);
console.log(friend2);
console.log(friend3);
console.log(friend4);

//Array
/*Methods to write an array*/

//Method I
let friends = new Array("jack","bob","john","mark");

console.log(friends);

//Method II(also explains different data types in an array)
let friends2 = ["jack",45,true,null,undefined];

console.log(friends2);

//Accessing a particular element from the array

friends2[1] = "bob" ;
let bestFriend = friends2[1];

console.log(bestFriend);
