// Urny operator
//Only one operator will be present

let num = 10;

console.log(typeof num);//num = operand and typeof = operator

// Binary operator
//Two operators will be present

let num_2 = 5;
let sum = 5 + 5;// Airthmetic operator and addition opeator 

console.log(sum);

//Terinary operator
//Three operator will be present

let result_1 = 9;

/*
Modules = division 
Anything divided my even number = 0 Even
Anything divided my even number = 1 Odd
*/

/*
result_1 = 0 Runs if true(even)
result_1 = else(not 0) Runs if false(odd)
*/
result_1 % 2 === 0 ? console.log("even number") : console.log("odd number");

//Doing with help of function

let result_2 = 5;

function name_1(text) {
    console.log(text + " " + "number");
}

result_2 % 2 === 0 ? name_1("even") : name_1("odd");























