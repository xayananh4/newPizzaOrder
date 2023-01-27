//BUSINESS LOGIC
function Pizza(pizzaName, pizzaToppings, pizzaSize) {
  this.name = pizzaName;
  this.toppings = pizzaToppings;
  this.size = pizzaSize;
}

function Address(addressOwnerName, addressStreet, addressCity, addressZipCode) {
  this.name = addressOwnerName;
  this.street = addressStreet;
  this.city =  addressCity;
  this.zipCode =  addressZipCode;
}

Pizza.prototype.calculateCost = function (selectedPizzaName) {
  let totalPrice = 0;

  if (selectedPizzaName === "Memphis-BBQ-Chicken") {
    totalPrice = 19.99;
  }

  else if (selectedPizzaName === "Fiery-Hawaiian") {
    totalPrice = 16.99;
  }
  else {
    totalPrice = 15.99;
  }
  return totalPrice;
};

// UI Logic
function getPizza() {
  let selectedPizzaName = document.querySelector('#pizzaOptions').value;
  const selectedSize = document.querySelector("input[name='q01']:checked").value;
  const selectedToppings = document.querySelector("input[name='q02']:checked").value;

  
  
  
  let newPizza = new Pizza(selectedPizzaName, selectedSize, selectedToppings);
  const totalPrice = newPizza.calculateCost(selectedPizzaName);
  document.getElementById("output").innerHTML = selectedSize + " " + selectedPizzaName +
    " With " + selectedToppings + " Extra Toppings: $ " + totalPrice;



}

window.addEventListener("load", function () {
  let form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    getPizza();
    event.preventDefault();
  });
});