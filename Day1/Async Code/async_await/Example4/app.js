function login(password){
    return new Promise((resolve,reject)=>{
        if(password==="1234"){
            resolve("Login success");
        }
        else{
            reject("wrong password");
        }
    });
}


async function run(){
    try{
        const result=await login("1111");
        console.log(result);
    }
    catch(error){
        console.log("Error:",error);
    }
}


run();