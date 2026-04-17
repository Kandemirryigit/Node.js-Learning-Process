async function hello(){
    return "Hello Kandemir";
}

hello().then(result=>console.log(result));


// Even though it looks normal, it returns a Promise.