// This function adds two numbers
function add(a,b){
    return a+b;
}

// This function subtracts two numbers
function subtract(a,b){
    return a-b;
}

// Export functions so other files can use them
module.exports={
        add,
        subtract
};



// What you learned
// module.exports → sends code out of a file
// require("./file") → imports your own file
// You can split code into reusable modules
// This is how real backend projects are structured


// Why this is important
// In real apps:
  // routes are separate files
  // database logic is separate
  // authentication is separate
// Everything is modular