const ourTeam = JSON.parse(localStorage.getItem("employeesList"))  //getting data from local storage

const teamInfo = document.getElementsByClassName("employees")[0];  //this represents where in the html the content with be generated

for (let i = 0; i< ourTeam.length; i++) {   //this loops through the data we got from storage
    let employees = ourTeam[i];

teamInfo.innerHTML +=  //this is where the data is inserted into the html structure
`
<li>employee: ${employees.name}</li>    
<li>favorite song: ${employees.favoritesong}</li>
<li>img: ${employees.img}</li>
`    
}

