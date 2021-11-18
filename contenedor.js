let fs = require('fs')
let path = require('path')



class Contenedor{
    constructor(url) {
        this.url = url
    }
    async getProductos(){  
        try{
            let data = await fs.promises.readFile(this.url,'utf-8');
            return JSON.parse(data);
        }catch(error){
            return [];
        }
    
    }
    async getById(id){
        try {
            let respuesta = 'Error server'
            let productos = await this.getProductos();
            if(productos.length > 0){
                productos.forEach(element => {
                    element.id == id ? respuesta = element : null;
                });
            }
            return respuesta;
        } catch (error) {
            throw new Error(error);
        }
            
    }
        
}

module.exports = Contenedor