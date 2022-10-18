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
// const array2 = ['a', 'b', 'c', 'd'];
// const myIterator = returnIterator(array2);
// console.log(myIterator()); // -> should log 'a'
// console.log(myIterator()); // -> should log 'b'
// console.log(myIterator()); // -> should log 'c'
// console.log(myIterator()); // -> should log 'd'



// Challenge 2
// Create an iterator with a next method that returns each value of the array when .next is called.

function nextIterator(arr) {
    // YOUR CODE HERE
    let i = 0;
    return {
        next: function next() {
        const current = arr[i];
        i++;
        return current;
    }}
}

// Uncomment the lines below to test your work
// const array3 = [1, 2, 3];
// const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3



// Challenge 3
// Write code to iterate through an entire array using your nextIterator and sum the values.

function sumArray(arr) {
    // YOUR CODE HERE
    // use your nextIterator function
    let sum = 0;
    const iteratorWithNext = nextIterator(arr)
    for (let i = 0; i < arr.length; i++) {
        sum += iteratorWithNext.next();
    }
    return sum;

}
  
  // Uncomment the lines below to test your work
//   const array4 = [1, 2, 3, 4];
//   console.log(sumArray(array4)); // -> should log 10


// Challenge 4
// Create an iterator with a next method that returns each value of a set when .next is called


function setIterator(set) {
    // YOUR CODE HERE
    let i = 0;
    return {
        next: function next() {
        const current = arr[i];
        i++;
        return current;
    }}
}
  
// Uncomment the lines below to test your work
// const mySet = new Set('hey');
// const iterateSet = setIterator(mySet);
// console.log(iterateSet.next()); // -> should log 'h'
// console.log(iterateSet.next()); // -> should log 'e'
// console.log(iterateSet.next()); // -> should log 'y'

  


// Challenge 5
// Create an iterator with a next method that returns an array with two elements (where the first element is the index and the second is the value at that index) when .next is called.


function indexIterator(arr) {
    // YOUR CODE HERE
  
}
  
  // Uncomment the lines below to test your work
  // const array5 = ['a', 'b', 'c', 'd'];
  // const iteratorWithIndex = indexIterator(array5);
  // console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
  // console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
  // console.log(iteratorWithIndex.next()); // -> should log [2, 'c']
  


//   Challenge 5
// Create an iterator with a next method that returns an array with two elements (where the first element is the index and the second is the value at that index) when .next is called.


function indexIterator(arr) {
    // YOUR CODE HERE
    let i = 0;
    return {
        next: function next() {
        const idx = i;
        const current = arr[i];
        i++;
        return [idx, current];
    }}
  
}
  
// Uncomment the lines below to test your work
const array5 = ['a', 'b', 'c', 'd'];
const iteratorWithIndex = indexIterator(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']

