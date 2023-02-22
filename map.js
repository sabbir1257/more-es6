const numbers = [2, 8, 6, 3, 4];

// function getDouble(numbers) {
//   const output = [];
//   for (const number of numbers) {
//     const doubled = doubledIt(number);
//     output.push(doubled);
//   }
//   return output;
// }

// function doubledItOld(number) {
//   return number * 2;
// }

const doubledIt = number => number * 2;
const makeDouble = numbers.map(doubledIt);
const makeDoubleDirect = numbers.map(number => number * 2);
const makeDouble2 = numbers.map(x => x * 3);
// console.log(makeDoubleDirect);
const fiveTimes = [1,2,3,4,5].map(x => x * 5);

console.log(makeDouble);

/* 
purpose
1. get an array 
2. for every elements of the array do something
3. store the result in an array 
4. return the result array
*/

const result = getDouble(numbers);
// console.log(result);
// console.log(makeDouble);
