"use strict"

window.onload = () => {

    thePeopleListing ();

}

function thePeopleListing() {

    //I need to get a hold of the element
    let theTableBody = document.querySelector("#thePeopleListingTblBody");

    //need to work with all the lottery tickets
    people.forEach((person) => {

        //call a function to build the indiviual table rows and data   
        buildTableRow(theTableBody, person);


    });

    //this function is responsible for building and adding a table row to the table body
    function buildTableRow(tableBody, data) {

        let newRow = tableBody.insertRow(-1);
        
        let cell1 = newRow.insertCell();
        cell1.innerHTML = data.id;

        let cell2 = newRow.insertCell();
        cell2.innerHTML = data.firstName;

        let cell3 = newRow.insertCell();
        cell3.innerHTML = data.lastName;

        let cell4 = newRow.insertCell();
        cell4.innerHTML = data.email;

        let cell5 = newRow.insertCell();
        cell5.innerHTML = data.ipAddress;




    }
}