console.log("Start");

// Heavy task (blocks everything)
for(let i=0;i<100;i++){}

console.log("End");


// Output:
// Start
// (wait...)
// End