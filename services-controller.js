//GET DATA FROM STORAGE
const serviceDetail = JSON.parse(localStorage.getItem("serviceList"))

//CREATE VARIABLE TO SHOW DATA ON UI
const serviceInfo = document.getElementsByClassName("services")[0]

//BUILD ITERATION METHOD TO LOOP THROUGH DATA
    for (i = 0; i < serviceDetail.length; i++)
        {
        let service = serviceDetail[i];
        
        serviceInfo.innerHTML +=  //CALL THE DATA TO THE UI
        `
        <article class="$(key) gridbox">    
            <h3>${service.name}</h3>   
            <br>     
            <p>${service.description}</p>
            <br>
            <p>$${service.HourlyRate} Per Hour</p>
        </article>
        `
        }