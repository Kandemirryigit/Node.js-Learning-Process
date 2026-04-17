// auth.js - handles authentication logic

function login(username,password){
    if(username==="admin" && password==="1234"){
        return {success:true ,token:"abc123"};
    }
    else{
        return {success:false,message:"Invalid credentials"};
    }
}

function verifyToken(token){
    return token==="abc123";
}

module.exports={
    login,
    verifyToken
};