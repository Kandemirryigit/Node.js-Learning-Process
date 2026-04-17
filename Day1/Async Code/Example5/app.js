// ------------------------------
// 1. Fake login (Promise + setTimeout)
// ------------------------------

function loginUser(username,password){
    return new Promise((resolve,reject)=>{
        console.log("Checking credentials...");

        setTimeout(()=>{
            if(username==="yigit" && password==="1234"){
                resolve({
                    id:1,
                    username:"yigit"
                });
            }
            else{
                reject("Invalid username or password");
            }
        },2000);
    });
}




// ------------------------------
// 2. Fake token generator
// ------------------------------

function generateToken(userId){
    return new Promise((resolve)=>{
        console.log("Generating token...");

        setTimeout(()=>{
            const token="token_"+userId+"_"+Date.now();
            resolve(token);
        },1500);
    });
}



// ------------------------------
// 3. Fake profile fetch
// ------------------------------
function getUserProfile(token){
    return new Promise((resolve)=>{
        console.log("Loading user profile...");

        setTimeout(()=>{
            resolve({
                token:token,
                bio:"Computer Engineering student",
                role:"developer"
            });
        },1000);
    });
}



// ------------------------------
// 4. Main async function (REAL FLOW)
// ------------------------------
async function app(){
    try{
        console.log("App started\n");

        // Step 1: login
        const user=await loginUser("yigit","1234");
        console.log("Logged in user:",user,"\n");

        // Step 2: generate token
        const token=await generateToken(user.id);
        console.log("Token:",token,"\n");

        // Step 3: get profile
        const profile=await getUserProfile(token);
        console.log("Profile:",profile,"\n");

        console.log("all steps completed successfully");

    }
    catch(error){
        console.log("Error:",error);
    }
}



// ------------------------------
// 5. Run app
// ------------------------------
app();