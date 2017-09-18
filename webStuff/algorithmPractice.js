// solve: sum of all multiples of 5 or 3 between 1 and 1000
var sum = 0;
function threeOrFive(num) {
  for (var i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(sum += i);
    } else {
      console.log("its skipping the if statement");
    }
  }
}

// function pleaseWork(num) {
//   var i = 0;
//   var sum = 0;
//   while (i < num) {
//     i++;
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     } else {
//       i++;
//     } console.log(sum);
//   }
// }
