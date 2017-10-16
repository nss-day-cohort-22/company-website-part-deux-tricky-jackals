
// Empty Products Array
const products = []

// Products Object List
let speakerSystem = {
    "name": "DAS Audio Event 208 218 Speaker Set",
    "price": "26,186.99",
    "description": "The new Event Line Arrays put the world acclaimed D.A.S performance at your reach like never before.",
    "URL": "http://www.avmaxx.com/DAS-Audio-Event-208-218-Pack-2_p_2764.html?gclid=CjwKCAjwyIHPBRAIEiwAHPS-GO35x-gWD6r-qhRwHo9fBMTlBZiENtgreXa0Pg50GCPFVxJmanm85xoCMU8QAvD_BwE",
    "img": "das_audio_event_line_array_sale2.jpg"
}

let amplifier = {
    "name": "Alesis RA500 Amplifier",
    "price": "349.00",
    "description": "More power and better performance at a lower cost-per-watt than competitive amplifiers.",
    "URL": "http://www.avmaxx.com/Alesis-RA500_p_1888.html",
    "img": "ra500_front_lg.jpg"
}

let headphones = {
    "name": "Reloop RHP-10 Cherry Black Headphones",
    "price": "99.99",
    "description": "Powerful, deep, finely resolvent sound for perfect listening pleasure.",
    "URL": "http://www.avmaxx.com/Reloop-RHP-10-Cherry-Black_p_467.html",
    "img": "Reloop RHP-10 Cherry Black.jpeg"
}

let djSampler = {
    "name": "Akai MPC Live",
    "price": "1,199.00",
    "description": "Following in the footsteps of greatness is never easy. But we did it. The MPC Live takes the immersive production workflow and game-altering performance breakthroughs first introduced by the MPC Touch and ratchets up the stakes by adding standalone functionality.",
    "URL": "http://www.avmaxx.com/Akai-MPC-Live_p_4136.html",
    "img": "Akai_Mixer.jpg"
}

let djController = {
    "name": "Pioneer DJ DDJ-SX2",
    "price": "999.99",
    "description": "The Pioneer DDJ-SX2 is the industry's first controller to give DJs dedicated control of the new Serato Flip functions within Serato DJ .",
    "URL": "http://www.avmaxx.com/Pioneer-DJ-DDJ-SX2.html",
    "img": "pioneer-ddj-sx2.jpg"
}

// Pushing objects into array
products.push(speakerSystem, amplifier, headphones, djSampler, djController)

//Created a constant variable holding the stringified array
const productsArchiveString = JSON.stringify(products);

//Stored the stringified array into LocalStorage.
localStorage.setItem("productsArchive", productsArchiveString);

//Created a variable to hold the parsed array pulled from LocalStorate
const storedProducts = JSON.parse(localStorage.getItem("productsArchive"));
