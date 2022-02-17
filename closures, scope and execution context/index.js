// Challenge 1

function createFuction() {
  function createdFuction () {
    console.log('Hello');
  }
  return createdFuction;
}

const function1 = createFuction();
function1();

// Challenge 2

function createFunctionPrinter(input) {
  function createdFuctionPrinter() {
    console.log(input);
  }
  return createdFuctionPrinter;
}

const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


// Challenge 3

function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

console.log(willCounter());
console.log(willCounter());
console.log(willCounter());

console.log(jasCounter());
console.log(willCounter());


function addByX(x) {
  function addInputByX(input) {
    return x + input;
  }
  return addInputByX;
}

const addByTwo = addByX(2);
console.log(addByTwo(1)); // => should return 3
console.log(addByTwo(2)); // => should return 4
console.log(addByTwo(3)); // => should return 5

const addByThree = addByX(3);
console.log(addByThree(1)); // => should return 4
console.log(addByThree(2)); // => should return 5

const addByFour = addByX(4);
console.log(addByFour(4)); // => should return 8
console.log(addByFour(5)); // => should return 9


// Challenge 4

function once(func) {
  function returnedFunction() {
    return func();
  }
  return returnedFunction;
}

const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6
