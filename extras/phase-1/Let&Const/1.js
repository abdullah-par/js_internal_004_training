// A1️⃣

// Create a variable inside a block {}

// Try accessing it outside the block

// Do this once with var, once with let

// 💡 Ask yourself:

// Which one “escapes” the block?

// Why would this be dangerous in big code?
{
    let variable = "I am inside the block";
}
console.log(variable);
// with var the scope of the variable was global and it escaped the block
//but with let the scope of the variable is limited to the block and it did not escape the block