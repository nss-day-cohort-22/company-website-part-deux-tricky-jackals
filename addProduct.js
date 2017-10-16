function showNext() {
    let product2 = document.getElementById("product-2");
    let product3 = document.getElementById("product-3");
    let product4 = document.getElementById("product-4");
    let product5 = document.getElementById("product-5");

    if (product2.style.display === "none;") {
        product2.style.display = "block;";
    } else {
        if (product3.style.display === "none") {
            product3.style.display = "block";
        } else {
            if (product4.style.display === "none") {
                product4.style.display = "block";   
            } else {
                if (product5.style.display === "none") {
                    product5.style.display = "block";
                }
            }
        }
    }

}