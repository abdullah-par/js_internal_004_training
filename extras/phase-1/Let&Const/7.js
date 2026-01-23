// A7️⃣
// Without running the code:
// Write down what you think will happen
// Then run it
// Compare expectation vs reality
// Do this for:
// var inside a loop
// let inside a loop
// const object mutation
// const reassignment attempt
// 💡 This trains developer intuition.
var count = 0
for (var i = 0;i<3;i++){
    count = count + 1;
}
console.log("var loop: " + count);
{
    let count = 0;
    for (let i = 0;i<3;i++){
        count = count + 1;
    }
    console.log("let inside a loop: " + count);
}
const human = {
    hasName: true,
    age: 30,
    sex: 'M'
}
console.log(human)
human.sex = 'F';
console.log(human) 
// const age = 32
// age = 33
// console.log(age)