
//Created a variable to hold the queried DOM element.
let productsOut = document.getElementById("productList");

//Created a for loop to iterate through the products array
for (let i = 0; i < storedProducts.length; i++) {

    //stored the current product to a variable
    let products = storedProducts[i];

        //added innerHTML plugging the product object elements into the HTML.
        productsOut.innerHTML += 
        `
        <section class="products ${products.tag}" style="display: block" id="${products.title}">
            <img src="${products.img}" width="150px">
            <ul>
                <li>Product: ${products.name} </li>
                <li>Price: $${products.price}</li>
                <li>Description: ${products.description}</li>
            </ul>
        </section>
        `
    }
    
// Pagination filter

//Filter function
// function filter() {
//     let sale = document.querySelectorAll(".onSale")
//     let unaffordable = document.querySelectorAll(".unaffordableItem")
//     let neat = document.querySelectorAll(".neatItem")
//     let selected = document.getElementById("filter").value
//     if (selected === "onSale") {
//         for (var i = 0; i < sale.length; i++){
//             sale[i].style.display = "block"
//         } 
//         for (var i = 0; i < unaffordable.length; i++){
//             unaffordable[i].style.display = "none"
//         } 
//         for (var i = 0; i < neat.length; i++){
//             neat[i].style.display = "none"
//         }
//     } else if (selected === "unaffordableItem") {

//         for (var i = 0; i < sale.length; i++){
//             unaffordable[i].style.display = "block"
//         } 
//         for (var i = 0; i < sale.length; i++){
//             sale[i].style.display = "none"
//         } 
//         for (var i = 0; i < neat.length; i++){
//             neat[i].style.display = "none"
//         }
//     } else if (selected === "neatItem") {
    
//         for (var i = 0; i < neat.length; i++){
//             neat[i].style.display = "block"
//         } 
//         for (var i = 0; i < unaffordable.length; i++){
//             unaffordable[i].style.display = "none"
//         } 
//         for (var i = 0; i < sale.length; i++){
//             sale[i].style.display = "none"
//         }
//     } else if (selected === "all") {
        
//         for (var i = 0; i < neat.length; i++) {
//             neat[i].style.display = "block"
//         } 
//         for (var i = 0; i < unaffordable.length; i++){
//             unaffordable[i].style.display = "block"
//         } 
//         for (var i = 0; i < sale.length; i++){
//             sale[i].style.display = "block"
//         }
//     }
// }



