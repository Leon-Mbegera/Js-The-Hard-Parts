// Challenge 1
// Create a function addTwo that accepts one input and adds 2 to it.

function addTwo(input) {
    return input + 2
}

// To check if you've completed this function, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));



// Challenge 2
// Create a function addS that accepts one input and adds an "s" to it.

function addS(input) {
    return input + "s"
}

// Uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));



// Challenge 3
// Create a function called map that takes two inputs:
// 1. an array of numbers (a list of numbers)
// 2. a 'callback' function - a function that is applied to each element of the array (inside of the         function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.

const map = (array, callback) => {
    const outputArray = [];

    for (let i = 0; i < array.length; i++) {
        outputArray.push(callback(array[i]))
    }

    return outputArray;
};

// console.log(map([1, 2, 3], addTwo));




// Challenge 4
// The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];

const forEach = (array, callback) => {

    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
};

// See for yourself if your forEach works!
// forEach(letters, char => alphabet += char);
// console.log(alphabet);   //prints 'abcd'