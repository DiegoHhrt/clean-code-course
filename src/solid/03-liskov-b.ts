export abstract class Vehicle {
    abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }
    getNumberOfSeats = (): number => this.numberOfSeats;
}

export class Audi extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }
    getNumberOfSeats = (): number => this.numberOfSeats;
}

export class Toyota extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }
    getNumberOfSeats = (): number => this.numberOfSeats;
}

export class Honda extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }
    getNumberOfSeats = (): number => this.numberOfSeats;
}
export class Ferrari extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }
    getNumberOfSeats = (): number => this.numberOfSeats;
}
