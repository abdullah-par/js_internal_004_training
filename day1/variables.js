var age = 18;
let marks = 90;
const pi = 3.14;
// == vs === — what’s the real difference?
// ❌ == (loose equality)
// Converts types automatically (type coercion)
// Can give unexpected results
// console.log(5 == "5");   // true 😬
// console.log(false == 0); // true 😬

// 👉 This looks convenient… until it silently breaks logic.

// ✅ === (strict equality)
// Checks value AND type
// No hidden conversions
// console.log(5 === "5"); // false ✅
// console.log(5 === 5);   // true

// 👉 This is predictable — and predictability is everything in real apps.
