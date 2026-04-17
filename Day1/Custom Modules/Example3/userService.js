let users=[
    {id:1,name:"Yigit"},
    {id:2,name:"john"}
];

function getAllUsers(){
    return users;
}

function getUserById(id){
    return users.find(u=>u.id===id);
}

function addUser(name){
    const newuser={
        id:users.length+1,
        name
    };

    users.push(newuser);
    return newuser;
}


module.exports={
    getAllUsers,
    getUserById,
    addUser
};