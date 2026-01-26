let bag1  = ['pen', 'pencil', 'eraser']
let bag2 = ['keyobard', 'mouse', 'monitor']
let totalCart = [...bag1, ...bag2 , 'chair', 'table']
console.log(totalCart)

const human = {
    isAlive: true,
    age: 'M',
}
const person = {
    hasName: true,
    citizen: true,
    employed: true
}

const civilian = {...human, ...person, company: "HCL" , role: ".Net developer"}
console.log(civilian) 