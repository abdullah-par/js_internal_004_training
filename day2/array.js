const marks = [85, 90, 78, 92, 88];
// use map when you want a new array with modified values
const percentages = marks.map(m => (m/100)* 100 + "%");
console.log(marks)
console.log(percentages)

const users = [
    {name: "Alice", age:18},
    {name: "Bob", age:18},
    {name: "Charlie", age:20}
];
// Use filter when you want to keep only matching items
const above18 = users.filter(u => u.age===18).map(u => u.name);
//Use find when you need the first match only
const find20 = users.find(u => u.age === 20);

console.log(above18)

console.log(find20)

users.forEach( u => {
    console.log(u.age)
});
