// Challenge 1: What order should these console logs come out ?

function sayHowdy() {
  console.log("Howdy!")
}

function testMe() {
  setTimeout(sayHowdy, 0)
  console.log("Partnah")
}

testMe()


// Partnah is first printed to the console, and when its over, sayHowdy is pushed into the call stack and called to log Howdy to the console.



// Challenge 2

function delayedGreet() { 
  console.log("welcome")
}

setTimeout(delayedGreet, 3000)


// Challenge 3

function helloGoodbye() {
  console.log("hello")
  setTimeout(() => console.log('good bye'), 2000)
} 

helloGoodbye()


// Challenge 4

// function brokenRecord() {
//   console.log("hi again")
//   setTimeout(brokenRecord, 1000)
// }

// brokenRecord


// Challenge 5

function everyXsecsForYsecs(func, interval, duration) {
  while (interval < duration) {
    setTimeout(func, interval)
    duration = duration - interval
  }
}

function sayHi() {
  console.log('hi')
}

everyXsecsForYsecs(sayHi, 1000, 5000)

function everyXsecsForYsecs(func, interval, duration) {
  const intervalId = setInterval(func, interval * 1000);
  setTimeout(() => clearInterval(intervalId), duration * 1000);
}

function theEnd() {
  console.log('This is the end!');
}

everyXsecsForYsecs(theEnd, 2, 20);

