// const str = ["Hello"];
// str.push("Mufacka");
// console.log(str);
// console.log(str.length);

// function data(str) {
//   var show = str.split(" ");
//   show.sort(function (a, b) {
//     return b.length - a.length;
//   });
//   return show;
// }
// console.log(data((str = "javascript is my favourite language")));

const inputArray = ["aba", "aa", "ad", "vcd", "aba"];

function solution(inputArray) {
  inputArray.sort(function (a, b) {
    return b.length - a.length;
  });
  let longestStrings = [inputArray[0]];
  for (let i = 1; i < inputArray.length - 1; ++i) {
    if (inputArray[0].length === inputArray[i].length) {
      longestStrings.push(inputArray[i]);
    }
  }
  return longestStrings;
}

console.log(solution(inputArray));
