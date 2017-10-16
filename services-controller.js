const serviceDetail = JSON.parse(localStorage.getItem("serviceItems"))

const serviceInfo = document.getElementsByClassName("stores")[0]

for (let key in serviceDetail)
    {
    const currentService = serviceDetail[key]

    for (let i = 0; i < currentService.length; i++)
        {
        let store = currentService[i]
        serviceInfo.innerHTML +=
        `
        <article class="$(key) gridbox">
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        </article>
        `
        }
    }