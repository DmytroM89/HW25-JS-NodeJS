import {Person} from '../person/index.js';

export class Teacher extends Person {
    constructor(firstName, lastName, age, gender, interests, subject) {
        super(firstName, lastName, age, gender, interests);
        this.subject = subject;
        this.prefix = this.gender === 'male' ? 'Mr.' : 'Mrs.'
    }

    greeting() {
        return `Hello. My name is ${this.prefix} ${this.name.lastName}, and I teach ${this.subject.fullName()}.`;
    }
}