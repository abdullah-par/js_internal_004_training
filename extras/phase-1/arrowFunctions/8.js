// A8️⃣
// Find (or create) a case where:
// A normal function works
// An arrow function breaks behavior
// 💡 Hint:
// Think about this
// Think about methods
// Think about constructors

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