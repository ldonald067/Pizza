var pizzaPrice = 0;

function Pizza(size,toppings,pizzaPrice) {
  this.size = size;
  this.toppings = toppings;
  this.pizzaPrice = 0;
}

Pizza.prototype.price = function() {
  if (this.size === "Small") {
    this.pizzaPrice += 2;
    console.log("sm");
  }
  else if (this.size === "Medium") {
    this.pizzaPrice += 3;
    console.log("md");
  }
  else if (this.size === "Large") {
    this.pizzaPrice += 4;
    console.log("lg");
  }
  if (this.toppings.indexOf("Cheese") >= 0) {
    this.pizzaPrice += 3;
    console.log("ch");
  }

  if (this.toppings.indexOf("Peanut Butter") >= 0) {
    this.pizzaPrice += 10;
    console.log("pb`");

  }

  if (this.toppings.indexOf("Vegetarian") >= 0) {
    this.pizzaPrice += 2;
    console.log("veg");
  }
  if (this.toppings.indexOf("Supreme") >= 0) {
    this.pizzaPrice += 4;
    console.log("supr");
  }
  if (this.toppings.indexOf("Pepperoni") >= 0) {
    this.pizzaPrice += 3;
    console.log("pepp");
  }

  else if (this.toppings.indexOf("Supreme" && "Pepperoni") >= 0) {
    alert("You can not choose Supreme and Pepperoni in a combination");
    $("#responses").hide();

  }

  else if (this.toppings.indexOf("Vegetarian" && "Supreme") >= 0) {
    alert("You can not choose Vegetarian and Supreme in a combination");
    $("#responses").hide();

  }

  return this.pizzaPrice;
  console.log("total");
}





$(document).ready(function(){
  $("form#pizza").submit(function(event){
    event.preventDefault();

    var resultSize = $("input[type=radio][name=size]:checked").val();
    var resultToppings = [];
    $("input[type=checkbox][name=toppings]:checked").each(function(){
      resultToppings.push($(this).val());
    });
    var newPizza = new Pizza(resultSize,resultToppings,pizzaPrice);
    newPizza.price();

    $("#responses").append("<li>" + "You ordered a " + newPizza.size + " " + newPizza.toppings + " pizza. " + " Your total price is " + newPizza.pizzaPrice + "</li>");
