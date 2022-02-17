// Challenge 1

function addTwo(num) {
  return num + 2;
}

console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2

function addS(word) {
  return word + 's'
}

console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3

function map(array, callback) {
  const mappedArray = [];
  for (let i=0; i < array.length; i++) {
    mappedArray.push(callback(array[i]));
  }
  return mappedArray;
}

console.log(map([1, 2, 3], addTwo))

// Challenge 4

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}
/* ------------------ */
  // Extensions

/* ------------------ */

 // Challenge 5

function mapWith(array, callback) {
  const mappedArray = [];
  forEach(array, el => mappedArray.push(callback(el)));
  return mappedArray;
}

console.log(mapWith([4, 5, 6], addTwo))


// Challenge 6

function add(a, b) {
  return a + b;
}

function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  for (i=0; i<array.length; ++i) {
    accumulator = callback(accumulator, array[i])
  }
  return accumulator;
}

console.log(reduce([1, 2, 3, 4], add, 0));