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
            "<li> Name: " + guest.fName + " " + guest.lName + "</li><li>" +
            "Gender: " + guest.gender + "</li><li>" +
            "Hometown: " + guest.hometown + "</li><li>" +
            "Age: " + guest.age + "</li>";

        return listOfGuests;
    });

        displayGuests.innerHTML = "<ul>" + listOfGuests + "</ul>";

}