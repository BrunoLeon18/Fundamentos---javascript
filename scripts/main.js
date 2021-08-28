

let nameUser = "bruno";
const pi = 3.14;
let dog = "chihuahua"

//console.log("dog", dog);

{
    let dog = "doberman";
    //console.log("dog", dog);
}

//console.log("dog", dog)

/*
tipos de datos
*/

let userName = "Bruno Leon"; //string
let userAge = 28; // number
let isMan = true; // boolean (true , false) // 1,0
let amount = null; // null
let married; // undefined
let account = Symbol("123456") // symbol
let obj = {
    name:"sebastian",
    lastname: "yabiku",
    age: 34,
    sexo: "m",
    isPeruvian: true,
    isMarried: false,
}; // object

//typeof = identificar tipo de dato

console.log(typeof userName);
console.log(typeof userAge);
console.log(typeof isMan);
console.log(typeof amount);
console.log(typeof married);
console.log(typeof account);
console.log(typeof obj);

// Cambiar tipo de dato de numero a string y de string a numero

console.log("userAge", typeof userAge.toString());
console.log("userAge", parseInt("43"));
console.log("userAge", parseFloat("2.56").toFixed(5));

