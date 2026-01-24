// A1️⃣
// Rewrite each function using arrow syntax:
// A function with one parameter
// A function with two parameters
// A function with no parameters
// 💡 Focus on:
// Parentheses rules
// When {} are required
// When return disappears
const func = (x) => {
    return`Hello, I am ${x}.`
}
console.log(func("Alice"))

const fullName = (x,y) =>{
    return `Hello, my full name is ${x} ${y}.`
}
console.log(fullName("Alice","Jade"))

const noName = () => {
    return `There is no name of people.`
}
console.log(noName())