////////////////////////////////
//                            //
//          GUESTS            //
//                            //
////////////////////////////////


var Elvin = {
    id: 1,
    title: "Elvin Terrell, M",
    param: {
        name: "Elvin Terrell"
    },
    fName: "Elvin",
    lName: "Terrell",
    gender: "M",
    hometown: "",
    profession: "",
    age: 0
};
var Joyce = {
    id: 2,
    title: "Joyce Ling, F",
    param: {
        name: "Joyce Ling"
    },
    fName: "Joyce",
    lName: "Ling",
    gender: "F",
    hometown: "",
    profession: "",
    age: 0
};
var Alex = {
    id: 3,
    title: "Alex Potter, F",
    param: {
        name: "Alex Potter"
    },
    fName: "Alex",
    lName: "Potter",
    gender: "F",
    hometown: "",
    profession: "",
    age: 0
};
var Brandon = {
    id: 4,
    title: "Brandon Gossen, M",
    param: {
        name: "Brandon Gossen"
    },
    fName: "Brandon",
    lName: "Gossen",
    gender: "M",
    hometown: "",
    profession: "",
    age: 0
};
var Jordan = {
    id: 5,
    title: "Jordan Leslie, F",
    param: {
        name: "Jordan Leslie"
    },
    fName: "Jordan",
    lName: "Leslie",
    gender: "F",
    hometown: "",
    profession: "",
    age: 0
};
var Amy = {
    id: 6,
    title: "Amy Yanaway, F",
    param: {
        name: "Amy Yanaway"
    },
    fName: "Amy",
    lName: "Yanaway",
    gender: "F",
    hometown: "",
    profession: "",
    age: 0
};
var Anderson = {
    id: 7,
    title: "Anderson Cardoso, M",
    param: {
        name: "Anderson Cardoso"
    },
    fName: "Anderson",
    lName: "Cardoso",
    gender: "M",
    hometown: "",
    profession: "",
    age: 0
};
var  Luis = {
    id: 8,
    title: "Luis Montealegre, M",
    param: {
        name: "Luis Montealegre"
    },
    fName: "Luis",
    lName: "Montealegre",
    gender: "M",
    hometown: "",
    profession: "",
    age: 0
};
var Radu = {
    id: 9,
    title: "Radu Istrate, M",
    param: {
        name: "Radu Istrate"
    },
    fName: "Radu",
    lName: "Istrate",
    gender: "M",
    hometown: "",
    profession: "",
    age: 0
};
var Rosalie = {
    id: 10,
    title: "Rosalie Gomez, F",
    param: {
        name: "Rosalie Gomez"
    },
    fName: "Rosalie",
    lName: "Gomez",
    gender: "F",
    hometown: "",
    profession: "",
    age: 0
};

var guestArray = [Elvin, Joyce, Alex, Brandon, Radu, Luis, Anderson, Amy, Jordan, Rosalie];

var whatHometown =
    {
        title: 'Where is your hometown?',
        action: 'whereIsYourHometown',
        param: {
            array: guestArray
        }
    };

var whatProfession =
    {
        title: 'What is your profession?',
        action: 'whatIsYourProfession',
        param: {
            array: guestArray
        }
    };

var whatAge =
    {
        title: 'How old are you?',
        action: 'howOldAreYou',
        param: {
            array: guestArray
        }
    };


var interrogateGuestQuestionsArray = [whatHometown, whatProfession, whatAge];
var accusedGuestArray = [Joyce];

function interrogateGuestArray (guestArray) {
    guestArray.forEach(function(guest){
        guest.action = 'interrogateGuestNow';
    });

    return guestArray;
}

function accuseGuestArray (guestArray) {
    guestArray.forEach(function(guest){
        guest.action = 'accuseGuestNow';
    });
    return guestArray;
}


// 10 hometowns //
const homeTown = ["San Antonio", "Austin", "Denver", "LA","New York City", "Little Rock", "Orlando", "Omaha", "Las Vegas", "Seattle"];

// 5 professions //
const profession = ["Engineer", "Lawyer", "Teacher", "Paramedic", "Salesman"];

// 4 age groups //
let age = ['Young Adult', 'Middle Aged', 'Senior Citizen'];