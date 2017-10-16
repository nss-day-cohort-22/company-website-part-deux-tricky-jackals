const courtney = {      //here is the string of data
"name": "Courtney Seward",
"favoriteSong": "Her favorite song",
"img":"",
}


const tyler = {
"name": "Tyler Bowman",
"favoriteSong": "His favorite song" ,
"img": "",
}

const deanna = {
"name": "Deanna Vickers",
"favoriteSong": "One of my favorite songs is called 'Istanbul' by They Might Be Giant",
"img": "",
}

const ryan = {
"name": "Ryan McPherson",
"favoriteSong": "His favorite song is Bohemian Rhapsody",
"img":"",
}


const alexis = {
"name": "Alexis Hennecy", 
"favoriteSong":"",
"img":"",
}

let employeesList = []  //this is the array

employeesList.push(courtney, tyler, deanna, ryan, alexis)  //data is being pushed through the array



// factory to set the data to be stringified
const employeesListString = JSON.stringify(employeesList)
localStorage.setItem("employeesList", employeesListString)