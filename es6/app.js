let name = "Ishan";
let greeting = "Good Evening!!"
const surname = "David Jr.";
const calculateAge =  (year) => new Date().getFullYear()  - year;
console.log(`${greeting} ! Name:${name} age: ${calculateAge(1979)}`);