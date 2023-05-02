const express = require("express");
const {products} = require("./data");

const app = express();

// app.get("/",(req,res)=>{
//     res.json(products);
// })

app.get("/", (req,res)=>{
    res.send("<h1>OSR Home Page ONN</h1><a href='/api/products'>OSR Get Products ONN</a>")
})

app.get("/api/products", (req,res)=>{
    console.log(`LIIA ${JSON.stringify(req.query)}`)
    const {search,limit} = req.query;
    var newProducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    });
    if(search){
        newProducts = newProducts.filter((product)=>{
            return product.name.startsWith(search);
        })
    }
    if(limit){
        newProducts = newProducts.splice(0, Number(limit));
    }

    if(newProducts.length){
        res.json(newProducts);
    }else{
        res.send("No Products for your search")
    }
    
})

app.get("/api/product/:id", (req,res,next)=>{
    const {id} = req.params;
    const theProduct = products.find((product)=>{
        return product.id === Number(id);
    })
    if(theProduct){
        res.json(theProduct);
    }else{
        next()
    }
})



app.all("*", (req, res)=>{
    res.status(404).send("<h1>ONS Page Not Found ONN</h1>")
})

app.listen(5000, ()=>{
    console.log("OSR listing on port 5000 ONS");
})