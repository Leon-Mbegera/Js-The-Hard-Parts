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
    greet: function() {
      console.log('hello');
    },
    introduce: function() {
        console.log(Hi, my name is ${this.name})
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