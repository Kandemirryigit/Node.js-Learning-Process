const delayPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("2 seconds passed!");
    },2000);
});

delayPromise.then(data=>console.log(data));