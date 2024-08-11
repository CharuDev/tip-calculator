var button = document.getElementById("button");
var bill = document.getElementById("bill")
button.addEventListener("click", () => {
    // Get the values of the inputs inside the event listener
    var numb = parseFloat(document.getElementById("num").value);
    var tip = parseFloat(document.getElementById("tip").value);

    // Calculate the total amount including tip
    var total = numb + tip;
    bill.innerHTML="Total bill including tip: $" + total.toFixed(2)
    // Display the result (you can log it to the console or display it on the page)
    console.log("Total bill including tip: $" + total.toFixed(2));
});
