// A3️⃣
// Pretend you’re writing code for a website:
// Loop through numbers 1–3
// Inside the loop, schedule something to run later (hint: delayed execution)
// Print the loop number
// 💡 Observe:
// Do you get what you expected?
// Why might all outputs look the same?
// What does timing have to do with scope?
// 👉 Don’t fix it immediately.
// First explain the bug in words.
for(let i = 1; i <= 3; i++){
    console.log("Loop number: " + i)
    setTimeout(function(){
        console.log("Delayed output: " + i)
    }, 1000);
}