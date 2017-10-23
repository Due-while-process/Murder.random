"use strict";

// window.main = function () {
//     window.requestAnimationFrame( main );
//
//     // Whatever your main loop needs to do.
// };

let Elvin = {
    fName: "Elvin",
    lName: "Terrell",
    gender: "M",
    hometown: "",
    profession: "",
    age: 0
};
let Joyce = {
    fName: "Joyce",
    lName: "Ling",
    gender: "F",
    hometown: "",
    profession: "",
    age: 0
};
let Alex = {
    fName: "Alex",
    lName: "Potter",
    gender: "F",
    hometown: "",
    profession: "",
    age: 0
};
let Brandon = {
    fName: "Brandon",
    lName: "Gossen",
    gender: "M",
    hometown: "",
    profession: "",
    age: 0
};
let Jordan = {
    fName: "Jordan",
    lName: "Leslie",
    gender: "F",
    hometown: "",
    profession: "",
    age: 0
};
let Amy = {
    fName: "Amy",
    lName: "Yanaway",
    gender: "F",
    hometown: "",
    profession: "",
    age: 0
};
let Anderson = {
    fName: "Anderson",
    lName: "Cardoso",
    gender: "M",
    hometown: "",
    profession: "",
    age: 0
};
let  Luis = {
    fName: "Luis",
    lName: "Montealegre",
    gender: "M",
    hometown: "",
    profession: "",
    age: 0
};
let Radu = {
    fName: "Radu",
    lName: "Istrate",
    gender: "M",
    hometown: "",
    profession: "",
    age: null
};
let Rosalie = {
    fName: "Rosalie",
    lName: "Gomez",
    gender: "F",
    hometown: "",
    profession: "",
    age: 0
};

let guiltyGuest = [];

const guests = [Elvin, Joyce, Alex, Brandon, Radu, Luis, Anderson, Amy, Jordan, Rosalie];

//10 hometowns//
const homeTown = ["San antonio", "Austin", "Denver", "LA","New Your City", "Little Rock", "Orlando", "Omaha", "Las Vegas", "Seattle"];

// 5 professions//
const profession = ["Engineer", "Lawyer", "Teacher", "Paramedic", "Salesman"];

let strikes = 3;

let innocent = [];

const LivingRoom = {

};
let rooms = [LivingRoom, "Dining room", "Master bedroom", "Kitchen", "Wine cellar", "Bathroom", "Hot tub", "Guest room", "Library", "Attic"];

let clues = [];

let age = [];

function guiltyRandomizer(guests) {
    let randomNumber = Math.floor(Math.random()*10);
     guiltyGuest.push(guests[randomNumber]);
}

function assignProfession(profession){
    let randomNumber = Math.floor(Math.random()*10);
    return profession[randomNumber];
}
function assignHometown(hometown){
    let randomNumber = Math.floor(Math.random()*10);
    return hometown[randomNumber];
}

function assignAge(age){
    let randomNumber = Math.floor(Math.random()*10);
    return age[randomNumber];
}

function ageRandomizer(age){
    for(let i =0; i < guests.length; i++){
        let randomNumber = Math.floor(Math.random()*52 +18);
        age.push(randomNumber);
    }
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
    if (accused !== guiltyRandomizer(guests)){
        innocent.push(accused);
        strikes--;
    } else{
        gameOver();
    }
}

function createGame(){
    ageRandomizer(age);
    guiltyRandomizer(guests);

    guests.forEach(function(guest){
        guest.hometown = assignHometown(homeTown);
        guest.profession = assignProfession(profession);
        guest.age = assignAge(age);
    })
}


//initialize game//
createGame();

//test to see if the guilty person is assigned//
document.getElementById("killer").innerHTML = "the guilty guest is " + guiltyGuest[0].fName + " " + guiltyGuest[0].age;

//once someone is charged they are pushed to the innocent array
document.getElementById("charge").addEventListener("click", function() {
    accuse(Rosalie);
});


