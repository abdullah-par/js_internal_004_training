function checkInventory(callback){
    setTimeout(()=>{
        console.log("Checking inventory...");
        callback();
    },4000);    
}

function createOrder(callback){
    setTimeout(() => {
    console.log("Creating order...");
    callback();
    },1000);
}

function processPayment(callback){
    setTimeout(() => {
        console.log("Processing payment");        
        callback();
    }, 3000)
    
}

function placeOrder(callback){
    setTimeout(() =>{
    console.log("Placing order...");
    callback();
    },4000);
}

function main(){
    checkInventory(() => {
        createOrder(() => {
            processPayment(() => {
                placeOrder(() => {
                    console.log("Order completed.");
                });
            });
        });
    });
    // createOrder();
    // processPayment();
    // placeOrder();
}
main();