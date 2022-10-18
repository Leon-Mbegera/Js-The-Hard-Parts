// Challenge 1
// A) Create a for loop that iterates through an array and returns the sum of the elements of the array.

function sumFunc(arr) {
    // YOUR CODE HERE
    let sum = 0;
    for(let i = 0; i < arr.length; ++i ) {
      sum += arr[i];
    }
    return sum;
}

// console.log(sumFunc([1, 2, 3]));