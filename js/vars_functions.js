"use strict";

// window.main = function () {
//     window.requestAnimationFrame( main );
//
//     // Whatever your main loop needs to do.
// };


////////////////////////////////
//                            //
//          VARIABLES         //
//                            //
////////////////////////////////

let killer = {};
let innocent = [];
let chances = 3;

////////////////////////////////
//                            //
//          FUNCTIONS         //
//                            //
////////////////////////////////

function guiltyRandomizer(guests) {
    let randomNumber = Math.floor(Math.random()*10);
    killer = guests[randomNumber];
}

function assignProfession(profession){
    let randomNumber = Math.floor(Math.random()*5);
    return profession[randomNumber];
}
function assignHometown(hometown){
    let randomNumber = Math.floor(Math.random()*10);
    return hometown[randomNumber];
}

function assignAge(age){
    let randomNumber = Math.floor(Math.random()*3);
    return age[randomNumber];
}

function checkInnocentSuspects() {
    return innocent;
}

function accuse(accused) {
    if (accused !== killer){
        innocent.push(accused);
        chances--;
    } else {
        gameOver();
    }
}

function clueCreation(){
}

function investigateRoom(){
}

function createGame() {
    guestArray.forEach(function(guest){
        guest.hometown = assignHometown(homeTown);
        guest.profession = assignProfession(profession);
        guest.age = assignAge(age);
    });

    guiltyRandomizer(guestArray);
}

createGame();


function gameOver() {
    if (strikes === 0){
        console.log("You have accused too many innocent guests..." +
            " You have been removed from the case!");
    } else {
        console.log("You have found the Killer!");
    }
}




