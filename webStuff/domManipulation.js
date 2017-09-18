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

// var tag = document.getElementById("highlight");
// tag.classList.add("some-class")
//
// // add class on an element
var p = document.querySelector("p");
// p.classList.add("big");

// Toggle elements i.e. add the class if it isn't in the CSS or
// delete it if it is there. You're definitely going to want to think for that
p.classList.toggle("another-class");

//remove a class
p.classList.remove("another-class");

//Retrieve the textContent; just the text no tags. If you use it to update somehting it will overwrite the assigned element contents. Renders as text
var tag = document.querySelector("p");
tag.textContent

//innerHTML - renders as HTML
var ul = document.querySelector("ul")
ul.innerHTML

// Attribute

// use "getAttribute()" and "setAttribute()" to read and write attributes like
// src and href

var link = document.querySelector("a");
link.getAttribute("href"); //www.google.com
//Change href attributes
link.setAttribute("href", "www.dogs.com");
// <a href="www.dogs.com">I am a link</a>

// to change the image src
// var img = document.querySelector("img");
// img.setAttribute("src", "corgi.png");

var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function() {
    this.style.color = "pink";
  });
}
