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

const guests = [Elvin, Joyce, Alex, Brandon, Radu, Luis, Anderson, Amy, Jordan, Rosalie];

// 10 hometowns //
const homeTown = ["San Antonio", "Austin", "Denver", "LA","New York City", "Little Rock", "Orlando", "Omaha", "Las Vegas", "Seattle"];

// 5 professions //
const profession = ["Engineer", "Lawyer", "Teacher", "Paramedic", "Salesman"];

// 4 age groups //
let age = ['Young Adult', 'Middle Aged', 'Senior Citizen'];

//starting strikes//
let chances = 3;

let rooms = [LivingRoom, DiningRoom, MasterBedroom, Kitchen, WineCellar, Bathroom, HotTub, GuestRoom, Library, Attic];


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
    guests.forEach(function(guest){
        guest.hometown = assignHometown(homeTown);
        guest.profession = assignProfession(profession);
        guest.age = assignAge(age);
    });

    guiltyRandomizer(guests);
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




