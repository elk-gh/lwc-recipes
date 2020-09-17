import { LightningElement } from 'lwc';

export default class HelloBinding extends LightningElement {
    greeting = 'World';
    greeting2 = 'World';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}
