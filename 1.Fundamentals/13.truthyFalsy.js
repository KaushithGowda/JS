// Truthy and Falsy values
// "",'',0,-0,NaN,null,undefined,false

let bool1 = true;
let bool2 = false;

console.log(typeof bool1);
console.log(typeof bool2);

let value_01 = 2<5;

console.log(typeof value_01);

let text = "i am text"

if(text){

    console.log(text);
}

//""
let value_02 = "";

if(value_02){

    console.log("i am truthy");
}
else{

    console.log("i am falsy");
}

//''
let value_03 = '';

if(value_03){

    console.log("i am truthy");
}
else{

    console.log("i am falsy");
}

//0
let value_04 = 0;

if(value_04){

    console.log("i am truthy");
}
else{

    console.log("i am falsy");
}

//-0
let value_05 = -0;

if(value_05){

    console.log("i am truthy");
}
else{

    console.log("i am falsy");
}

//null
let value_06 = null;

if(value_06){

    console.log("i am truthy");
}
else{

    console.log("i am falsy");
}

//undefined
let value_07;

if(value_07){

    console.log("i am truthy");
}
else{

    console.log("i am falsy");
}

//NaN
let value_08 = "john" - 10;

if(value_08){

    console.log("i am truthy");
}
else{

    console.log("i am falsy");
}
