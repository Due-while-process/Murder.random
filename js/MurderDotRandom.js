"use strict";

// window.main = function () {
//     window.requestAnimationFrame( main );
//
//     // Whatever your main loop needs to do.
// };

////////////////////////////////
//                            //
//          GUESTS            //
//                            //
////////////////////////////////

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
    age: 0
};
let Rosalie = {
    fName: "Rosalie",
    lName: "Gomez",
    gender: "F",
    hometown: "",
    profession: "",
    age: 0
};

////////////////////////////////
//                            //
//          CLUES             //
//                            //
////////////////////////////////


var clueOne = {
    type: "briefcase",
    description: "a briefcase full of papers",
    includes: {
        gender: ["F"],
        hometown: ["Orlando","Austin"]
            },
        excludes: {
            age: "young adult"
        }
    };
var clueTwo = {
    type: "hair",
    description: "a single strand of white hair",
    include: {
        age: ["adult", "senior"]
    },
    exclude: {
        age: ["teenager", "young adult"]
    }
};
var clueThree = {
    type: "cleaning supply",
    description: "a rare cleaning agent consisting of dihydrogen monoxide",
    include: {
        profession: ["Teacher", "Engineer"],
        hometown: ["NYC", "LA", "San Antonio"]
    },
    exclude: {
        age: ["teenager"]
    }
};
var clueFour = {
    type: 'murder weapon',
    description: 'cane',
    include: {
        gender: ['F'],
        hometown: ['Denver', 'San Antonio']
    },
    exclude: {
        age: ['young adult']
    }
};
var clueFive = {
    type: 'text on phone',
    description: '(512) 555-1234 - We still on for dinner tomorrow night?',
    include: {
        hometown: ['Austin', 'San Antonio'],
    },
    exclude: {
        age: ['senior'],
    }
}
var clueSix = {
    type: 'text on phone',
    description: '(917) 555-1234 - omg bae lol',
    include: {
        hometown: 'New York City',
        age: ['young adult'],
    },
    exclude: {
        gender: 'F'
    }
};
var clueSeven = {
    type: 'footprints',
    description: 'Large boots with seeds of a bluebonnet attached to the bottom',
    include: {
        profession: ['Engineer', 'Parademic'],
        hometown: ['Little Rock', 'Orlando', 'LA', 'San Antonio']
    },
    exclude: {
        age: ['young adult']
    }
};
var clueEight = {
    type: 'drink',
    description: 'Cosmo in a martini glass',
    include: {
        gender: ['F'],
        age: ['Middle Aged', 'Senior']
    },
    exclude: {
        profession: ['Teacher', 'Salesman']
    }
};
var clueNine = {
    type: 'shirt',
    description: "logo says 'born in texas' on it ",
    include: {

    },
    exclude: {
        hometown: ["Denver", "LA","New York City", "Little Rock", "Orlando", "Omaha", "Las Vegas", "Seattle"]
    }
};

var ClueTen = {
    type: 'drink',
    description: 'Cosmo in a martini glass',
    include: {
        gender: ['F'],
        age: ['Middle Aged', 'Senior']
    },
    exclude: {
        profession: ['Teacher', 'Salesman']
    }
};

var clueEleven = {
    type: 'drink',
    description: 'Cosmo in a martini glass',
    include: {
        gender: ['F'],
        age: ['Middle Aged', 'Senior']
    },
    exclude: {
        profession: ['Teacher', 'Salesman']
    }
};

var clueTwelve = {
    type: 'drink',
    description: 'Cosmo in a martini glass',
    include: {
        gender: ['F'],
        age: ['Middle Aged', 'Senior']
    },
    exclude: {
        profession: ['Teacher', 'Salesman']
    }
};

var clueThirteen = {
    type: 'drink',
    description: 'Cosmo in a martini glass',
    include: {
        gender: ['F'],
        age: ['Middle Aged', 'Senior']
    },
    exclude: {
        profession: ['Teacher', 'Salesman']
    }
};

var clueFourteen = {
    type: 'drink',
    description: 'Cosmo in a martini glass',
    include: {
        gender: ['F'],
        age: ['Middle Aged', 'Senior']
    },
    exclude: {
        profession: ['Teacher', 'Salesman']
    }
};

var clueFifteen = {
    type: 'drink',
    description: 'Cosmo in a martini glass',
    include: {
        gender: ['F'],
        age: ['Middle Aged', 'Senior']
    },
    exclude: {
        profession: ['Teacher', 'Salesman']
    }
};

var clueSixteen = {
    type: 'drink',
    description: 'Cosmo in a martini glass',
    include: {
        gender: ['F'],
        age: ['Middle Aged', 'Senior']
    },
    exclude: {
        profession: ['Teacher', 'Salesman']
    }
};

var clueSeventeen = {
    type: 'drink',
    description: 'Cosmo in a martini glass',
    include: {
        gender: ['F'],
        age: ['Middle Aged', 'Senior']
    },
    exclude: {
        profession: ['Teacher', 'Salesman']
    }

};

var clueEighteen = {
    type: 'drink',
    description: 'Cosmo in a martini glass',
    include: {
        gender: ['F'],
        age: ['Middle Aged', 'Senior']
    },
    exclude: {
        profession: ['Teacher', 'Salesman']
    }
};

var clueNineteen = {
    type: 'drink',
    description: 'Cosmo in a martini glass',
    include: {
        gender: ['F'],
        age: ['Middle Aged', 'Senior']
    },
    exclude: {
        profession: ['Teacher', 'Salesman']
    }
};

var clueTwenty = {
    type: 'drink',
    description: 'Cosmo in a martini glass',
    include: {
        gender: ['F'],
        age: ['Middle Aged', 'Senior']
    },
    exclude: {
        profession: ['Teacher', 'Salesman']
    }
};


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
    if(strikes === 0){
        console.log("You have accused too many innocent guests..." +
            " You have been removed from the case!");
    }else {
        console.log("You have found the Killer!");
    }
}

////////////////////////////////
//                            //
//      MASTER FUNCTION       //
//                            //
////////////////////////////////

function createGame(){
    console.log("It's a dark and stormy night.... exposition etc. " +
        "\nThere are 10 guests. " +
        "\nWho is the killer? Explore all the rooms to find some clues. " +
        "" +
        "\n\nYou have three chances to guess who the killer is. " +
        "\nIf you guess wrong, you lose a life and the killer takes one step closer to freedom! " +
        "\nAnd maybe... one step closer to finding you...");

    while (true) {

        console.log("\nWhich room would you like to visit?" +
                    "\n\n1. Living Room" +
                    "\n2. DiningRoom" +
                    "\n3. MasterBedroom + " +
                    "\n4. Kitchen" +
                    "\n5. WineCellar" +
                    "\n6. Bathroom" +
                    "\n7. HotTub" +
                    "\n8. GuestRoom" +
                    "\n9. Library" +
                    "\n10. Attic"
        );

        var roomVisit = prompt("Enter a number to go to a specific room.");



    }

    // ageRandomizer(age);
    guiltyRandomizer(guests);

    guests.forEach(function(guest){
        guest.hometown = assignHometown(homeTown);
        guest.profession = assignProfession(profession);
        guest.age = assignAge(age);


    });

}

//initialize game//
createGame();


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


