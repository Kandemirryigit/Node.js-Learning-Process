function fetchData(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("Data loaded",1000));
    });
}


async function run(){
    const data=await fetchData();
    console.log(data);
}

run();