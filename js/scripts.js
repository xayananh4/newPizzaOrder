//BUSINESS
function Pizza(pizzaName, pizzaToppings, pizzaSize) {
  this.name = pizzaName;
  this.toppings= pizzaToppings;
  this.size = pizzaSize;
}







// UI Logic
function getPizza() {
  let selectedPizzaName = document.querySelector('#pizzaOptions').value;
  const selectedSize = document.querySelector("input[name='q01']:checked").value;
  const selectedToppings = document.querySelector("input[name='q02']:checked").value;
  

}



window.addEventListener("load", function() {
  
  let form = document.querySelector("form");

    // the original form submission event listener
  form.addEventListener("submit", function(event) {
    getPizza();

    event.preventDefault();
  });
});