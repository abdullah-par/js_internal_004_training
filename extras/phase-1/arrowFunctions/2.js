// A2️⃣
// Rewrite a function that:
// Has multiple statements
// Uses a variable inside before returning
// 💡 Ask:
// Why can’t you remove {} here?
// What happens to return?
const uppercase = (x) =>{
    let lowercase = x.toLowerCase();
    let sentence  = `Initally I was this ${x} and now I am this ${lowercase}`
    return sentence
}
console.log(uppercase("TALARA"))