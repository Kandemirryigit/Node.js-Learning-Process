function step1(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("Step 1 done"),1000);
    });
}

function step2(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("Step 2 done"),1000);
    });
}

async function run(){
    const r1=await step1();
    console.log(r1);

    const r2=await step2();
    console.log(r2);
}

run();