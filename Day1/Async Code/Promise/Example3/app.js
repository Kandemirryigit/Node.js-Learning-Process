
function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({id:1,name:"Yigit"});
        },1000);
    });
}


getUser()
    .then(user=>console.log(user))
    .catch(err=>console.log(err));