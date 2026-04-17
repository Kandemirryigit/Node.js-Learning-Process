const userService=require("./userService");

console.log(userService.getAllUsers());

console.log(userService.addUser("Alex"));

console.log(userService.getUserById(2));
