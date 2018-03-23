// The code in add.js handles what happens when the user clicks the "Add A New Product" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newBook object
  var newProduct = {
    product_name: $("#name").val().trim(),
    product_kind: $("#kind").val().trim(),
    department_name: $("#department").val().trim(),
    price: $("#price").val().trim(),
    stock_quantity: $("#stock").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newProduct)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#kind").val("");
  $("#department").val("");
  $("#price").val("");
  $("#stock").val("");

});
