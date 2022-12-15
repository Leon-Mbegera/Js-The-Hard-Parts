// Object-oriented programming exercises

// Challenge: makePerson

// Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:
// 1. Create an empty object
// 2. Add a name property to the newly created object with its value being the name argument passed into the function
// 3. Add an age property to the newly created object with its value being the "age" argument passed into the function
// 4. Return the object


function makePerson(name, age) {
    // add code here
    const personObj = {};

    personObj.name = name;
    personObj.age = age;

    return personObj;
}

const vicky = makePerson('Vicky', 24);


// Uncomment these lines to check your work!
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24



// Challenge: personStore
// Inside personStore object, create a property greet where the value is a function that logs "hello".

const personStore = {
    // add code here
    greet: function () {
        console.log("hello")
    }
};

// Uncomment this line to check your work!
// personStore.greet(); // -> Logs 'hello'



// Challenge: personFromPersonStore
// Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.

function personFromPersonStore(name, age) {
    // add code here
    const personObj = Object.create(personStore)
    personObj.name = name;
    personObj.age = age;
    return personObj;
}

const sandra = personFromPersonStore('Sandra', 26);

// Uncomment these lines to check your work!
//   console.log(sandra.name); // -> Logs 'Sandra'
//   console.log(sandra.age); // -> Logs 26
//   sandra.greet(); // -> Logs 'hello'


// Challenge: introduce
// Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".


const personStore = {
    greet: function () {
        console.log('hello');
    },
    introduce: function () {
        console.log(Hi, my name is ${ this.name })
    }
}

function personFromPersonStore(name, age) {
    const person = Object.create(personStore);
    person.name = name;
    person.age = age;
    return person;
}

const sandra = personFromPersonStore('Sandra', 26);

// add code here


// Uncomment this line to check your work!
//   sandra.introduce(); // -> Logs 'Hi, my name is Sandra'


// Challenge: PersonConstructor
// Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string "hello".


function PersonConstructor() {
    // add code here
    this.greet = function () {
        console.log("hello")
    }

}

const simon = new PersonConstructor();

// Uncomment this line to check your work!
simon.greet(); // -> Logs 'hello'



// Challenge: personFromConstructor
// Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.


function PersonConstructor(name, age) {
    this.greet = function () {
        console.log('hello');
    }
    this.name = name;
    this.age = age;
}

function personFromConstructor(name, age) {
    // add code here
    return new PersonConstructor(name, age)

}

const mike = personFromConstructor('Mike', 30);

// Uncomment these lines to check your work!
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); // -> Logs 30
// mike.greet(); // -> Logs 'hello'