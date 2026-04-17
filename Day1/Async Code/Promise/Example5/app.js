function login(password){
    return new Promise((resolve,reject)=>{
        if(password==="1234"){
            resolve("Login successful");
        }
        else{
            reject("Wrong password");
        }
    });
}

login("1111")
    .then(msg=>console.log(msg))
    .catch(err=>console.log(err));