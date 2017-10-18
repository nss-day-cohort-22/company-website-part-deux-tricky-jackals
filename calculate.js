//Created a function to calculate the estimate of services
function calculateEstimate() {
    //Created a variable to hold the services select box
    let counter = document.getElementsByClassName("service-select")
    //Created a variable to hold the subTotal
    let subTotal = 0
    //Created a for loop to calculate the price of each line and add it to the subTotal variable 
    for (var i = 0; i < counter.length; i++) {
        //assigns the price of the selected item
        let price = parseFloat((document.getElementsByClassName("service-select")[i].value).replace(/,/g,''));
        //assigns the quantity selected
        let qty = document.getElementsByClassName("quantity")[i].value;
        //multiplys the price by quantity and adds it to the subTotal
         subTotal += (price * qty);   
    }
    //Calculates the tax of the order
    let tax = (subTotal * .0925)
    //Adds the tax to the subTotal
    let total = (subTotal + tax)
    //Assigns the value to num and inserts commas and periods where necessary
    let num = '$' + total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    //Prints the totals to the DOM
    document.getElementById("subtotal").innerHTML = "$"+subTotal
    document.getElementById("tax").innerHTML =  "$"+tax.toFixed(2);
    document.getElementById("total").innerHTML = num
}

function calculatePrice() {
    let counter = document.getElementsByClassName("product-select")
    let subTotal = 0
    for (var i = 0; i < counter.length; i++) {
        let price = parseFloat((document.getElementsByClassName("product-select")[i].value).replace(/,/g,''));
        let qty = document.getElementsByClassName("quantity")[i].value;
         subTotal += (price * qty);   
    }
    let tax = (subTotal * .0925)
    let total = (subTotal + tax)
    let num = '$' + total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    
    document.getElementById("subtotal2").innerHTML = "$"+subTotal.toFixed(2)
    document.getElementById("tax2").innerHTML =  "$"+tax.toFixed(2);
    document.getElementById("total2").innerHTML = num
}




