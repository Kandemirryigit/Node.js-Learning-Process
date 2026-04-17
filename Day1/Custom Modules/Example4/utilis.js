function formatName(name){
    return name.trim().toUpperCase();
}

function isEven(number){
    return number%2===0;
}


module.exports={
    formatName,
    isEven
};