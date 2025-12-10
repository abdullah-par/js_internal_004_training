function double(n){
    return n * 2
}
ch = double(2)
console.log(ch)
let arr = [1,2,3,4,5,"Hello",ch]
// console.log(arr) 
//Array Practice
let fruits = ["Apple","Banana","Mango","Guava","Watermelon"]
fruits.push("Papaya")
fruits.pop()
fruits.unshift("Kiwi")
fruits.includes("Mango")
fruits.indexOf("Banana")
for(let i = 0;i<fruits.length;i++){
    console.log(fruits[i])
}
for(let item of fruits){
    console.log(item);
}
//reduce syntax
/*
 array.reduce((accumulator, currentValue)=>{
    },initialValue)
    accumulator -> stores the result as the loop continues
    currentValue -> current element of array being processed
    initialValue -> starting value for accumulator
*/
//practice time
let numbers = [2,4,6,8]
let doubled = numbers.map(n => n*2)
console.log(doubled)
let number = [10,25,30,5,60]
let greaterValues = number.filter(n=>n>20)
console.log(greaterValues)
let num = [1,2,3,4,5]
acc= 0
let sum = num.reduce((acc,n)=>acc+n,0)
console.log(sum)