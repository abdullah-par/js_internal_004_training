let applicant = {
    "name": "Abdullah Parvez",
    "Job Code": "HCL123456"
}
applicant.stipend = 15000
console.log(applicant)
// ternary in javascript
// variable = condtition?true:false
for(const properties in applicant){
    console.log(properties + " : " + applicant[properties])
}
//Functions in js
function greet(name){
    console.log(`Hello, ${name}`)
}
greet("Abdullah")
//arrow functions
const greet1 = (name) =>{
    console.log(`Hello, ${name}`)
}
greet1("Parvez")