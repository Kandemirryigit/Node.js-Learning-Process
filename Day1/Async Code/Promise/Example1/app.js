// Creating a new Promise object
const promise=new Promise((resolve,reject)=>{
    let isSuccess=true;

    if(isSuccess){
        resolve("Success");
    }
    else{
        reject("Error!");
    }

});

promise
    // This runs when resolve() is called
    .then(result=>console.log(result))
    // This runs when reject() is called
    .catch(error=>console.log(error));