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
    "name": "Rental for PA System - Conference",
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



let mixerBehringer = {
    "name": "Pioneer DJ DDJ-SX2",
    "price": "1999.99",
    "description": "The Behringer X32 digital mixer packs everything you need to easily mix and record a live show into a compact, roadworthy chassis.",
    "URL": "https://www.sweetwater.com/store/detail/X32?mrkgcl=28&mrkgadid=2945987365&rkg_id=h-8423169d07cf1eb687bd20d11a86cfcb_t-1508257170&product_id=X32&campaigntype=shopping&campaign=aaShopping%2520-%2520Core&adgroup=Live%2520Sound%2520%26%2520Lighting%2520-%2520Mixers%2520-%2520Behringer&placement=google&adpos=1o2&creative=55678035481&device=c&matchtype=&network=g&gclid=Cj0KCQjw1JbPBRCrARIsAOKj2PneIH4FS7g4AoFCA7pqejD0T-8Dk-Ekzr_WiJs_spvgD6SsJd37iLUaAiG6EALw_wcB",
    "img": "behringer x32.jpg",
    "title": "mixer",
    "tag": "onSale",
    "page": "2"
}

let mixerBehringer = {
    "name": "PreSonus StudioLive 32 Series III ",
    "price": "2999.99",
    "description": "The PreSonus StudioLive 32 digital mixing console/recorder represents the third generation of the acclaimed StudioLive series, and it's just as capable in the studio as it is for live sound.",
    "URL": "https://www.sweetwater.com/store/detail/SLMAD32?mrkgcl=28&mrkgadid=3208894243&rkg_id=h-8423169d07cf1eb687bd20d11a86cfcb_t-1508258217&product_id=SLMAD32&campaigntype=shopping&campaign=aaShopping%2520-%2520Core&adgroup=Live%2520Sound%2520%26%2520Lighting%2520-%2520Mixers%2520-%2520Other&placement=google&adpos=1o4&creative=55674776881&device=c&matchtype=&network=g&gclid=Cj0KCQjw1JbPBRCrARIsAOKj2PkF8y7o9LAGFcNEHQBmoN16UCkF38M8oBP0CbPW8YSrjfgO2TATjNQaAgLnEALw_wcB",
    "img": "presonus mixer.jpg",
    "title": "mixer",
    "tag": "onSale",
    "page": "2"
}