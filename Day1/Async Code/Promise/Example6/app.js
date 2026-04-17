function fetchProducts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const products=["Phone","Laptop","Tablet"];
            resolve(products);
        },1500);
    });
}


fetchProducts()
    .then(products=>{
        console.log("Products:",products);
    })
    .catch(err=>console.log(err));