import { generateId } from "../Utils.js"

export default class Pizza {
    constructor(data) {
        this.id = data.id || generateId();
        this.name = data.name
        /**
         * @type {String[]}
         */
        this.toppings = data.toppings || []
    }

    get Template() {
        return /*html*/`
        <div class="col-3">
        <div class="card shadow">
            <div class="card-body d-flex flex-column">
                <i class="fas fa-times text-danger align-self-end action"
                    onclick="app.pizzasController.deletePizza('${this.id}')"></i>
                <h4 class="card-title">Name: ${this.name}</h4>
                <ul class="pl-3">
                    ${this.ToppingsTemplate}
                </ul>
                <form onsubmit="app.pizzasController.addTopping(event, '${this.id}')">
                    <div class="form-group d-flex">
                        <input type="text" class="form-control" name="topping" id="topping"
                            aria-describedby="helpId" placeholder="Topping..." required>
                        <button type="submit" class="btn btn-outline-success ml-1"><i
                                class="fas fa-plus "></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
        `
    }
    get ToppingsTemplate() {
        let template = ""
        this.toppings.forEach((topping, index) => {
            template += /*html*/`
            <li>${topping}
                <i class="fas fa-times text-danger action"
                    onclick="app.pizzasController.deleteTopping('${this.id}', ${index})"></i>
            </li>
            `
        })
        return template;
    }
}