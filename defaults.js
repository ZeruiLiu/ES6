function addTwoNumbers(x, y) {
    x = x || 0;
    y = y || 0;
    return x + y;
}

// new ES6

function addTwoNumbers(x=0, y=0) {
    return x + y;
}


// give the default value by calling other function

function required(paraName) {
  throw new Error(paraName + " Parameter required!");
}

function foo (id = required("id")) {

}

foo('give id')
foo() // Uncaught Error: id Parameter required!


//pass the function as a parameter
function foo (x, cb=function(x){return x*2;}){
  console.log(cb(x));
}

function threeTimes(x) {
  return x*3;
}

foo(4, threeTimes);// 12 
foo(4)// 8
