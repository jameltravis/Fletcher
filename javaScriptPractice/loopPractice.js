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
