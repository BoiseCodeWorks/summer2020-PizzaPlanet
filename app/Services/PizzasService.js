import Pizza from "../Models/Pizza.js";
import _store from "../store.js";

//Public
class PizzasService {
    addTopping(topping, pizzaId) {
        // no more than 5 toppings
        let pizza = _store.State.pizzas.find(p => p.id == pizzaId)
        if (pizza.toppings.length > 4) {
            // throw stops the function and creates an error to send to whomever called the function
            throw new Error("too many toppings")
        }
        if (topping == "kale") {
            this.deletePizza(pizzaId)
            throw new Error("You monster")
        }
        pizza.toppings.push(topping)
        _store.saveState();
    }
    addPizza(rawPizza) {
        let pizza = new Pizza(rawPizza)
        _store.State.pizzas.push(pizza)
        _store.saveState();
    }
    deleteTopping(pizzaId, index) {
        let pizza = _store.State.pizzas.find(p => p.id == pizzaId)
        pizza.toppings.splice(index, 1)
        _store.saveState();
    }
    deletePizza(id) {
        _store.State.pizzas = _store.State.pizzas.filter(p => p.id != id)
        _store.saveState();
    }
}

const PIZZAS_SERVICE = new PizzasService();
export default PIZZAS_SERVICE;
