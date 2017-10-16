/* let productOut = document.getElementById("estimateReq")
function anotherProduct() {
    productOut.innerHTML += document.getElementsByClassName("products")

}

document.getElementById("another").addEventListener("click", anotherProduct()) */







for (let i = 0; i < storedProducts.length; i++) {
    
    let productOutput = document.getElementsByClassName("product-select")[i]
    for (let i = 0; i < storedProducts.length; i++) {
        let product = storedProducts[i];
        productOutput.innerHTML += 
        `
        <option value= "${product.price}" name= "${product.name}">${product.name} -- $${product.price}</option>
        ` 
    }
}