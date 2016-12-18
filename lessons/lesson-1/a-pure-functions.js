console.info('---------------------');
console.info('Intro to functional programming');
console.info('Part 1');
console.info('Pure Functions');
console.info('---------------------');

// Pure functions are functions without side effects.
// This axiom means that:
// * Pure function will alway have same output for a given input.
// * Pure function will not change anything outside of it's content.

// Let's define basic math functions like addition, substraction, multiplication and devision:

const plus = (a, b) => a + b;

const minus = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

// Pure functions are easily reused and composed.

// Sum function will take 
const sum = (...xs) => xs.reduce(plus, 0);

const difference = (...xs) => xs.reduce(minus, 0);

const product = (...xs) => xs.reduce(multiply, 0);

const quotent = (...xs) => xs.reduce(divide, 0);

// Pure functions will always have same output for a given input.

assert(sum(1, 2) === sum(1, 2));
assert(product(Math.PI, Math.E) === product(Math.PI, Math.E));




