// A3️⃣
// Create two arrow functions:
// One that returns a value implicitly
// One that returns a value explicitly
// 💡 Observe:
// What breaks when you remove return?
// Why does JS behave differently?

const addImplicit = (a,b) => a + b;
console.log(addImplicit(3,2))
const addExplicit = (a,b) => {
    return a + b
}
console.log(addExplicit(3,2))