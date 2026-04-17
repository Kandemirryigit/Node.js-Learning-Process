// ------------------------------
// 1. Fake "Database Call" (Promise + setTimeout)
// ------------------------------

function getUserFromDatabase(){
    return new Promise((resolve,reject)=>{
        console.log("Fetching user from databse...");

        setTimeout(()=>{
            const user={
                id:1,
                name:"Kandemir",
                role:"Student"
            };

            resolve(user);
        },2000);

    });

}



// ------------------------------
// 2. Fake "API Call for Posts"
// ------------------------------

function getUserPosts(userId){
    return new Promise((resolve,reject)=>{
        console.log(`Fetching posts for user id: ${userId} `);

        setTimeout(() => {
            const posts=[
                "Post 1: Learning Node.js",
                "Post 2: Async/await is cool",
                "Post 3 : Promises are powerful"
            ];

            resolve(posts);
        },1500);
    });
}


// ------------------------------
// 3. Async/Await Flow (REAL LOGIC)
// ------------------------------

async function main(){
    try{
        console.log("App started\n");

        // Step 1: Get user
        const user=await getUserFromDatabase();
        console.log("User received:",user,"\n");

        // Step 2: Get posts for that user
        const posts=await getUserPosts(user.id);
        console.log("Posts received:",posts,"\n");

        console.log("All data loaded successfully");

    }
    catch(error){
        console.log("Error",error);
    }
}


// ------------------------------
// 4. Run App
// ------------------------------

main();