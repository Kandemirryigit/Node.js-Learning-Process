const auth=require("./auth");

const result=auth.login("admin","1234");
console.log(result);

console.log(auth.verifyToken("abc123"));  // True