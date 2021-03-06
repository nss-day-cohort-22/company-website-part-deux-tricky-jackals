
// Empty Products Array
const products = []

// Products Object List
let speakerSystem = {
    "name": "DAS Audio Event 208 218 Speaker Set",
    "price": "26,186.99",
    "description": "The new Event Line Arrays put the world acclaimed D.A.S performance at your reach like never before.",
    "URL": "http://www.avmaxx.com/DAS-Audio-Event-208-218-Pack-2_p_2764.html?gclid=CjwKCAjwyIHPBRAIEiwAHPS-GO35x-gWD6r-qhRwHo9fBMTlBZiENtgreXa0Pg50GCPFVxJmanm85xoCMU8QAvD_BwE",
    "img": "das_audio_event_line_array_sale2.jpg",
    "title": "speaker",
    "tag": "unaffordableItem"
}

let amplifier = {
    "name": "Alesis RA500 Amplifier",
    "price": "349.00",
    "description": "More power and better performance at a lower cost-per-watt than competitive amplifiers.",
    "URL": "http://www.avmaxx.com/Alesis-RA500_p_1888.html",
    "img": "ra500_front_lg.jpg",
    "title": "amp",
    "tag": "neatItem"
}

let headphones = {
    "name": "Reloop RHP-10 Cherry Black Headphones",
    "price": "99.99",
    "description": "Powerful, deep, finely resolvent sound for perfect listening pleasure.",
    "URL": "http://www.avmaxx.com/Reloop-RHP-10-Cherry-Black_p_467.html",
    "img": "Reloop RHP-10 Cherry Black.jpeg",
    "title": "headphone",
    "tag": "neatItem"
}

let djSampler = {
    "name": "Akai MPC Live",
    "price": "1,199.00",
    "description": "Following in the footsteps of greatness is never easy. But we did it. The MPC Live takes the immersive production workflow and game-altering performance breakthroughs first introduced by the MPC Touch and ratchets up the stakes by adding standalone functionality.",
    "URL": "http://www.avmaxx.com/Akai-MPC-Live_p_4136.html",
    "img": "Akai_Mixer.jpg",
    "title": "sampler",
    "tag": "onSale"
}

let djController = {
    "name": "Pioneer DJ DDJ-SX2",
    "price": "999.99",
    "description": "The Pioneer DDJ-SX2 is the industry's first controller to give DJs dedicated control of the new Serato Flip functions within Serato DJ .",
    "URL": "http://www.avmaxx.com/Pioneer-DJ-DDJ-SX2.html",
    "img": "pioneer-ddj-sx2.jpg",
    "title": "controller",
    "tag": "onSale"
}

let mixerBehringer = {
    "name": "Behringer X32 Digital Mixer",
    "price": "1999.99",
    "description": "The Behringer X32 digital mixer packs everything you need to easily mix and record a live show into a compact, roadworthy chassis.",
    "URL": "https://media.sweetwater.com/api/i/f-webp__ha-5ba0ccfacb82fb10__q-82__hmac-6e3c6196cc9b7fe7db1be749b613134769192add/images/items/750/X32-large.jpg.auto.webp",
    "img": "behringer.png",
    "title": "mixer",
    "tag": "onSale"
}

let mixerPresonus = {
    "name": "PreSonus StudioLive 32 Series III ",
    "price": "2999.99",
    "description": "The PreSonus StudioLive 32 digital mixing console/recorder represents the third generation of the acclaimed StudioLive series, and it's just as capable in the studio as it is for live sound.",
    "URL": "https://www.sweetwater.com/store/detail/SLMAD32?mrkgcl=28&mrkgadid=3208894243&rkg_id=h-8423169d07cf1eb687bd20d11a86cfcb_t-1508258217&product_id=SLMAD32&campaigntype=shopping&campaign=aaShopping%2520-%2520Core&adgroup=Live%2520Sound%2520%26%2520Lighting%2520-%2520Mixers%2520-%2520Other&placement=google&adpos=1o4&creative=55674776881&device=c&matchtype=&network=g&gclid=Cj0KCQjw1JbPBRCrARIsAOKj2PkF8y7o9LAGFcNEHQBmoN16UCkF38M8oBP0CbPW8YSrjfgO2TATjNQaAgLnEALw_wcB",
    "img": "presonus.png",
    "title": "mixer",
    "tag": "onSale"
}

