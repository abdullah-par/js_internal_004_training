// A5️⃣
// Create an object using const
// Change one of its properties
// Log before and after
// 💡 Think:
// Why did JS allow this?
// Is this a new object or the same one?
const student = {
    name: "Abdullah",
    age: 22,
    skills: ".Net Developer",
    isPlaced: false
};
console.log(student)
student.isPlaced = true;
const studentAfterUpdate = student;
console.log(studentAfterUpdate)
console.log(student === studentAfterUpdate)
//JS allowed this because const prevents reassignment of the variable itself, but it does not make the object immutable. The properties of the object can still be changed. This is the same object, as both student and studentAfterUpdate reference the same memory location.