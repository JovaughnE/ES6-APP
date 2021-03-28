import { header } from './modules/header';
import { body } from './modules/body';

class App() {

    constructor() {
        this.renderTemplate();
    }

    renderTemplate() {
        const template = `
            <h1>${header.title}</h1>
            <p>${body.bodyContent}</p>
            `;

        document.body.innerHTML = template;
    }
}

new App;