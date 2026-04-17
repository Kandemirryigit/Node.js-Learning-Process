function wait(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Done after 2 seconds");
        },2000);
    });
}

async function run(){
    const result=await wait();
    console.log(result);
}

run();