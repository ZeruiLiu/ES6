// avoid escaping

var text = "This string contains \"double quotes\" which are escaped.";
let text = `This string contains "double quotes" which don't need to be escaped anymore.`;

//ES5
console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"

//ES6
console.log(`string text line 1

string text line 2`);
// "string text line 1
// string text line 2"



//support interpolation

var name = 'Tiger';
var age = 13;

//ES5
console.log('My cat is named ' + name + ' and is ' + age + ' years old.');
//ES6
console.log(`My cat is named ${name} and is ${age} years old.`);


var today = new Date()
var text = `the time and date is ${today.toLocaleString()}`
console.log(text)// the time and date is 8/12/2016, 9:57:50 AM


//Tagged template literals
var a = 5;
var b = 10;

function sss(strings, ...values) {
  console.log(strings[0]); // "Hello "
  console.log(strings[1]); // " world "
  console.log(strings[2]); // ""
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50

  //return "Bazinga!"; // return sth else
  return `New manupuldated string with ${values[0]} in the ${strings[0]}${strings[1]}`//returns the manipulated string
}

let newStr = sss`Hello ${ a + b }${ a * b } world ${ a * b }`;

console.log(newStr) // New manupuldated string with 15 in the Hello  world 

a = 21;


console.log(newStr) // New manupuldated string with 15 in the Hello  world 
