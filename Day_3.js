/**
 * Fair enough. You don’t need a mental gym session when you’ve got real work breathing down your neck. Here’s a lighter one that’ll stretch your brain just enough to keep it awake without frying it.

JS Bug — array logic misfire
const scores = [40, 55, 60, 75, 90];

const boosted = scores.map(score => {
  if (score > 50) {
    return score + 10;
  }
});

console.log(boosted);

Expected output:
[40, 65, 70, 85, 100]
Actual output:
[undefined, 65, 70, 85, 100]

No tricks with async, no closures — just good old-fashioned logic blindness.
Find the bug, fix it, and explain why that undefined popped up.
Quick and clean, then you can run back to your grind.
 */

const scores = [40, 55, 60, 75, 90];

const boosted = scores.map(score => {
  if (score < 50) {
    return score;
  } else {
    return score + 10;
  }
});

console.log(boosted);
