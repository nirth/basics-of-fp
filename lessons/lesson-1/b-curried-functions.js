console.info('---------------------');
console.info('Intro to functional programming');
console.info('Part 3');
console.info('Higher Order Functions');
console.info('---------------------');

// Function `plus1` is not curried.
const plus1 = (a, b) => a + b;

// Function `plus2` is curried.
const plus2 = (a) => (b) => a + b;

const addOne = plus2(1);
const addPi = plus(Math.PI);


