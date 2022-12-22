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

let personStore = {
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

let sandra = personFromPersonStore('Sandra', 26);

// Uncomment these lines to check your work!
//   console.log(sandra.name); // -> Logs 'Sandra'
//   console.log(sandra.age); // -> Logs 26
//   sandra.greet(); // -> Logs 'hello'


// Challenge: introduce
// Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".


personStore = {
    greet: function () {
        console.log('hello');
    },
    introduce: function () {
        console.log(`Hi, my name is ${this.name}`)
    }
}

function personFromPersonStore(name, age) {
    const person = Object.create(personStore);
    person.name = name;
    person.age = age;
    return person;
}

sandra = personFromPersonStore('Sandra', 26);

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

let mike = personFromConstructor('Mike', 30);

// Uncomment these lines to check your work!
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); // -> Logs 30
// mike.greet(); // -> Logs 'hello'




// Challenge: introduce (cont.)
// Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".


function PersonConstructor() {
    this.greet = function () {
        console.log('hello');
    }
    this.introduce = function () {
        console.log(`Hi, my name is ${this.name}`)
    }
}

function personFromConstructor(name, age) {
    const person = new PersonConstructor();
    person.name = name;
    person.age = age;
    return person;
}

mike = personFromConstructor('Mike', 30);

// Uncomment this line to check your work!
mike.introduce(); // -> Logs 'Hi, my name is Mike'






// Challenge: Dog Constructor
// Declare a function Dog that creates a new instance of a Dog object when invoked with the new keyword. Each Dog object should have a name property and a breed property, both strings which are passed in as arguments when calling the Dog function. It should also have a property called tricks, set to an array representing all the tricks that dog knows. When a new object is initiated, tricks should be empty.

// All of your Dog objects must also have access to two methods that are stored on the constructor's prototype:

// The first method, learnTrick, should take in a string as an argument and add that string to the tricks array of the particular Dog object it was called on.

// The second method, performTrick, should also take a string as an argument. It should check to see if that string is in the tricks array belonging to the Dog instance it was called on; if so, it should log the string 'name performed trick!' If not, log the string 'name doesn't know that trick.


function Dog(name, breed) {
    // add code here
    this.name = name;
    this.breed = breed;
    this.tricks = [];
}

Dog.prototype.learnTrick = function (trick) { this.tricks.push(trick) }
Dog.prototype.performTrick = function (perform) {
    if (this.tricks.includes(perform)) console.log(`${this.name} performed ${perform}!`)
    else console.log(`${this.name} doesn't know that trick.`)
}
const fido = new Dog('Fido', 'poodle');

// Uncomment these lines to check your work!
// fido.learnTrick('fetch');
// fido.performTrick('fetch'); // should log 'Fido performed fetch!'
// fido.performTrick('sit'); // should log 'Fido doesn't know that trick.'




// Challenge: Inventory


// Declare a function Inventory that, when invoked with the new keyword, returns objects that keep track of an inventory. Your Inventory function should accept two arguments: item, a string, and price, a number. The object returned should contain a property whose key matches the passed-in item argument, and is set to another object with two properties: price (which will be set to the price argument the method was called with) and quantity, which should be initially set to 1.

// Each object returned from this Inventory constructor should, via the prototype chain, have access to three methods:

// The method addItem will add additional items to the object returned from the constructor. It should also accept an item and price argument, and when invoked, should check to see if the Inventory object it is called upon has a property that matches the passed-in item name. If it does not, add one, and set it to another item object, following the same format as above. If the Inventory object does have a property with that name, increment that item's quantity property by one, and replace the price with whatever number was just passed in.

// The method deleteItem should accept a string as an argument. If a matching property exists on the Inventory object, decrement its quantity by 1 and return the string 'Deleted'. If the quantity is already 0, return the string 'Nothing to delete'.

// The method checkItem should take a string as an argument and check to see whether that string exists as a property on the Inventory object. If so, return the object for that item. If not, return the string 'Item is not in inventory'.


function Inventory(item, price) {
    // add code 
    Object.assign(this, {[item]: {
      price: price,
      quantity: 1
    }})
  }
  
  Inventory.prototype.addItem = function(item, price) {
    if (this[item]) {
      this[item].quantity++;
      this[item].price = price;
    } else {
        Object.assign(this, {[item]: {
        price: price,
        quantity: 1
        }})
    }
  }
  
  Inventory.prototype.deleteItem = function(item) {
    if (this[item]) {
      if (this[item].quantity > 0) {
        this[item].quantity--;
          return "Deleted"
          } else return "Nothing to delete"	
      } 
  }
  
  Inventory.prototype.checkItem = function(exists) {
    if(this[exists]) {
      return this[exists];
      } else return "Item is not in inventory"
  }
  
  const myInventory = new Inventory('cucumber', 2);
  
// Uncomment these lines to check your work!
//   myInventory.addItem('carrot', 1);
  
//   console.log(myInventory.checkItem('cucumber')); // Logs: { price: 2, quantity: 1 }
//   myInventory.addItem('cucumber', 3); 
//   console.log(myInventory.deleteItem('carrot')); // Logs: 'Deleted'
//   console.log(myInventory.deleteItem('carrot')); // Logs: 'Nothing to delete'
//   console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
//   console.log(myInventory.checkItem('radish')); // Logs: 'Item is not in inventory'