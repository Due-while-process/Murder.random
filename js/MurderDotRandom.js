"use strict";

let Terrell = {
    gender: "M",
    hometown: "",
    profession: ""
};
let Joyce = {
    gender: "F",
    hometown: "",
    profession: ""
};
let Alex = {
    gender: "F",
    hometown: "",
    profession: ""
};
let Brandon = {
    gender: "M",
    hometown: "",
    profession: ""
};
let Jordan = {
    gender: "F",
    hometown: "",
    profession: ""
};
let Amy = {
    gender: "F",
    hometown: "",
    profession: ""
};
let Anderson = {
    gender: "M",
    hometown: "",
    profession: ""
};
let  Luis = {
    gender: "M",
    hometown: "",
    profession: ""
};
let Radu = {
    gender: "M",
    hometown: "",
    profession: ""
};
let Rosalie = {
    gender: "F",
    hometown: "",
    profession: ""
};

let guests = [Terrell, Joyce, Alex, Brandon, Radu, Luis, Anderson, Amy, Jordan, Rosalie];

//10 hometowns//
let homeTown = ["San antonio", "Austin", "Denver", "LA","New Your City", "Little Rock", "Orlando", "Omaha", "Las Vegas", "Seattle"];

// 5 professions//
let profession = ["Engineer", "Lawyer", "Teacher", "Paramedic", "Salesman"];

let strikes = 3;

let clues = [];

let innocent = [];

let rooms = ["Living room", "Dining room", "Master bedroom", "Kitchen", "Wine cellar", "Bathroom", "Hot tub", "Guest room", "Library", "Attic"];

function guiltyGuest(guests) {
    let randomNumber = Math.floor(Math.random()*10);
    return guests[randomNumber];
}

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
    guiltyGuest(guests);

    guests.forEach(function(guest){
        guest.hometown = assignHometown(homeTown);
        guest.profession = assignProfession(profession);
    })
}

createGame();

let keys = Object.keys(Terrell);
let values = Object.values(Terrell);


document.write("A random guest: " + keys + " " + values );

