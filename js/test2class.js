class drana {
    constructor(brand, speed) {
        this.brand
        this.speed
    }
    accelerate() {
        this.speed += 10;
        return `${this.brand} is now going ${this.speed} km/h.`;
    }
}

const myCar = new Car("Tesla", 100);
console.log(myCar.accelerate());