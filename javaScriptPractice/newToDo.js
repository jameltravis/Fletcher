var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseover", function() {
    this.classList.add("selected");
  })
  lis[i].addEventListener("mouseout", function() {
    this.classList.remove("selected");
  })
  lis[i].addEventListener("click", function () {
    this.classList.Toggle("done");
  })
}

var sum = 0;
var td = document.getElementsByTagName("td");
var goodTd = document.querySelectorAll("td a")

var events = document.querySelectorAll("Events");

for (var i = 0; i < array.length; i++) {
  array[i]
}
