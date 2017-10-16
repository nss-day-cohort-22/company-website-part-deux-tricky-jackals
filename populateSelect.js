/* let productOut = document.getElementById("estimateReq")
function anotherProduct() {
    productOut.innerHTML += document.getElementsByClassName("products")

}

document.getElementById("another").addEventListener("click", anotherProduct()) */








    const storedServices = JSON.parse(localStorage.getItem("serviceList"))
    let serviceOutput = document.getElementsByClassName("product-select")[0]
    for (let i = 0; i < storedServices.length; i++) {
        let service = storedServices[i];
        serviceOutput.innerHTML += 
        `
        <option value= "${service.HourlyRate}" name= "${service.name}">${service.name} -- $${service.HourlyRate}</option>
        ` 
    }
