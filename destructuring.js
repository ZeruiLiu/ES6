// array: position related

//ES5
var arr = [1, 2, 3, 4];
var a = arr[0];
var b = arr[1];
var c = arr[2];
var d = arr[3];

//ES6
let [a, b, c, d] = [1, 2, 3, 4];
console.log(a); // 1
console.log(b); // 2

//easily swap values
let a = 100;
let b = 200;
[a,b] = [b,a];

//ES6: very flexsible how many variables and elements we should provide
//we can even provide default value
let [a, b, c, d=19] = [1, 2, 3];
console.log(d)// 19

// When it comes to Arrays you can conveniently skip over elements that you don’t care about.
// easily for you only get specific posiiton element in the array
var [,,a,b] = [1,2,3,4,5] 
console.log(a) // <- 3 
console.log(b) // <- 4


// put the returned array element value into one object
function foo() {
  return [1,2,3];
}

var [
    a = 90,
    b = 111,
    c = 100
] = foo() 

var o = {};

[
o.a = 8,
o.b = 9,
o.c = 10
] = foo() 

console.log(o.b) // 2


//object: they are not position related any more but name related

var Jack = { gender: 'male', hobby: 'running' };
//ES5
var gender = Jack.gender; // 'male'
var hobby = Jack.hobby; // 'running'
//ES6
let Jack = { gender: 'male', hobby: 'running' };
let {hobby, gender, notExsiting} = Jack;

console.log(gender); // 'male'
console.log(hobby); // 'running'
console.log(notExsiting); // undefined


// object destructive

function foo() {
  return {
    a: 'value of a',
    b: 2,
    c: 3,
    d: [4,'should be F',6,7]
  };
}

// 
var {
  a: A = 'default value',
  b = 111, // same as b: b = 111
  c : C,
  d: [
      E,
      F,
      G
    ]
} = foo();

console.log(A,b,C,E,F,G) 
// A: value of a 
// b: 2 
// C: 3 
// E: 4 
// F: should be F 
// G: 6




// destructure and restructure 

var defaults = {
  name: "John",
  age: 20,
  dob: "08/22/1996",
  nicknames: [
  "Jonny",
  "JohnBoy"],
};

var config = {
  age: 36,
  nicknames: [
  "Config nickname"]
};

// restrucure config object using the common shared default value
{
  let {
    name = defaults.name,
    age = defaults.age,
    dob = defaults.dob,
    nicknames: [
      nick1 = defaults.nicknames[0],
      nick2 = defaults.nicknames[1],
    ]
  } = config;

  config = {
    name: name,
    age: age,
    dob: dob,
    nicknames: [
      nick1,
      nick2
    ]
  }
}
console.log(config.nicknames[0])// Config nickname
console.log(config.nicknames[1])// JohnBoy