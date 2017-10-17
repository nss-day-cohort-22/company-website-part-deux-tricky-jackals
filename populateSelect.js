/* let productOut = document.getElementById("estimateReq")
function anotherProduct() {
    productOut.innerHTML += document.getElementsByClassName("products")

}

document.getElementById("another").addEventListener("click", anotherProduct()) */







    for (var i = 0; i < 3; i++) {
    
    const storedServices = JSON.parse(localStorage.getItem("serviceList"))
    let serviceOutput = document.getElementsByClassName("service-select")[i]
    for (let i = 0; i < storedServices.length; i++) {
        let service = storedServices[i];
        serviceOutput.innerHTML += 
        `
        <option value= "${service.HourlyRate}" name= "${service.name}">${service.name} -- $${service.HourlyRate}</option>
        ` 
    }
}


for (var i = 0; i < 5; i++) {
    
    const storedProducts = JSON.parse(localStorage.getItem("productsArchive"))
    let productOutput = document.getElementsByClassName("product-select")[i]
    for (let i = 0; i < storedProducts.length; i++) {
        let product = storedProducts[i];
        productOutput.innerHTML += 
        `
        <option value= "${product.price}" name= "${product.name}">${product.name} -- $${product.price}</option>
        ` 
    }
}
