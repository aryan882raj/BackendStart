// const products = [];

const path = require('path')

module.exports = class Product {
    constructor(t){
        this.title = t;
    }
    //save it to a file
    save(){
        // products.push(this)
        const p = path.join(path.dirname(require.main.filename),'data','products.json');
        fs.readFile(p, (err , filecontent)=>{
            let products =[];
            if (!err){
                
                products = JSON.parse(filecontent)
                console.log(products);
            }
            products.push(this)
            fs.writeFile(p, JSON.stringify(products) , (err)=>{console.log(err);})
            
        })
    }
    
    static fetchAll(CB){
        fs.readFile(p, (err, fileContent)=>{
            if(err){
                CB([])
            }
            CB(JSON.parse(fileContent))
        })
    }
}