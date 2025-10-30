/**Bug 1 of the day:
const arr = [1, 2, 3];
const doubled = arr.map(num => {
  return num * 2;
});
console.log(doubled); // [2, 4, 6]

const filtered = arr.filter(num => {
  num > 1;
});
console.log(filtered); // what do you think this logs?

Task:


Predict what gets logged.


Explain why it happens.


Fix it so it actually filters numbers greater than 1.


You’ve got one line broken here. Find it and make it behave. */


const arr = [1, 2, 3];
const doubled = arr.map(num => {
  return num * 2;
});
console.log(doubled); // [2, 4, 6]

const filtered = arr.filter( num => num > 1 );
console.log(filtered);

// I Think this logs [2,3]

// That is because when .map was called, it didnt affect the original array so when i called the original array it just filtered it based on the original array 


