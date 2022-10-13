// Challenge 1
// Let's start by reviewing asynchronous functions! Using setTimeout, print the string 'Hello!' after 1000ms.

function sayHello() {
  function printHello() {
    console.log("Hello!");
  }
  setTimeout(printHello, 1000)
}

// Uncomment the line below when ready
sayHello(); // should log "Hello" after 1000ms


// Challenge 2
// Create a promise. Have it resolve with a value of 'Resolved!' in resolve after a delay of 1000ms, using   setTimeout. Print the contents of the promise after it has been resolved by passing console.log to .then

let promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
  setTimeout(resolve, 1000)
});

// Should print out "Resolved!"
// ADD CODE HERE
promise.then(() => console.log("Resolved"));


// Challenge 3
// Create another promise. Now have it reject with a value of "Rejected!" without using setTimeout. Print the contents of the promise after it has been rejected by passing console.log to .catch

promise = new Promise(function(resolve, reject){
  reject();
})
promise.catch(() => console.log("Rejected"));


// Challenge 4
// Promises are asynchronous and we're now going to prove that they indeed are! Create a promise and have it resolve with the value of "Promise has been resolved!" Then uncomment the code at bottom of Challenge 4. What order do we expect "Promise has been resolved!" and "I'm not the promise!" to print? Why?

promise = new Promise(function(resolve, reject) {
  resolve();
})
promise.then(() => console.log("Promise has been resolved!"));
console.log("I'm not the promise");


// Challenge 5
// Write a function delay that returns a promise. And that promise should return a setTimeout that calls resolve after 1000ms

function delay(){
  let promise = new Promise(function(resolve, reject) {
    setTimeout(resolve, 10000)
  })
  return promise;
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
delay().then(sayHello);


// Challenge 6
// In this challenge we'll chain promises together using ".then" Create two variables: firstPromise and secondPromise Set secondPromise to be a promise that resolves to "Second!" Set firstPromise to be a promise that resolves to secondPromise Call the firstPromise with a ".then", which will return the secondPromise> promise. Then print the contents of the promise after it has been resolved by passing console.log to .then

let secondPromise = new Promise(function(resolve, reject) {
  resolve("Second!");
})

let firstPromise = new Promise(function(resolve, reject) {
  resolve(secondPromise);
});


firstPromise.then((value) => console.log(value));
