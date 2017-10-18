const courtney = {      //here is the string of data
"name": "Courtney Seward",
"favoriteSong": "She was unable to choose just one favorite song because there are endless possibilities, so we settled on a favorite album which is...Coloring Book by Chance the Rapper.",
"img": ""
}


const tyler = {
"name": "Tyler Bowman",
"favoriteSong": "His favorite genre is bluegrass and with his background in music, he likes to play folk and bluegrass style." ,
"img": "",
}

const deanna = {
"name": "Deanna Vickers",
"favoriteSong": "One of Deanna's favorite songs is called 'Istanbul' by They Might Be Giant",
"img": "",
}

const ryan = {
"name": "Ryan McPherson",
"favoriteSong": "Ryan's favorite song is Bohemian Rhapsody",
"img":"",
}


const alexis = {
"name": "Alexis Hennecy", 
"favoriteSong": "Alexis was also not able to choose just one song, so she settled for her favorite band: Radiohead.",
"img":"",
}

let employeesList = []  //this is the array

employeesList.push(courtney, tyler, deanna, ryan, alexis)  //data is being pushed through the array



// factory to set the data to be stringified
const employeesListString = JSON.stringify(employeesList)
localStorage.setItem("employeesList", employeesListString)