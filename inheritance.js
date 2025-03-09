class Vehical{
    constructor(vName,price){
        this.vName = vName;
        this.price = price;
    }
    move(){
        return `I can roam around!`
    }
}

class Bus extends Vehical{
    constructor(vName,price,seat){
        super(vName,price)
        this.seat = seat;
    }
    route(){
        return `Dhaka to Cox's`
    }
}

const greenLine = new Bus('Green Line',12000,100)

console.log(greenLine)

class Truck extends Vehical{
    constructor(vName,price,load){
        super(vName,price)
        this.load = load
    }
}

console.log(greenLine.route())