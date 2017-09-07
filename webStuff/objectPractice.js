// Lets get started with objects!
// Objects have no order - great
// types can be mixed and matched - great

var person = {
  name: "Travis",
  age: 21,
  city: "LA"
};

// to retrieve data from objects:
// 1. Bracket notation - a MUST when evaluating variables ex: person[var]
console.log(person["name"]);

//2. Dot notation:
console.log(person.name);

// objects can be updated / reasigned ex:
console.log(person.age += 1);

//to intialize a new object:
var houseSize = {}
house.bedroom = 400;
house.kitcen = 200;
house.livingRoom = 500;

// Or

var houseSize = new Object();
house.bedroom = 400;
house.kitcen = 200;
house.livingRoom = 500;
