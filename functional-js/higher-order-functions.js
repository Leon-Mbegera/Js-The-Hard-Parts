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



// Challenge 5
// For this challenge, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.


const mapWith = (array, callback) => {
    const outputArray = [];

    forEach(array, el => outputArray.push(callback(ele)))
    return outputArray;
};




// Challenge 6
// The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
// const nums = [4, 1, 3];
// const add = (a, b) => a + b; 
// reduce(nums, add, 0);   //-> 8
// Here's how it works. The function has an "accumulator value" which starts as the initialValue and accumulates the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments to the callback. The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) to make it 5. Finally add(5, 3) brings it to 8, which is returned.



const reduce = (array, callback, initialValue) => {

    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i])
    }

    return accumulator;

};

const nums = [4, 1, 3];
const add = (a, b) => a + b;
console.log(reduce(nums, add, 0));   //-> 8




