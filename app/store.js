import Pizza from "./Models/Pizza.js";

let _state = {
  /** @type {Pizza[]} */
  pizzas: []
};

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("pizza-planet"));
  if (data) {
    // NOTE when data comes out of local storage all the data is POJOS
    // this step converts the objects back to "Pizza" type objects
    data.pizzas = data.pizzas.map(pojoPizza => new Pizza(pojoPizza))
    _state = data;
  }
}
_loadState();

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  // NOTE any change to the state should be followed by saveState
  saveState() {
    localStorage.setItem("pizza-planet", JSON.stringify(_state))
  }
}

const STORE = new Store();
export default STORE;
