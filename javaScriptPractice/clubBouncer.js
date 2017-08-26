

function clubBouncer(age) {
  var age = prompt("What is your age?");
  if (age < 0) {
    console.log("Error: impossible");
  } else if (age === 21) {
    console.log("Happy 21st birthday!! Your age is odd!");
  } else if (age % 2 === 1) {
    console.log("Your age is odd!");
  } elseif (Math.sqrt(age) % 1 === 0 ) {
    console.log("perfect square!");
  }
}
