function fetchUser(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({id:1,name:"Kandemir"});
        },1500);
    });
}


async function getUser(){
    console.log("Loading user...");
    const user=await fetchUser();
    console.log("User:",user);
}

getUser();