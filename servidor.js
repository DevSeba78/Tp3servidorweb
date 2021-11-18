let fs = require('fs');
let express=require('express');
let Contenedor = require('./contenedor')
let contenedor = new Contenedor('./productos.txt');
//let url = './productos.txt'

let app=express();
const PORT_URL = 8080;
app.get('/',(req,res)=>{
    res.send("<center><h2>Bienvenidos a mi primer servidor con EXPRESS </h2></center>");
})

app.get('/productos',(req,res)=>{
    contenedor.getProductos().then((productos)=>{
        res.send(productos);
        console.log(productos)
    }).catch((error)=>{
        res.send(error);
    })
    
    
    
})

app.get('/productoRandom',(req,res)=>{
    contenedor.getById(Math.floor(Math.random() * 3) + 1).then(productos => {
        res.send(productos);
    }).catch(error => {
        res.send(error);
    });
    // res.send("<center><h2>Bienvenidos a mi primer servidor con EXPRESS </h2></center>");
})

app.listen(PORT_URL,()=>{console.log(`escuchando desde el puerto http://localhost:${PORT_URL}`)});
module.exports=app;
