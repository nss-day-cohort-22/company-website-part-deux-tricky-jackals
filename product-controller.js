let current = 0



function filter(event) {
    const storedProduct=JSON.parse(localStorage.getItem("productsArchive"));
    let productsOut = document.getElementById("productList");
    let start;
    if(event.type === "click"){
         start = parseInt(event.target.id);
    } else {
         start = event
    }
    current=start;
    productsOut.innerHTML = ""
    console.log(start)
    for (let i= start; i < (start+4); i++) {
        console.log(i);
        product = storedProduct[i];
        productsOut.innerHTML += 
        `
        <section class= "products ${product.tag}">
            <div class="section-container">
                <div class="section-img">
                    <img src="${product.img}" width="150px" >
                </div>
                <div class="section-li">
                    <ul style="display:inline-block">
                        <li>Product: ${product.name}</li>
                        <li>Price: $${product.price}</li>
                        <li>Description: ${product.description}</li>
                    </ul>
                </div>
            </div>
        </section>
        `
    }
}




function prevFilter(){
    switch(true) {
    case current === 4:
    filter(0);
    break;
case current === 8:
    filter(4);
    break;
case current === 12:
    filter(8);
    break;
case current === 16:
    filter(12);
    break;
}
}

function nextFilter(){
    switch (true) {
        case current === 0:
            filter(4);
            break;
        case current === 4:
            filter(8);
            break;
        case current === 8:
            filter(12);
            break;
        case current === 12:
            filter(16);
            break;
    

}
}
document.getElementById("prev").addEventListener("click", prevFilter)
document.getElementById("0").addEventListener("click", filter)
document.getElementById("4").addEventListener("click", filter)
document.getElementById("8").addEventListener("click", filter)
document.getElementById("12").addEventListener("click", filter)
document.getElementById("16").addEventListener("click", filter)
document.getElementById("next").addEventListener("click", nextFilter)


filter(0)
function Hide() {
    let previous = document.getElementById("prev")
    if(current === 0){
        previous.style.display = "none"
    } else {
        previous.style.display = "block"
    }
}
Hide()
/* 
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
    } */
    
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



