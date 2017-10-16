for (var i = 0; i < 5; i++) {
    
    function addItUp() {
        let price = document.getElementsByClassName("product-select")[i].value;
        let qty = document.getElementsByClassName("quantity")[i].value;
        let total = price * qty;
        document.getElementById("total").innerHTML = "$"+total
    }
}