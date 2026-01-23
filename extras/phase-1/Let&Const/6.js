// A6️⃣
// Try to make the variable point to a completely new object
// Observe what JS says
// 💡 Ask:
// What exactly is JS protecting here?
const student = {
    name: "Abdullah",
    age: 22,
    skills: ".Net Developer",
    isPlaced: false
};
student = {
    name: "Ali",
    age: 23,
    skills: "Java Developer",
    isPlaced: true
};
console.log(student)
// The answer is: const protects the Reference (the link), not the Value (the object).
// Think of the variable myObj as a piece of paper with a memory address written on it (e.g., "House #101").
// Allowed: You can go to House #101 and paint the walls or change the furniture (change properties: myObj.name = "Bob").
// Protected (Forbidden): You cannot erase "House #101" from the paper and write "House #505" (reassignment: myObj = { ... }).