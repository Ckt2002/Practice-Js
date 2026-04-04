export default class Customers {
    constructor() {
        this.customerArr = [];
    }

    addCustomer(newCustomer) {
        for (let customer of this.customerArr) {
            if (customer.fullName === newCustomer.fullName) {
                return;
            }
        }
        this.customerArr.push(newCustomer);
    }
}