// store 'button variable'
var button = document.querySelector("button");
// var body = document.querySelector("body");
document.body.style.backgroundColor = "white";

// function changeColor() {
//   if (document.body.style.backgroundColor === "white") {
//     document.body.style.backgroundColor = "purple";
//   }
//   else {
//     document.body.style.backgroundColor = "white";
//   }
// }

// button.addEventListener("click", function () {
//   if (document.body.style.backgroundColor === "white") {
//     document.body.style.backgroundColor = "purple";
//   }
//   else {
//     document.body.style.backgroundColor = "white";
//   }
// });

// OR
//
// var isPurple = false;
//
// button.addEventListener("click", function () {
//   if (isPurple) {
//     document.body.style.backgroundColor = "white";
//   } else {
//     document.body.style.backgroundColor = "purple";
//   }
//   isPurple = !isPurple;
// });


// OR

button.addEventListener("click", function() {
  document.body.classList.toggle("purple");
});
