
class drana {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }
    accelerate() {
        this.speed += 10;
        return `${this.brand} is now going ${this.speed} km/h.`;
    }
}

const myCar = new drana("Tesla", 100);
console.log(myCar.accelerate());