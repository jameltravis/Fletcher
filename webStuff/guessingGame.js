// create secret number
var secretNumber = 4;

// ask user for guess
var stringGuess = prompt("Guess what the secret number is!");
var numberGuess = Number(stringGuess);

// check guess
if (numberGuess === secretNumber) {
  alert("Congrats! You guessed the secret number!")
} else if (numberGuess > secretNumber) {
  alert("Too dang high!")
} else if (numberGuess < secretNumber) {
  alert("Too dang low!")
}
