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

console.log("For loops");
for (let year = 1918; year <= 1923; year++) {
    console.log(year);
    outputElement.innerHTML += year + "<br>";  // Output the value
}

console.log("Skip & stop early");
for (let year = 1918; year <= 1935; year++) {
    if (year === 1920) {
        console.log("Skipping 1920");
        continue; // Do not print 1920
    }
    if (year === 1933) {
        break;    // Stop before printing 1933
    }

    if (year % 10 === 0) {
        console.log("breaking on year divisible by 10");
       break; // Stop beforenprinting year divisible by 10
    }
    console.log("stop");
}
// Output: 1918, 1919, 1921, 1922
outputElement.innerHTML += "1918, 1919, 1921, 1922";

// let's print the numbers 10 to 20 in alternating colors
console.log("Alternating colors");

for (let i = 10; i <= 20; i++) {    
if (i % 2 === 0) {
    outputElement.innerHTML += `<span style="color: red;">${i}</span><br>`;
} else {
    outputElement.innerHTML += `<span style="color: blue;">${i}</span><br>`;
}
}

let total = 0;
// iterate from 1 to 10 and add multiple of 100 to total

for (let i = 1; i <= 10; i++) {
    total += i *100;
    
    if (i % 2) {
        outputElement.innerHTML += `<div class="red-box"> Adding ${i * 100} to total, new total: ${total} <br></div>`; // Output the addition
    
    } else {
        outputElement.innerHTML += `<div class="blue-box"> Adding ${i * 100} to total, new total: ${total} <br></div>`; // Output the addition
    }
}
outputElement.innerHTML += `Final Total: ${total}<br>`; // Output the total
console.log("Final Total is " + total); // Output the total to console