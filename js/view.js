////////////////////////////////
//                            //
//             UI             //
//                            //
////////////////////////////////

//test to see if the guilty person is assigned//
// document.getElementById("killer").innerHTML = "the Killer" + "name: " + killer.fName + " age: " + killer.age + " profession: " + killer.profession + " hometown: " + killer.hometown + " gender: " + killer.gender;
//
// //once someone is charged they are pushed to the innocent array
// document.getElementById("charge").addEventListener("click", function() {
//     accuse(Rosalie);
// });

function displayAllGuests (guest) {

    let displayGuests = document.getElementById("display-guests");

    let listOfGuests = "Here is the list of guests at this party: ";

    guests.forEach(function(guest) {

        listOfGuests = listOfGuests +
            "<div id='guest-individual'><li> " +
            "<strong>Name: </strong>" + guest.fName + " " + guest.lName + "</li><li>" +
            "<strong>Gender: </strong>" + guest.gender + "</li><li>" +
            "<strong>Hometown: </strong>" + guest.hometown + "</li><li>" +
            "<strong>Profession: </strong>" + guest.profession + "</li><li>" +
            "<strong>Age: </strong>" + guest.age + "</li></div>";

        return listOfGuests;
    });

        displayGuests.innerHTML = "<ul>" + listOfGuests + "</ul>";

}