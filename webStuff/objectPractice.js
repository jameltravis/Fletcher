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
houseSize.bedroom = 400;
houseSize.kitcen = 200;
houseSize.livingRoom = 500;

// Or

var officeSize = new Object();
officeSize.midtown = 400;
officeSize.middleVillage = 200;
officeSize.harlem = 500;


// "Arrays" with objects in them
var posts = [
  {
    title: "Cats are okay",
    author: "Colt",
    comments: ["Awesome post", "terrible post", "5/7"]
  },
  {
    title: "Cats are pretty awesome",
    author: "Not Colt",
    comments: ["<3", "I can't believe you've done this"]
  }
]// You can add new fields(?) to the object using the following code:

var prop = "color"
posts[prop] = "red";

// Exersize to retrieve an object from a nested objects. Retrieve "Malfoy"
// from someObject - correct

var someObject = {
  friends: [
    {name: "Malfoy"},
    {name: "Crabbe"},
    {name: "Goyle"}
  ],
  color: "baby blue",
  isEvil: true
}

someObject.friends[0].name

// Create an array of movie objects. Each moviie should have a title, rating
// and hasWatched properties. Iterate through the array and print out something
// that looks like:
// You ahve watched "In Brues" - 5 stars
// You have not seen "Frozen" - 4.5 stars
// You have seen "Mad Max Fury Road" - 5 stars
// You have not seen "Les Miserables" - 3.5 stars
// USE YOUR OWN MOVIES!

var movieDB = [
  {
    title: "Lion King",
    rating: 5,
    haveWatched: true
  },
  {
    title: "Avatar",
    rating: 2.5,
    haveWatched: true
  },
  {
    title: "Paid In Full",
  rating: 5,
  haveWatched: true
  },
  {
    title: "Scary Movie 5",
    rating: 0,
    haveWatched: false
  },
  {
    title: "Insane Physics Movie",
    rating: 0,
    haveWatched: false
  }
];

function movieRatings(array) {
  for (var i = 0; i < array.length; i++) {
    if (array.haveWatched === true) {
      console.log("You have watched " + array[i].title + " - " + array[i].rating + " stars");
    } else {
      console.log("You have not watched " + array[i].title + " - " + array[i].rating + " stars");
    }
  }
}


// Test

var offices = [
  {
    title: "Academic Affairs",
    rating: 5,
    haveWatched: true
  },
  {
    title: "Bursar",
    rating: 2.5,
    haveWatched: true
  },
  {
    title: "Information Technology",
  rating: 5,
  haveWatched: true
  },
  {
    title: "Registrar",
    rating: 0,
    haveWatched: false
  },
  {
    title: "Committee on Academic Standards",
    rating: 0,
    haveWatched: false
  }
];

function officeRatings(array) {
  for (var i = 0; i < array.length; i++) {
    if (array.haveWatched === true) {
      console.log("You have visited " + array[i].title + " - " + array[i].rating + " stars");
    } else {
      console.log("You have not visited " + array[i].title + " - " + array[i].rating + " stars");
    }
  }
}

// As a "forEach" statement:

// movieDB.forEach(function(array){
//   var result = "You have ";
//   if (array.haveWatched) {
//     result += "watched ";
//   } else {
//     result += "not seen ";
//   }
//   result += "\"" + array.title + "\" - ";
//   result += array.rating + " stars"
//   console.log(result);
// });


// Function for building the string for the previous job

function buildString(array) {
  var result = "You have ";
  if (array.haveWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + array.title + "\" - ";
  result += array.rating + " stars"
  return result;
}

movieDB.forEach(function(array) {
  console.log(buildString(array));
});


// js methods
// what are methods? Methods are functions that are properties inside of an
// object. Ex:

var obj = {
  name: "Chuck",
  age: 45,
  isCool: false,
  friends: ["bob", "tina"],
  add: function (x, y) {
    return x + y;
  }
}

obj.add(15, 2);

//Why do this? Organize our code and have clean code. Prevent name-space
// collisions. Ex:

var dogSpace = {};

dogSpace.speak = function() {
  return "Woof!"
}

var catSpace = {};

catSpace.speak = function() {
  return "MEOW!"
}

// "this" :

var comments = {}

comments.data = ["Good job", "you such", "you're the best"]

comments.print = function print() {
  // here "this" referes to the object: comments
  this.data.forEach(function(el) {
    console.log(el);
  });
}
