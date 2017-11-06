////////////////////////////////
//                            //
//             UI             //
//                            //
////////////////////////////////

//test to see if the guilty person is assigned//
document.getElementById("killer").innerHTML = "the Killer" + "name: " + killer.fName + " age: " + killer.age + " profession: " + killer.profession + " hometown: " + killer.hometown + " gender: " + killer.gender;

//once someone is charged they are pushed to the innocent array
document.getElementById("charge").addEventListener("click", function() {
    accuse(Rosalie);
});

