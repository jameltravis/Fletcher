var h1 = document.querySelector("h1");
h1.style.color = "pink";

// Code below doesn't run correctly

// var body = document.querySelector("body");
// var isBlue = false;
//
// setInterval(function(){
//   if (isBlue) {
//     body.syle.background = "white";
//   } else {
//     body.style.background = "blue";
//   }
//   isBlue = !isBlue;
// }, 1000);

// Important methods: document.getElementById()
var tag = document.getElementById("highlight")


// document.getElementsByClassName()
//document.getElementsByTagName()

//document.querySelector()
// returns elements based on CSS selectors:
var tag = document.querySelector("#highlight");

//document.querySelectorAll()
// same as above example. The difference is that it will select ALL
// of the selector types

// 4 ways to select the first "<p>" tag

document.querySelector("p");
document.querySelector("#first");
document.querySelector(".special");
document.getElementById("first");

document.getElementsByClassName("special")[0]; //not specific enough.
document.getElementsByTagName("p")[0]; // not specific enough

// // "Style" property
// //First select the element
// var tag = document.getElementById("highlight");
//
// //Next Manipulate it
// tag.style.color = "blue";
// tag.style.border = "10px solid red";
// tag.style.fontsize = "70px";
// tag.style.background = "yellow";
// tag.style.marginTop = "200px";

var tag = document.getElementById()
