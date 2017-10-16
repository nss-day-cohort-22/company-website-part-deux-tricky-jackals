const serviceDetail = JSON.parse(localStorage.getItem("serviceItems"))

const serviceInfo = document.getElementsByClassName("services")[0]

for (let key in serviceDetail)
    {
    const currentService = serviceDetail[key]

    for (let i = 0; i < currentService.length; i++)
        {
        let service = currentService[i]
        serviceInfo.innerHTML +=
        `
        <article class="$(key">
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        </article>
        `
        }
    }