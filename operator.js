
//spread operator

//ES5
var a = [1,2,3,4], b = [5,6];
var c = [0].concat(a,b,[7]);


//new ES6
var a = [1,2,3,4];

//string is also iterable and array is also iterable
var d = "56";
var c = [0,...a,...d,7]; // output [0, 1, 2, 3, 4, "5", "6", 7]

// old ES5
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args);

// using ES6 spread 

function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);



// rest operator
function test (x,y, …z){
// x ==== 1, y === 2 
//z === [3,4,5,6]
}
test(1,2,3,4,5,6)


function afterRest(first, ...second, third) {
    // SyntaxError: parameter after rest parameter
}
function multipleRest(first, ...second, ...third) {
    // SyntaxError: parameter after rest parameter
}



