const ourTeam = JSON.parse(localStorage.getItem("employeesList"))  //getting data from local storage

const teamInfo = document.getElementById("employeeList");  //this represents where in the html the content with be generated

for (let i = 0; i< ourTeam.length; i++) {   //this loops through the data we got from storage
    let employees = ourTeam[i];

teamInfo.innerHTML +=  
//this is where the data is inserted into the html structure
`
<section class= "employee">
<img src = "${employees.img}" width="100px">
<ul>
<li>emp: ${employees.name}</li>    
<li>favorite song: ${employees.favoriteSong}</li>

</ul>
</section>
`    
}




