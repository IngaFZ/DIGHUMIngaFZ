console.log("Week 12");


// use verbs for naming functions
function greet() {
    console.log("Hello, welcome to Week 12!");
    console.log("This is a simple greeting function.");
}

greet();
greet();
greet();

// for (let i = 0; i < 5; i++) {
   // greet();
//}

function greetTimes(times) {
    console.log(`Greeting ${times} times:`);
    for (let i = 0; i < times; i++) {
        greet();
    }
}

greetTimes(3);

