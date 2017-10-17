function showNextService() {
    let service2 = document.getElementById("service-2");
    let service3 = document.getElementById("service-3");
   

    if (service2.style.display === "none") {
        service2.style.display = "block";
    } else {
            service3.style.display = "block";
        } 
    }