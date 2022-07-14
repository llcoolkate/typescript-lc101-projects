
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

export class Rocket {
    name: string;
    totalCapacityKG: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKG = totalCapacityKg;
    }

sumMass(items: Payload[]): number {
    let sum: number = 0;

    for (let i=0; i<items.length; i++) {
        sum += items[i].massKg
    }
    return sum;
}

currentMassKg(): number {
    let astronautWeight = this.sumMass(this.astronauts);
    let cargoWeight = this.sumMass(this.cargoItems);
    return astronautWeight + cargoWeight;
}

canAdd(item: Payload): boolean {
    if (this.currentMassKg() + item.massKg <= this.totalCapacityKG) {
        return true;
    } else {
        return false;
    }
}

addCargo(cargo: Cargo): boolean {
    if(this.canAdd(cargo)) {
        this.cargoItems.push(cargo);
        return true;
    } else {
        return false;
    }
}
addAstronaut(astronaut: Astronaut): boolean {
    if(this.canAdd(astronaut)) {
        this.astronauts.push(astronaut);
        return true;
    } else {
        return false;
    }
}
}