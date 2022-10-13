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

var promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
  setTimeout(resolve, 1000)
});

// Should print out "Resolved!"
// ADD CODE HERE
promise.then(console.log("Resolved"));
