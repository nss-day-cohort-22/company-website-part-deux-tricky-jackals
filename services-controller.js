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
        <article class="$(key) gridbox">    //DETAIL WHAT IS BEING CALLED TO UI
            <h3>${service.name}</h3>        //AND HOW IT SHOULD LOOK
            <p>${service.description}</p>
            <p>${service.HourlyRate}</p>
        </article>
        `
        }