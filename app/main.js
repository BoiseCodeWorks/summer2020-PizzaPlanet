import PizzasController from "./Controllers/PizzasController.js";

class App {
  pizzasController = new PizzasController();
}

window["app"] = new App();
