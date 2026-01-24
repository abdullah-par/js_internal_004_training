// A5️⃣
// Create an object with:
// A property
// A method written as a normal function
// Another method written as an arrow function
// Call both methods.
// 💡 Observe:
// Which one accesses the object correctly?
// Which one doesn’t?
// Why would arrow functions behave differently here?
const human = {
    name: "Alice",
    age: 13,
    sex: 'M',
    details(){
        return `Hello I am ${this.name}(${this.age}${this.sex})`
    },
    getDetails: () => 
    {
        return `Hello I am ${this.name}(${this.age}${this.sex})`
    }
}
console.log(human.details())
console.log(human.getDetails())
