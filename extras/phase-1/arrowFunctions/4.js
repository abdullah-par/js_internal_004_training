// A4️⃣
// Rewrite a function that returns an object.
// 💡 This one is tricky on purpose.
// Ask yourself:
// Why does JS confuse {} here?
// How does JS know whether it’s a block or an object?
const human = {
    haveName: true,
    age: 20,
    isAlive: true,
    sex: 'M'
}
const returntheObject = (x) => {
    return x
}
console.log(returntheObject(human))
const Human = () => ({name: "Alice",father: "BOB"})
console.log(Human())