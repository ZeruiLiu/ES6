/** old ES5
*/

for (var i = 0; i < 10; i++) {
  console.log(i);
}
// Outputs 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

console.log('outside for loop: ' + i)
// output 10


//ES6

for (let k = 0; k < 10; k++) {
  console.log(k);
}
// Outputs 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

console.log(k)
// reference error, k is not defined




//const
const PI = 3.14;
PI = 3.141592; // "PI" is read-only
// it is obvious that value 3.14 can not be changed but 
// actually const keyword has nothing to do with the value
// and it is about re-assignment.

const x = [1,2,3];
x[0] = 4;// It also works

const / var x = Object.freeze([1,2,3]);
//Cannot assign to read only property '0' of object '[object Array]'
