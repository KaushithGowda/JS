// If else statements in JS

//Comparsion statements in JS
// ">", "<", ">=", "<=" "==", "===", "!=", "!=="

if(2>1){
    console.log("im math genius");
}

// greater than (>)
let num1=5;
let num2=6;

if(num1 > num2){

    console.log("num1 is greater than num2");
}
else{

    console.log("num1 is lesser than num2");
}

// Lesser than (<)
let num3=10;
let num4=6;

if(num3 < num4){

    console.log("num3 is lesser than num4");
}
else{
    
    console.log("num3 is greater than num4");
}

//Greater than or equal to(>=)
let num5=16;
let num6=15;

if(num5 >= num6){

    console.log("num5 is equal or greater than num6");
}
else{

    console.log("num5 is lesser than num6");
}

//Lesser than or equal to(<=)
let num7=15;
let num8=18;

if(num7 <= num8){

    console.log("num7 is lesser than or equal to num8");
}
else{

    console.log("num7 is greater than num8");
}

//Equal to(==)
let num9 = 10;
//Implicit type conversion is done by JS 
let num10 = "10";

if(num9 == num10){

    console.log("num9 is equal to num10");
}
else{

    console.log("num9 is not equal to num10");
}

//Strictly Equal too(===)
//This operator compares both values and checks data types are equal or not
let num11 = 10;
let num12 = "10";

if(num11 === num12){
    console.log("num11 and num12 are both equal and are of same data types");
}
else{

    console.log("either num11 and num12 are not equal or they are not of same data types");
}

//Not equal(!=)
let num13 = 15;
let num14 = 14;

if(num13 != num14){

    console.log("num13 and num14 are not equal");
}
else{

    console.log("num13 and num14 are equal");
}

/*Not sure about this 
//Strictly Not equal(!==)
let num15 = 10;
let num16 = 15;

if(num15 !== num16){

    console.log("num15 and num16 are not equal");
}
else{

    console.log("num15 and num16 are equal");
}
*/

//Else if
let person1 = "john";
let person2 = "bob";

let generalPerson = "peter";

if(generalPerson === "john"){

    console.log("this is john");
}
else if(generalPerson === "bob"){

    console.log("this is bob");
}
else{

    console.log("I don't know who this is?");
}














































