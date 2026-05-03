function checkInventory(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        console.log("Checking inventory...");
        resolve();
    },4000);
    })        
}

function createOrder(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Creating order...");
            resolve();
        },1000);
    });
}

function processPayment(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Processing payment");
            resolve();
        }, 3000);
    });
}

function placeOrder(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Placing order...");
            resolve();
        }, 4000);
    });
}

function main(){
    checkInventory()
    .then(createOrder)
    .then(processPayment)
    .then(placeOrder)
}
main();