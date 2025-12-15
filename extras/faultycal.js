
function faultyOperation(choice){
    let operator = choice;
    switch(choice){
        case '+':
            operator = '-'
            break
        case '-':
            operator = '/'
            break
        case '*':
            operator = '+'
            break
        case '/':
            operator = '**'
            break

    }
    return operator;
}
const condtition = Math.random()<0.1
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let a, b;
rl.question('Enter first number: ',(value)=>{
    a = Number(value);
    rl.close();
})
rl.question('Enter first number: ',(value)=>{
    b = Number(value); 
    rl.close();
})
let choice;
rl.question('Enter operation (+, -, *, /, **): ',(value)=>{
    choice = value;
    rl.close();
})
if(condtition){
    choice = faultyOperation(choice);
    console.log(a + choice +b)
}else{
    let operator = choice;
    switch(choice){
        case '+':
            operator = '+'
            break
        case '-':
            operator = '-'
            break
        case '*':
            operator = '*'
            break
        case '/':
            operator = '/'
            break
    }
    console.log(a + operator +b) 
}