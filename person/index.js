export class Person {
    constructor(firstName, lastName, age, gender, interests) {
        this.name = {
            firstName: firstName,
            lastName: lastName,
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        this.bio = `${this.fullName()} is ${this.age} years old. Interests: ${this.interests}.`;
    }

    greeting() {
        return `Hi! I'm ${this.fullName()}.`;
    }

    fullName() {
        return `${this.name.firstName} ${this.name.lastName}`;
    }
}