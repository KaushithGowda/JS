// Functions

//Declaration, Invoke, Parameters, Expressiom

//Declaration is declaring function keyword

function hello() {
    //As console.log is here we just need to invoke the function outside the code block
    console.log("hey stranger");
    console.log("hey bob");
    console.log("hey stranger");
    console.log("hey shelby");
}

//Invoke is to call the function
hello();

function add1() {
    let sum = 10 + 3;
    //return statement is used to return calculation to the function
    return sum;
}
//Both invoke(function call) and console.log is done here
console.log(add1());

// Assigning a variable to caculated function
let result = add1();

console.log(result);

//Varibale is assigned directly 
let result2 = function divide(num1,num2) {
    let div = num1 / num2;
    return div;
}

console.log(result2(10,2));