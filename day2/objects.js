const student = {
    name: "John Doe",
    age: 20,
    isEnrolled: true,
    address: {
        city: "Varanasi",
        pincode: 221001
    }
};

const key = "age";
console.log(student[key])
console.log(student["name"])

const {name: studentName, age: studentAge, address: studentAddress} = student;
console.log(studentAddress)

// Practice:

// Create an array of 5 student objects with name and grade
// Use filter() to get only students with grade above 60
// Use map() to get just their names
// Use destructuring when accessing the properties

const students = [
    {name: "Alice", grade: 85},
    {name: "Bob", grade: 55},
    {name: "Charlie", grade: 70},
    {name: "David", grade: 45},
    {name: "Eve", grade: 90}    
]

const above60 = students.filter(({name, grade}) => grade > 60).map(({name}) => name);
console.log(above60)

const {name, ...rest} = students[0];
console.log(name)
console.log(rest)