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

// B) Create a functional iterator for an array that returns each value of the array when called, one element at a time.

function returnIterator(arr) {
    // YOUR CODE HERE
    let i = 0;
    function myIterator() {
        const current = arr[i];
        i++;
        return current;
    }
    return myIterator;
}

// Uncomment the lines below to test your work
const array2 = ['a', 'b', 'c', 'd'];
const myIterator = returnIterator(array2);
console.log(myIterator()); // -> should log 'a'
console.log(myIterator()); // -> should log 'b'
console.log(myIterator()); // -> should log 'c'
console.log(myIterator()); // -> should log 'd'