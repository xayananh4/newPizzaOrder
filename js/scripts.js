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
function handleDeliverySubmission() {
   
  // Selecting the input element and get its value 
  let name = document.getElementById("addressName").value;
  let street = document.getElementById("street-address").value;
  let city = document.getElementById("city").value;
  let zipCode = document.getElementById("postal-code").value;
  
  document.getElementById("delivery-output").innerHTML = "Will be delivered to: " + name + "At: " 
  + street + " " + city + " " + zipCode;


}
// UI Logic
function handlePizzaSubmission() { 
  let selectedPizzaName = document.querySelector('#pizzaOptions').value;
  const selectedSize = document.querySelector("input[name='q01']:checked").value;
  const selectedToppings = document.querySelector("input[name='q02']:checked").value;
  let newPizza = new Pizza(selectedPizzaName, selectedSize, selectedToppings);
  const totalPrice = newPizza.calculateCost(selectedPizzaName);
  
  document.getElementById("output").innerHTML = selectedSize + " " + selectedPizzaName 
  + " With " + selectedToppings + " Extra Toppings: $ " + totalPrice;
}

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let formForDelivery = document.querySelector("deliveryForm");


  formForDelivery.
  
  form.addEventListener("submit", function (event) {
    handlePizzaSubmission();
    event.preventDefault();
  });



});




