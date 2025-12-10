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