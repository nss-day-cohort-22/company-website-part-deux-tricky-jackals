let current = 0



function filter(event) {
    const storedProduct=JSON.parse(localStorage.getItem("productsArchive"));
    let productsOut = document.getElementById("productList");
    let start;
    console.log(current)
   
    if(event.type === "click"){
         start = parseInt(event.target.id);
    } else {
         start = event
    }
    current=start;
    Hide()
    hideNext()
    showCurrent()
    productsOut.innerHTML = ""
    
    for (let i= start; i < (start+4); i++) {
        
        product = storedProduct[i];
        productsOut.innerHTML += 
        `
        <section class= "products ${product.tag}">
        <img src="${product.img}" width="150px">
        <ul>
            <li>Product: ${product.name}</li>
            <li>Price: $${product.price}</li>
            <li>Description: ${product.description}</li>
        </ul>
        </section>
        `
    }
}


function showCurrent() {
    let pg1 = document.getElementById("0")
    let pg2 = document.getElementById("4")
    let pg3 = document.getElementById("8")
    let pg4 = document.getElementById("12")
    let pg5 = document.getElementById("16")
    
    switch(true) {
        case current === 0:
            pg1.style.color = "purple";
            pg1.disabled = "true";
            pg2.style.color = "white";
            pg2.disabled = "false";
            pg3.style.color = "white";
            pg3.disabled = "false";
            pg4.style.color = "white";
            pg4.disabled = "false";
            pg5.style.color = "white";
            pg5.disabled = "false";
            break;
        case current === 4:
            pg2.style.color = "purple";
            pg2.disabled = "true";
            pg1.style.color = "white";
            pg1.disabled = "false";
            pg3.style.color = "white";
            pg3.disabled = "false";
            pg4.style.color = "white";
            pg4.disabled = "false";
            pg5.style.color = "white";
            pg5.disabled = "false";
            break;
        case current === 8:
            pg3.style.color = "purple";
            pg3.disabled = "true";
            pg2.style.color = "white";
            pg2.disabled = "false";
            pg1.style.color = "white";
            pg1.disabled = "false";
            pg4.style.color = "white";
            pg4.disabled = "false";
            pg5.style.color = "white";
            pg5.disabled = "false";
            break;
        case current === 12:
            pg4.style.color = "purple";
            pg4.disabled = "true";
            pg2.style.color = "white";
            pg2.disabled = "false";
            pg3.style.color = "white";
            pg3.disabled = "false";
            pg1.style.color = "white";
            pg1.disabled = "false";
            pg5.style.color = "white";
            pg5.disabled = "false";

            break;
        case current === 16:
            pg5.style.color = "purple";
            pg5.disabled = "true";
            pg2.style.color = "white";
            pg2.disabled = "false";
            pg3.style.color = "white";
            pg3.disabled = "false";
            pg4.style.color = "white";
            pg4.disabled = "false";
            pg1.style.color = "white";
            pg1.disabled = "false";
            break;
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

function hideNext() {
    let next = document.getElementById("next")
    if(current === 16){
        next.style.display = "none"
    } else {
        next.style.display = "block"
    }
}



function Hide() {
    let previous = document.getElementById("prev")
    if(current === 0){
        previous.style.display = "none"
    } else {
        previous.style.display = "block"
    }
}
Hide()
showCurrent()
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



