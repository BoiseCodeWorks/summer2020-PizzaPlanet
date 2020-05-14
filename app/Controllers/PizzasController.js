import _pizzasService from "../Services/PizzasService.js";
import _store from "../store.js";

function _draw() {
    let pizzas = _store.State.pizzas
    let template = ''
    pizzas.forEach(p => template += p.Template)
    document.getElementById("pizzas").innerHTML = template
}


//Public
export default class PizzasController {
    constructor() {
        _draw();
    }

    addPizza(e) {
        e.preventDefault();
        let rawPizza = {
            name: e.target.name.value
        }
        _pizzasService.addPizza(rawPizza)
        // e.target.reset()
        _draw();
    }
    deletePizza(id) {
        _pizzasService.deletePizza(id);
        _draw();
    }
    addTopping(e, pizzaId) {
        e.preventDefault();
        let topping = e.target.topping.value
        // Try catch says attempt this action
        try {
            _pizzasService.addTopping(topping, pizzaId)
        }
        // if it throws an error handle it in this way
        catch (error) {
            alert(error.message)
        }
        // e.target.reset()
        _draw();
    }
    deleteTopping(pizzaId, index) {
        _pizzasService.deleteTopping(pizzaId, index)
        _draw();
    }
}