let mixerSound = {
    "name": "Sound Devices CL-9",
    "price": "2429.99",
    "description": "The CL-9 Linear Fader Controller is a dedicated mixing surface for the 788T.",
    "URL": "http://www.fullcompass.com/prod/163403-Sound-Devices-CL-9",
    "img": "sonar.jpg",
    "title": "mixer",
    "tag": "onSale"
}

let mixerAkai = {
    "name": "AKAI MIDImix",
    "price": "99.99",
    "description": "Akai's MIDImix is a compact USB-MIDI DAW controller that is designed to give you simple and intuitive control over mixing and processing in your DAW of choice.",
    "URL": "http://www.fullcompass.com/prod/285998-AKAI-MIDImix",
    "img": "akai.jpg",
    "title": "mixer",
    "tag": "onSale"
}

let mixerMackie = {
    "name": "Mackie 802VLZ4",
    "price": "299.99",
    "description": "The 802VLZ4 8-channel mixer features the proven performance of Mackie's Onyx mic preamps in a desk-friendly, ultra-compact design perfect for professional applications with a lower input need.",
    "URL": "http://www.fullcompass.com/prod/240177-Mackie-802VLZ4",
    "img": "mackie.jpg",
    "title": "mixer",
    "tag": "onSale"
}

let pioneerController = {
    "name": "Pioneer DDJ-SX",
    "price": "289.99",
    "description": "Gator GTOURDSPDDJSX Road Case for Pioneer DDJ-SX With Sliding Platform",
    "URL": "https://www.americanmusical.com/Galleria/2/GAT%20GTOURDSPDDJSX-Large.jpg",
    "img": "controller.jpg",
    "title": "controller",
    "tag": "onSale"
}

let passiveSpeakers = {
    "name": "15 Inch 2 Way Passive PA Speakers",
    "price": "1098.99",
    "description": "The JBL PRX415M 2 Way PA Speaker is a portable, fifteen-inch two-way speaker system designed for either main sound reinforcement or monitoring applications.",
    "URL": "https://media.americanmusical.com/ItemImages/Large/JBL%20PRX415M%20PR.jpg",
    "img": "boseSpeaker.jpg",
    "title": "speakers",
    "tag": "onSale"
}

let boseSpeakers = {
    "name": "Virtually Invisible 891 in-wall speakers",
    "price": "599.95",
    "description": "These rectangular Virtually Invisible® in-wall speakers are engineered with one 7 inch woofer and two strategically positioned 1 tweeters each.",
    "URL": "https://assets.bosecom/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/virtually_invisible_891_in_wall_speakers/product_silo_images/virtually_invisible_891_EC_hero.psd/jcr:content/renditions/cq5dam.web.600.600.png",
    "img": "boseinwall.jpg",
    "title": "speakers",
    "tag": "onSale"
}

let wirelessBoseSpeakers = {
    "name": "SoundTouch outdoor wireless system with 151 SE speakers",
    "price": "778.90",
    "description": "Our popular wireless outdoor speakers deliver rich sound and clear performance—even in large outside areas.",
    "URL": "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundtouch_151_SE_outdoor_speaker_system/product_silo_images/st_outdoor_151se_sa5_black_EC1.psd/jcr:content/renditions/cq5dam.web.600.600.png",
    "img": "bose.jpeg",
    "title": "speakers",
    "tag": "onSale"  
}

 let fullSpeakerBose = {
    "name": "A Full Bose F1 PA Speaker Setup",
    "price": "5352.00",
    "description": "Two 1,000W Array Loudspeakers, Two 1,000W Powered Subwoofers, and Carrying Bags for each",
    "URL": "https://media.sweetwater.com/api/i/f-webp__ha-63b8f12cb04b3d25__q-82__hmac-a700f6ac0f1020d649ff5c8324fcd56c39193d67/images/items/750/F1System-large.jpg.auto.webp",
    "img": "fullbose.jpeg",
    "title": "speakers",
    "tag": "onSale"
}

