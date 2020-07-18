//Object in JS

let person ={
    name : "john",
    lastName : "pepper",
    age : 25,
    wife : true,
    sibling : ['brother', 'sister'],
    bike : function () {
        console.log("aprilla");        
    }
}

//Accessing the element of an Object using dot notation
let firstName1 = person.name;

console.log(firstName1);

//Accessing the element of an Object using square braces
let firstName2 = person["lastName"];

console.log(firstName2);

//Invoke function
person.bike();


//Accessing the element of an Array inside an Object using dot notation
let bestSibling = person.sibling[1];
// let bestSibling = person[sibling[0]]; This is method doesnot work in array

console.log(bestSibling);