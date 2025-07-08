// function splitAndMerge(string, separator) {
//   let splitedString = string.split("");
//   let newArray = [];
  
//   for (let i = 0; i <= splitedString.length; i++) {
//     if(splitedString[i] == " "){
//       splitedString[i] = separator
      
//     }
//   }
  
//   return splitedString.join();
  
// }

// --------------------------------------------------------------------------

// correct code

// function topSecret(str){
//   let chars = str.split("");
//   for(let i = 0; i < chars.length; i++){
//   if(chars[i].charCodeAt() >= 65 && chars[i].charCodeAt() <= 90 || chars[i].charCodeAt() >= 97 && chars[i].charCodeAt() <= 122  ){
//     chars[i] = String.fromCharCode(chars[i].charCodeAt()-3);
//     }else{
//       continue;
//     }
//   }
//   for(let j = 0; j < chars.length; j++){
//      if(chars[j] == "?"){
//       chars[j] = "Y"
//     }else if(chars[j] == "@"){
//       chars[j] = "Z"
//     }else if(chars[j] == "^"){
//       chars[j] = "x"
//     }else if(chars[j] == "_"){
//       chars[j] = "y"
//     }else if(chars[j] == "`"){
//       chars[j] = "z"
//     }
//   }
//     return chars.join("")
  
//   }
  
//   console.log(topSecret("Khoor Zruog!"));
// --------------------------------------------------------------------------

// function fiveLine(s){
// let str = s.trim();
//   let newstring = "";
 
//   return `${str}\n${str}${str}\n${str}${str}${str}\n${str}${str}${str}${str}\n${str}${str}${str}${str}${str}`;

// }
// console.log(fiveLine("  a"));

// function fiveLine(s){
// let string = s.trim();
//   let newstring = "";
//   for(let i = 0; i <5;i++ ){
//     for(let j = 0; j <=i;j++ ){

//     newstring = newstring+string
//     }
//     newstring = newstring +"\n"
//   }
//   return newstring;
// }

// var str="abababab";
// console.log( str.replace(/a/g, x=>x.toUpperCase()) );

// //output:
// AbAbAbAbvar str="abababab";
// console.log( str.replace(/a/g, x=>x.toUpperCase()) );

// //output:
// AbAbAbAb

// function infiniteLoop(arr, d, n) {
//   let array = [];
//   let char = "";
//   let newChar = "";
//   for (let i = 0; i < n; i++) {
//     if (d == "right") {
//       for (let j = 0; j < arr.length; j++) {
//         for (let k = 0; k <= arr[j].length + 1; k++) {
//           array = array + arr[j].shift();
//         }
//       }
//       array = array.split("");
//       char = array.pop();
//       array.push(char);
//     } else {
//     }
//    //  array = array.join("");
//   }
//   for (let j = 0; j < arr.length; j++) {
//     for (let k = 0; k <= arr[j].length ; k++) {
//       // newChar = 
//       arr[j].unshift(array[j]);
//     }
//   }
// }

// console.log(
//   infiniteLoop(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     "right",
//     1
//   )
// );

// ----------------------------------------------------------------------------------------------

// correct

// function infiniteLoop(arr, d, n) {
//   let popedChar = "";
//   for (let j = 0; j < n; j++) {
//     if (d == "right") {
//       for (let i = 0; i < arr.length; i++) {
//         popedChar = arr[i].pop();
//         if (i < 2) {
//           arr[i + 1].unshift(popedChar);
//         }
//       }
//       arr[0].unshift(popedChar);
//     } else {
//       for (let i = arr.length -1; i >= 0; i--) {
//         popedChar = arr[i].shift();
//         if (i > 0 ) {
//           arr[i - 1].push(popedChar);
//         }
//       }
//       arr[arr.length - 1].push(popedChar);
//     }
//   }
//   return arr;
// }

// console.log(
//   infiniteLoop(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     "right",
//     1
//   )
// );

// console.log(
//   infiniteLoop(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     "left",
//     1
//   )
// );

// ----------------------------------------------------------------------------------------------

