// A7️⃣
// Create a function that:
// Returns another function
// Uses an arrow function internally
// Remembers a value from the outer function
// 💡 You’re combining:
// Closures
// Arrow syntax
// Lexical scope
function add(a,b){
    sum = a + b
    return result = () =>{
        return `The sum of ${a} and ${b} is ${sum}`
    }
}
console.log(add(3,2)())
const getResult = add(3,2)
console.log(getResult())