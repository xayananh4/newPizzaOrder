//BUSINESS LOGIC
function Address(addressOwnerName, addressStreet, addressCity, addressZipCode) {
  this.name = addressOwnerName;
  this.street = addressStreet;
  this.city = addressCity;
  this.zipCode = addressZipCode;
}

function Pizza(pizzaName, pizzaToppings, pizzaSize) {
  this.name = pizzaName;
  this.toppings = pizzaToppings;
  this.size = pizzaSize;
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
  let deliveryOption = document.querySelector("div#deliveryOption");

  document.querySelectorAll('input[name="q03"]').forEach((element) => {
    element.addEventListener("change", function (event) {
      let selectedOption = event.target.value;
      if (selectedOption === "_Delivery") {
        deliveryOption.removeAttribute("class");
      }
    });
  });

  form.addEventListener("submit", function (event) {
    getPizza();
    event.preventDefault();
  });

});




