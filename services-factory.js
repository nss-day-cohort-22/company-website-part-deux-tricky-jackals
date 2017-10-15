let services = []

const soundEngineerRental =
{
    "name": "",
    "description": "Includes two (2) Jackel Audio certified sound engineers who will manage the transport, setup, install and testing of your equipment rental or purchase. ",
    "HourlyRate": "100",
    "MinimumHours": "10"
}

const paSystemRental =
{
    "name": "Rental for PA System - Conference",
    "description": "Includes audio setup for one conference room: One (1) wired mic, one (1) clip mic and two (2) large speakers.",
    "HourlyRate": "25",
    "MinimumHours": "8"
}

const avSystemRental =
{
    "name": "Rental for Audio/Visual for Concert",
    "description": "Includes 2 large screens, 3 microphones and booms, 4 large speakers and a control panel.",
    "HourlyRate": "200",
    "MinimumHours": "4"
}

const locationTN =
{
    "name": "bækur Nashville",
    "city": "Nashville",
    "stateregion": "Tennessee",
    "country": "United States",
    "baekurrep": "Leah Duvic"
}

storeList.push(locationLA,locationIT,locationRK,locationTN)

let StoreLocations =
{
    "storeList": storeList
}

const storeLocationsString = JSON.stringify(StoreLocations)
localStorage.setItem("storeLocations", storeLocationsString)