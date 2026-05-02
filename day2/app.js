
import { doubleANUm,sum } from './utils.js';

const num1 = 5;
const num2 = 10; 

console.log(sum(num1, num2));

console.log(doubleANUm(num1));

// short circuit — only runs right side if left is truthy
const name = user && user.name;

// optional chaining — safe access without crashing
const city = user?.address?.city; // undefined instead of error

// nullish coalescing — fallback if null or undefined
const display = user?.name ?? "Anonymous";