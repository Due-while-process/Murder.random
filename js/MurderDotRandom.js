"use strict";

var Terrell = {
    gender: "M"
};
var Joyce = {
    gender: "F"
};
var Alex = {
    gender: "F"
};
var Brandon = {
    gender: "M"
};
var Jordan = {
    gender: "F"
};
var Amy = {
    gender: "F"
};
var Anderson = {
    gender: "M"
};
var  Luis = {
    gender: "M"
};
var Radu = {
    gender: "M"
};
var Rosalie = {
    gender: "F"
};

var guests = ["Terrell", "Joyce", "Alex", "Brandon", "Radu", "Luis", "Anderson", "Amy", "Jordan", "Rosalie"];

//10 hometowns//
var homeTown = ["San antonio", "Austin", "Denver", "LA","New Your City", "Little Rock", "Orlando", "Omaha", "Las Vegas", "Seattle"];

// 5 professions//
var profession = ["Engineer", "Lawyer", "Teacher", "Paramedic", "Salesman"];

var strikes = 3;

var clues = [];

var innocent = [];

var rooms = ["Living room", "Dining room", "Master bedroom", "Kitchen", "Wine cellar", "Bathroom", "Hot tub", "Guest room", "Library", "Attic"];

function assignProfession(profession){
    let randomNumber = Math.floor(Math.random()*10);
    return profession[randomNumber];
}
function assignHometown(hometown){
    let randomNumber = Math.floor(Math.random()*10);
    return hometown[randomNumber];
}

function gameOver() {
    if(strikes === 0){
        console.log("You have accused too many innocent guests..." +
            " You have been removed from the case!");
    }else {
        console.log("You have found the guilty guest!");
    }
}


function checkClearedSuspects() {
        return innocent;
}

function accuse(accused) {
    if (accused !== guiltyGuest(guests)){
        innocent.push(accused);
        strikes--;
    } else{
        gameOver();
    }
}

function createGame(){

    function guiltyGuest(guests) {
        let randomNumber = Math.floor(Math.random()*10);
        return guests[randomNumber];
    }
    guests.forEach(function(guest){
        guest.hometown = assignHometown(homeTown);
        guest.profession = assignProfession(profession);
    })
}

createGame();

// document.write("A random guest: " + guiltyGuest(guests));

