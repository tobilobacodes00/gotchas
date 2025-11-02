/** Bug: Filter and sum logic gone wrong
You’re given an array of transactions. You’re supposed to sum only the positive ones, but the code below acts like it’s had too much palm wine.
function sumPositive(transactions) {
  let sum = 0;

  transactions.forEach(t => {
    if (t > 0)
      sum = t; // bug hiding in plain sight
  });

  return sum;
}

console.log(sumPositive([10, -5, 20, -2, 7])); // should be 37


Expected output
37
But this code gives you something embarrassingly wrong.
Fix the logic bug so it works for all cases.
When it finally prints 37, you can go back to pretending JavaScript doesn’t secretly hate you. */


function sumPositive(transactions) {
  let sum = 0;

  transactions.forEach(t => {
    if (t > 0){
      sum = sum + t
    }
  });

  return sum;
}

console.log(sumPositive([10, -5, 20, -2, 7])); // should be 37
