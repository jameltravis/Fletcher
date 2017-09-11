var count = 1;

while (count < 6) {
  console.log("count is: " + count);
  count++;
}

// string looping or something
var str = "hello";
var count = 0;

while (count < str.length) {
  console.log(str[count]);
  count++;
}
// While loop problem set

// function for printing all numbers between -10 and 19
var num = 10

function negPos(n) {
  while (n < 20) {
    console.log(n);
    n++;
  }
}

// Print all even numbers between 10 and 40
var num = 10;

function evenNumbers(n) {
  while (n < 41) {
    if (n % 2 === 0) {
      console.log(n);
    }
    n++;
  }
}

// print all odd numbers between 300 and 333

function oddNumbers(n) {
  while (n < 334) {
    if (n % 2 === 1) {
      console.log(n);
    }
    n++;
  }
}

// Print all numbers divisible by 5 and 3 between 5 and 50

function fiveThree(n) {
  while (n < 51) {
    if (n % 5 === 0 && n % 3 === 0) {
      console.log(n);
    }
    n++;
  }
}

// Array Prcatice
var NHoods = ["Midtown", "Grenich Village", "Harlem", "Financial District"];

// "Push" adds data to the end of an array
NHoods.push("The Heights");

// "Pop" removes the last item in an array
NHoods.pop();

// "Unshift" adds an item to the front of an array
NHoods.unshift("Flatiron");

// "Shift" removes the first element in an array
NHoods.shift();

// "indexOf" lets you know what the index is
NHoods.indexOf("Flatiron");

// "slice" copies parts of an array and takes two arguments:
// where the slice should start and where it should end.


// Loop practice with arrays

var colors = ["red", "orange", "yellow", "green"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// "forEach" - built-in way of iterating over an array: "forEach"
// syntax is arr.forEach(function()){codeBlock;}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(color) {
  if(color % 3 === 0) {
    console.log(color);
  }
});

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
