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
