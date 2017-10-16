/* function showNext() {
    let product2 = document.getElementById("product-2");
    let product3 = document.getElementById("product-3");
    let product4 = document.getElementById("product-4");
    let product5 = document.getElementById("product-5");

    if (product2.style.display === "none") {
        product2.style.display = "block";
    } else {
        if (product3.style.display === "none") {
            product3.style.display = "block";
        } else {
            if (product4.style.display === "none") {
                product4.style.display = "block";   
            } else {
                
                    product5.style.display = "block";
                }
            }
        }
    } */


    function showNext() {
       let output = document.getElementById("products") 
        output.innerHTML += 
        `
        <section>
        <select class="product-select">
        </select>
        <h3 class="qty">Quantity</h3>
        <select class="quantity">
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">4</option>
            <option value = "5">5</option>
            <option value = "6">6</option>
            <option value = "7">7</option>
            <option value = "8">8</option>
            <option value = "9">9</option>
            <option value = "10">10</option>
        </select>
            <button onclick="showNext()">Add Another Product</button>
        </section> 
        `
       }
       


