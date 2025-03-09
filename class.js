class Product {
    constructor(pName,price,brand,malik) {
        this.pName = pName
        this.price = price
        this.brand = brand
        this.malik = malik
        console.log(pName,price,brand)
    }
    // malik = "Alpha"
    details(){
        console.log(`I'm Details from ${this.brand}`)
    }
    
}

const iPhone = new Product('iPhone','1234','Apple',"Steve");
console.log(iPhone)
iPhone.details()