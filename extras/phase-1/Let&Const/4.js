// A4️⃣
// Now fix only by changing the variable keyword
// Do not change logic
// Do not add extra variables
// 💡 Question:
// Why did this tiny change fix everything?
for(var i = 1;i<=3;i++){
    console.log("Loop number: " + i)
    setTimeout(function(){
        console.log("Delayed output: "+i)
    },1000);
}