export default class Customer {
    constructor(fullName, age, address) {
        this.id = "id" + Math.random().toString(16).slice(2);
        this.fullName = fullName;
        this.age = age;
        this.address = address;
    }

    getInfo() {
        console.log(`${this.fullName} ${this.age} ${this.address}`);
    }

    applyData({ id, fullName, age, address }) {
        this.id = id;
        this.fullName = fullName;
        this.age = age;
        this.address = address;
    }
}