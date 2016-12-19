console.info('---------------------');
console.info('Intro to functional programming');
console.info('Part 3');
console.info('Higher Order Functions');
console.info('---------------------');

/*
  Higher order functions - are functions either take other functions as parameters or return functions.
*/

// Let's take example from previous lesson:

const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// const sum = (...xs) => xs.reduce(plus, 0);
// const difference = (...xs) => xs.reduce(minus, 0);
// const product = (...xs) => xs.reduce(multiply, 0);
// const quotent = (...xs) => xs.reduce(divide, 0);

// We can generalize `sum`, `difference`, `product` and `quotent`.

const createOperator = (operator) => (xs) => xs.reduce(operator, 0);

const sum = (...xs) => createOperator(plus);
const difference = (...xs) => createOperator(minus);
const product = (...xs) => createOperator(multiply);
const quotent = (...xs) => createOperator(divide);

/*
  Create operator is a higher order function and it's cuffied function.
*/ 
