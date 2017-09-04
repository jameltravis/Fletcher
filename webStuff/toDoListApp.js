// INFINITE LOOP, PLEASE FIX

var toDoList = [];
var input = prompt("What would you like to do?");
while (input !== "quit") {
  if (input === "new") {
    var newToDo = prompt("Enter new list item");
    toDoList.push(newToDo);
  } else if (input === "list") {
    console.log(toDoList);
  }
}
console.log("Okay you quit the app");
