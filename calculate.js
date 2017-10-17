
function calculateEstimate() {
    let counter = document.getElementsByClassName("service-select")
    let subTotal = 0
    for (var i = 0; i < counter.length; i++) {
        let price = parseFloat((document.getElementsByClassName("service-select")[i].value).replace(/,/g,''));
        let qty = document.getElementsByClassName("quantity")[i].value;
         subTotal += (price * qty);   
    }
    let tax = (subTotal * .0925)
    let total = (subTotal + tax)
    let num = '$' + total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    
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




