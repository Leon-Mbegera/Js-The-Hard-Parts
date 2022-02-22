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