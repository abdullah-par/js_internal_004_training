let choice = 3;
let a = 10, b = 5;
let result;

switch (choice) {
  case 1:
    result = a + b;
    break;
  case 2:
    result = a - b;
    break;
  case 3:
    result = a * b;
    break;
  case 4:
    result = b !== 0 ? a / b : "Division by zero";
    break;
  default:
    result = "Invalid Choice";
}

console.log(result);
