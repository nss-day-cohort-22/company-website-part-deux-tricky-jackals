
//Created a variable to hold the queried DOM element.
let productsOut = document.getElementById("productList");

//Created a for loop to iterate through the products array
for (let i = 0; i < storedProducts.length; i++) {

    //stored the current product to a variable
    let products = storedProducts[i];

        //added innerHTML plugging the product object elements into the HTML.
        productsOut.innerHTML += 
        `
        <section class="products">
            <img src="${products.img}" alt="${products.title}" width="150px">
            <ul>
                <li>Product: ${products.name} </li>
                <li>Price: $${products.price}</li>
                <li>Description: ${products.description}</li>
            </ul>
        </section>
        `
    }