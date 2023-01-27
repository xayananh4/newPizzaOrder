//BUSINESS LOGIC
function Pizza(pizzaName, pizzaToppings, pizzaSize) {
  this.name = pizzaName;
  this.toppings= pizzaToppings;
  this.size = pizzaSize;
}

Pizza.prototype.calculateCost = function() {
  let totalPrice = 0;
  
  if(this.pizzaName === "Memphis-BBQ-Chicken"){
    totalPrice = 14.99;
  }
  else if(this.pizzaName  === "Fiery-Hawaiian"){
    totalPrice = 17.99;
  }
  else {
    totalPrice = 11.99;
  }
  return totalPrice;
};

// UI Logic
function getPizza() {
  let selectedPizzaName = document.querySelector('#pizzaOptions').value;
  const selectedSize = document.querySelector("input[name='q01']:checked").value;
  const selectedToppings = document.querySelector("input[name='q02']:checked").value;
  
  let newPizza = new Pizza(selectedPizzaName,selectedSize,selectedToppings);
  const totalPrice = newPizza.calculateCost(selectedPizzaName);
  document.getElementById("output").innerHTML = "Total Cost: " + 
  selectedSize + " " + selectedPizzaName + " With " + selectedToppings + " Extra Toppings: $ " + totalPrice;
  
}

window.addEventListener("load", function() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    getPizza();
    event.preventDefault();
  });
});