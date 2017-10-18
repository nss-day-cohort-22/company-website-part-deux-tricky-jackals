//Set a variable to keep track of what page is being viewed
let current = 0


//Created a function to filter through the pages of products
function filter(event) {
    //Defined variable to get products from local storage
    const storedProduct=JSON.parse(localStorage.getItem("productsArchive"));
    //defined variable to determine where HTML would be inserted
    let productsOut = document.getElementById("productList");
    //defined a variable to store the loop start point
    let start;
   //Created an if statement to determine if the catalyst of the function was a click or not.
    if(event.type === "click"){
         start = parseInt(event.target.id);
    } else {
         start = event
    }
    //Assigned a value to current 
    current=start;
    //Called the Hide() function to hide/display the "<" arrow
    Hide()
    //Called the hideNext() function to hide/display the ">" arrow
    hideNext()
    //Called the showCurrent() function to change the color and disable the current page
    showCurrent()
    //Set the output point of HTML to and empty string to clear the products
    productsOut.innerHTML = ""
    //Created a for loop and set its start point with the value of "start" and its loop duration of "start + 4"
    for (let i= start; i < (start+4); i++) {
        //stored the current product object in a variable
        product = storedProduct[i];
        //wrote the html code to be inserted at the designated spot on the HTML doc
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

//Created a function that will change the color of the current product page and diable it.
function showCurrent() {
    // stored the DOM elements to variables
    let pg1 = document.getElementById("0")
    let pg2 = document.getElementById("4")
    let pg3 = document.getElementById("8")
    let pg4 = document.getElementById("12")
    let pg5 = document.getElementById("16")
    //Created a switch statement that would compare the value of current to the Id of the page link and change the color and disable it.
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

//Created a function to show the previous page of products
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
//Created a function to show the next page of products
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
//captures the links of each page select and adds an event listener to listen for users "click" and calls a function
document.getElementById("prev").addEventListener("click", prevFilter)
document.getElementById("0").addEventListener("click", filter)
document.getElementById("4").addEventListener("click", filter)
document.getElementById("8").addEventListener("click", filter)
document.getElementById("12").addEventListener("click", filter)
document.getElementById("16").addEventListener("click", filter)
document.getElementById("next").addEventListener("click", nextFilter)


//Creatd a function to hide/show the ">" arrow
function hideNext() {
    let next = document.getElementById("next")
    if(current === 16){
        next.style.display = "none"
    } else {
        next.style.display = "block"
    }
}

//Created a function to hide/show the "<" arrow
function Hide() {
    let previous = document.getElementById("prev")
    if(current === 0){
        previous.style.display = "none"
    } else {
        previous.style.display = "block"
    }
}

//called the following functions so they run when the page loads
filter(0)
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



