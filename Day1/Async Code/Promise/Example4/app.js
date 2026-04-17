function step1(){
    return new Promise(resolve=>{
        setTimeout(()=> resolve("Step 1 done"),1000);
    });
}


function step2(data){
    return new Promise(resolve=>{
        setTimeout(()=> resolve(data+"->Step 2 done",1000));
    })
}

step1()
    .then(result=>step2(result))
    .then(final=>console.log(final));