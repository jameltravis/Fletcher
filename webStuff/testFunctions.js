
// printReverse
var tensList = [10, 20, 30, 40, 50];

function printReverse(array) {
  for (var i = array.length; i >= 0; i--) {
    console.log(array[i]);
  }
}

// Array.prototype.isUniform = function () {
//   for (var i = 0; i < example.length; i++) {
//     if (example[i] !== example[0]) {
//       return false;
//     }
//     return true;
//   }
// };


// isUniform
function isUniform(array) {
  var firstElement = array[0];
  return array.every(function(element) {
    return element === firstElement;
  });
}


// sumArray()
var newArray = [1, 2, 3, 4, 5];
function sumArray(array) {
  sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum
}


//OG Code used for our max function
// function mymax(a)
// {
//     var m = -Infinity, i = 0, n = a.length;
//
//     for (; i != n; ++i) {
//         if (a[i] > m) {
//             m = a[i];
//         }
//     }
//
//     return m;
// }

// max() - a bit more readable
function max(array) {
    var inf = -Infinity, i = 0, n = array.length;

    for (; i != n; ++i) {
        if (array[i] > inf) {
            inf = array[i];
        }
    }
    return inf;
}

// Creating a "forEach" loop

var colors = ["red", "orange", "yellow", "green"];

function myForEach(array, func) {
  // loop through the array
  for (var i = 0; i < array.length; i++) {
    // call func() for every item in array
    func(array[i])
  }
}

myForEach(colors, alert);

myForEach(colors, function(array) {
  alert("Hi " + array)
});
