let a = 10, b = 25, c = 15;
let max;

if (a >= b && a >= c) {
  max = a;
} else if (b >= c) {
  max = b;
} else {
  max = c;
}

console.log(max)