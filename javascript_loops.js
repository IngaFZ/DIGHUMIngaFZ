console.log("Week 11 Looping");
const outputElement = document.getElementById("output");
const documentType = "letter"
switch (documentType) {
    case "letter":
        console.log("Correspondence");
        break;
    case "newspaper":
        console.log("Periodical");
        break;
    case "book":
        console.log("Publication");
        break;
    default:
        console.log("Unknown document type");
}
console.log("Regular flow resumes");

console.log("While loops");
let year = 1918;          // Starting value
while (year <= 1923) {   // Continue while true
    console.log(year);
    outputElement.innerHTML += year + "<br>";  // Output the value
    year++;              // Change the value
}
// Output: 1918, 1919, 1920, 1921, 1922, 1923
console.log("While loop is over");

console.log("Do while loops");
let count = 3;
do {
    console.log(count);
    outputElement.innerHTML += count + "<br>";  // Output the value
    count++;
} while (count < 5);
// Output: 3, 4
console.log("Do while loop is over");
