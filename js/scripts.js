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


//BUSINESS LOGIC
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
function displayDeliverySubmission(divElement) {
  document.querySelectorAll('input[name="q03"]').forEach((element) => {
    element.addEventListener("change", function (event) {

      let option = event.target.value;
      if (option === "_Delivery") {
        divElement.removeAttribute("class");
      }
      else{
        divElement.setAttribute("class","defaultSettingHidden")
      }
    });
  });
  
  // let name = document.getElementById("addressName").value;
  // let street = document.getElementById("street-address").value;
  // let city = document.getElementById("city").value;
  // let zipCode = document.getElementById("postal-code").value;
  // document.getElementById("delivery-output").innerHTML = "Will be delivered to: " + name + "At: " 
  // + street + " " + city + " " + zipCode;
}

// UI Logic
function handlePizzaSubmission() { 
  let selectedPizzaName = document.querySelector('#pizzaOptions').value;
  const selectedSize = document.querySelector("input[name='q01']:checked").value;
  const selectedToppings = document.querySelector("input[name='q02']:checked").value;
  let name = document.getElementById("addressName").value;
  let street = document.getElementById("street-address").value;
  let city = document.getElementById("city").value;
  let zipCode = document.getElementById("postal-code").value;
  let newPizza = new Pizza(selectedPizzaName, selectedSize, selectedToppings);
  let newAddress = new Address(name, street, city, zipCode);
  const totalPrice = newPizza.calculateCost(selectedPizzaName); 
  
  document.getElementById("output").innerHTML = "Thank You! " + newAddress.name  +
  " your " + selectedSize + " " +  selectedPizzaName + " with " + selectedToppings  
  + " is headed to: " + street + " " + city + " " + zipCode + " NOW!";

}

window.addEventListener("load", function () {
  let form = document.querySelector("form#deliveryForm");
  let pizzaMenu = document.querySelector("div#pizzaMenu");
  let purchaseBtn = document.querySelector("button#purchase");
  let submitAddressBtn = document.querySelector("button#addressBtn");
  let divElement = document.querySelector("div#deliveryOption");
  displayDeliverySubmission(divElement);
  
  form.addEventListener("submit", function (event) {
    
    submitAddressBtn.setAttribute("class","defaultSettingHidden");
    divElement.setAttribute("class","defaultSettingHidden");
    pizzaMenu.removeAttribute("class");
    purchaseBtn.removeAttribute("class")
    event.preventDefault();
  
  });

  purchaseBtn.addEventListener("click", function () {
    handlePizzaSubmission();
});

});




