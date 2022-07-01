import {Person} from '../person/index.js';

export class Student extends Person {
    constructor(firstName, lastName, age, gender, interests) {
        super(firstName, lastName, age, gender, interests);
    }

    greeting() {
        return `Yo! I'm ${this.name.firstName}.`;
    }
}