const courtney = {      //here is the string of data
"name": "Courtney Seward",
"favoriteSong": "She was unable to choose just one favorite song because there are endless possibilities, so we settled on a favorite album which is...Coloring Book by Chance the Rapper.",
"img":"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.cesarsway.com%2Fsites%2Fnewcesarsway%2Ffiles%2Fstyles%2Flarge_article_preview%2Fpublic%2FCommon-dog-behaviors-explained.jpg%3Fitok%3DFSzwbBoi&imgrefurl=https%3A%2F%2Fwww.cesarsway.com%2Fdog-behavior&docid=vO9RrtMNdYJKzM&tbnid=SHNlh2wEE8JTMM%3A&vet=10ahUKEwja_PeG9_fWAhUB_4MKHUnHBDgQMwg9KAEwAQ..i&w=845&h=450&bih=736&biw=1440&q=dog&ved=0ahUKEwja_PeG9_fWAhUB_4MKHUnHBDgQMwg9KAEwAQ&iact=mrc&uact=8",
}


const tyler = {
"name": "Tyler Bowman",
"favoriteSong": "His favorite song" ,
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