let microphone = {
    "name": "Samson Meteor Mic USB Studio Condenser Microphone",
    "price": "69.99",
    "description": "TSamson meteor mic USB studio condenser microphone produces high-quality audio recording for any application.",
    "URL": "https://www.google.com/shopping/product/11859342197776045340?lsf=seller:10048,store:13960113375953198258&prds=oid:1044339786323067090&q=microphone+for+sale+near+me&hl=en&ei=tT_mWei3POuwjwS33IeIDA&lsft=gclid:Cj0KCQjw1JbPBRCrARIsAOKj2PlxeO0zo0H2BqSLIztY2r-PeX_uf74_V6pV20vLixsZhh9ySjCoUsoaAluVEALw_wcB",
    "img": "microphone.jpeg",
    "title": "microphone",
    "tag": "onSale"
}

let microphoneTwo = {
    "name": "Samson M10 Karaoke Microphone",
    "price": "19.99",
    "description": "The Samson, M10 Karaoke Microphone will have you and your friends sounding better than ever.",
    "URL": "https://www.target.com/p/samson-m10-karaoke-microphone/-/A-14796575?ref=tgt_adv_XS000000&AFID=google_pla_df&CPNG=PLA_Electronics+Shopping&adgroup=SC_Electronics&LID=700000001170770pgs&network=g&device=c&location=9013191&gclid=Cj0KCQjw1JbPBRCrARIsAOKj2Pno7JxzqPTNCRbZb6pvTqs1W5fa9r-CBw-IzafjzrVADQqYaokauekaAru0EALw_wcB&gclsrc=aw.ds",
    "img": "microphoneTwo.jpeg",
    "title": "microphone",
    "tag": "onSale"
}

let marshallsAmp = {
    "name": "Marshalls Amlifier",
    "price": "$250.00",
    "description": "The Marshall's Amp is our highest rated amp at Jackel's Audio.",
    "URL": "https://goo.gl/images/NxkznV",
    "img": "marshallsamp2.jpeg",
    "title": "amplifier",
    "tag": "onSale",
    "page": "onSale"
}

 let purpleAmp = {
    "name": "Winfield's Purple Amplifier",
    "price": "$50.00",
    "description": "This is one of our mini amps. It is great for traveling!",
    "URL": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjKl7KDm_jWAhWG5YMKHXYNCywQjRwIBw&url=http%3A%2F%2Fwww.rainbowguitars.com%2Fguitar%2Fwinfield%2Fcyclone-amplifier-head-purple%2Fcyclonepurple%2Fwf&psig=AOvVaw2sXYXwjxw_Blm-WcR-8Mnh&ust=1508348729210528",
    "img": "winfieldpurple.jpeg",
    "title": "amplifier",
    "tag": "onSale",
    "page": "onSale"
}

 let guitarAmp = {
    "name": "Guitar Amplifer",
    "price": "$45.00",
    "description": " This amplifier is great for muscians. You will have incredible sound quality while playing your instruments",
    "URL": "https://l6c-acdn2.line6.net/data/6/0a020a3d10fdc590224b50a5a1/image/png/file.png",
    "img": "oldamp.jpeg",
    "title": "amplifier",
    "tag": "onSale",
    "page": "onSale"
}


// Pushing objects into array
products.push(speakerSystem, amplifier, headphones, djSampler, djController, mixerBehringer, mixerPresonus, mixerSound, mixerAkai, mixerMackie, pioneerController, passiveSpeakers, boseSpeakers, wirelessBoseSpeakers, fullSpeakerBose, microphone, microphoneTwo, marshallsAmp, purpleAmp, guitarAmp)

//Created a constant variable holding the stringified array
const productsArchiveString = JSON.stringify(products);

//Stored the stringified array into LocalStorage.
localStorage.setItem("productsArchive", productsArchiveString);


