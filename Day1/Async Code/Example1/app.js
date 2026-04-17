console.log("Start");

setTimeout(()=>{
    console.log("Async task done");
},2000);

console.log("End");


// Output:
// Start
// End
// (2 sec later)  Async task done
