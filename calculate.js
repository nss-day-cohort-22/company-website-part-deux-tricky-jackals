
function addItUp() {
    let counter = document.getElementsByClassName("product-select")
    let subTotal = 0
    for (var i = 0; i < counter.length; i++) {
        let price = parseFloat((document.getElementsByClassName("product-select")[i].value).replace(/,/g,''));
        let qty = document.getElementsByClassName("quantity")[i].value;
         subTotal += (price * qty);   
    }

    let num = '$' + subTotal.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

    document.getElementById("total").innerHTML = num
}