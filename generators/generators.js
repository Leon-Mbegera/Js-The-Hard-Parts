// Challenge 7
// Build a function that walks through an array and returns the element concatenated with the string "was found after index x", where x is the previous index.
// Note: if it is the first element it should say that it is the first

function iterator(array) {

    let prevIndex = 0
    for(let i = 0; i < array.length; ++i) {
        if (!prevIndex) console.log(array[i] + " is the first")
        if (prevIndex) console.log(array[i] + " was found after index " + (prevIndex - 1))
        prevIndex++;
    }
}

// console.log(iterator([4, 5, 6]));