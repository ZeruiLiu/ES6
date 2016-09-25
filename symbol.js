
//primitive type
typeof Symbol() === 'symbol'

//Symbols are global unique, unguessable. 
// Symbol(), Symbol(), Symbol('foo') and Symbol('foo') are all different

var key = Symbol("same text");
var key2 = Symbol("same text");

key !== key2 // true

console.log(key)// Symbol("same text");

// add description text
Symbol();
Symbol("some description text");

//Symbols can be used as Object keys and we can assign an unlimited number of unique Symbols to an object
// and be guaranteed that these will never conflict with String keys, or other unique Symbols:

var myObj = {};
var fooSym = Symbol('foo');
var otherSym = Symbol('bar');
myObj['foo'] = 'bar';
myObj[fooSym] = 'baz';
myObj[otherSym] = 'bing';
console.log(myObj.foo === 'bar'); // true
console.log(myObj[fooSym] === 'baz'); // true
console.log(myObj[otherSym] === 'bing'); // true

// Symbols do not show up on an Object using for in, for of or Object.getOwnPropertyNames 
// the only way to get the Symbols within an Object is Object.getOwnPropertySymbols:

Object.getOwnPropertySymbols(myObj) // [Symbol(foo), Symbol(bar)]

//In contrast to Symbol(), the Symbol.for() function creates a symbol if needed
var globalSym = Symbol.for("foo"); // create a new global symbol
Symbol.keyFor(globalSym); // "foo"
Symbol.for("bar") === Symbol.for("bar"); // true

//symbols are not always unique.
var myObj = {};
var fooSym = Symbol.for('foo');
var otherSym = Symbol.for('foo');
myObj[fooSym] = 'baz';
myObj[otherSym] = 'bing';
console.log(fooSym === otherSym);// true
console.log(myObj[fooSym] === 'bing'); // true
console.log(myObj[otherSym] === 'bing');// true


// why use Symbol
o.__dont__touch__this = 42;
//sth is very impotant and we do not want to touch it
