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

//10 hometowns//
const homeTown = ["San antonio", "Austin", "Denver", "LA","New York City", "Little Rock", "Orlando", "Omaha", "Las Vegas", "Seattle"];

// 5 professions//
const profession = ["Engineer", "Lawyer", "Teacher", "Paramedic", "Salesman"];

//starting strikes//
let chances = 3;


const LivingRoom = {};
const DiningRoom = {};
const MasterBedroom = {};
const Kitchen = {};
const WineCellar = {};
const Bathroom = {};
const HotTub = {};
const GuestRoom = {};
const Library = {};
const Attic = {};


let rooms = [LivingRoom, DiningRoom, MasterBedroom, Kitchen, WineCellar, Bathroom, HotTub, GuestRoom, Library, Attic];

let age = ['young adult', 'middle aged', 'senior citizen'];



////////////////////////////////
//                            //
//          FUNCTIONS         //
//                            //
////////////////////////////////

function listAllGuests (guest) {

    console.log("Here is the list of guests at this party: ");

    guests.forEach(function(guest) {
        console.log("Name: " + guest.fName + " " + guest.lName);
        console.log("Gender: " + guest.gender);
        console.log("Hometown: " + guest.hometown);
        console.log("Age: " + guest.age);
    });
}

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

// function ageRandomizer(age){
//     for(let i =0; i < guests.length; i++){
//         let randomNumber = Math.floor(Math.random()*52 +18);
//         age.push(randomNumber);
//     }
// }


function checkInnocentSuspects() {
    return innocent;
}

function accuse(accused) {
    if (accused !== killer){
        innocent.push(accused);
        chances--;
    } else{
        gameOver();
    }
}

function clueCreation(){
}

function investigateRoom(){
}

function gameOver() {
    if (strikes === 0){
        console.log("You have accused too many innocent guests..." +
            " You have been removed from the case!");
    } else {
        console.log("You have found the Killer!");
    }
}




