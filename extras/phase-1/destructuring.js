const human = {
    name: "Alice",
    age:        13,
    sex:       'M',
}
// i have to perform destructuring here
const {name, age, sex} = human
console.log(name)
console.log(age)
let heros = ['thor', 'spiderman', 'ironman', 'hulk']
const [hero1,hero2, ...restHeros] = heros
console.log(hero1)
console.log(restHeros)