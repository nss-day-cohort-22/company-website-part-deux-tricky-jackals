//SET UP DATA OBJECTS
const soundEngineerRental =
{
    "name": "Rent a Sound Engineering Team",
    "description": "Includes two (2) Jackel Audio certified sound engineers who will manage the transport, setup, install and testing of your equipment rental or purchase. ",
    "HourlyRate": "100",
    "MinimumHours": "10"
}

const paSystemRental =
{
    "name": "Rental for PA System for Conference",
    "description": "Includes audio setup for one conference room: One (1) wired mic, one (1) clip mic and two (2) large speakers.",
    "HourlyRate": "25",
    "MinimumHours": "8"
}

const avSystemRental =
{
    "name": "Rental for Audio/Visual for Concert",
    "description": "For your concert needs, we'll provide you with 2 large screens, 3 microphones and booms, 4 large speakers and a control panel.",
    "HourlyRate": "200",
    "MinimumHours": "4"
}

//CREATE DATA CONTAINER
let serviceList = []

//PUSH DATA TO CONTAINER
serviceList.push(soundEngineerRental, paSystemRental, avSystemRental)

//STRINGIFY - ADD TO LOCAL STORAGE
const serviceListString = JSON.stringify(serviceList)
localStorage.setItem("serviceList", serviceListString)