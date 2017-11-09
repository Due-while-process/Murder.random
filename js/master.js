////////////////////////////////
//                            //
//      MASTER FUNCTION       //
//                            //
////////////////////////////////

var strikes = 3;

startGame();

function startGame() {
        showExposition();
        chooseAction();
}

function showExposition() {
    var message = "It's a dark and stormy night.... exposition etc.\n" +
        "\nThere are 10 guests.\n" +
        "\nWho is the killer? Explore all the rooms to find some clues.\n" +
        "\nYou have three chances to guess who the killer is.\n" +
        "\nIf you guess wrong, you lose a life and the killer takes one step closer to freedom!\n" +
        "\nAnd maybe... one step closer to finding you..."

    showMessage(message);
}

function showMessage(message) {
    $("#message").html(message);
}

function showOptions(options) {
    var s = '';

    for (var i = 0; i < options.length; i++) {
        let id = options[i].action + i;
        let param = JSON.stringify(options[i].param);

        s += '<button id="' + id + '" value=\'' + param + '\'>' + options[i].title + '</button>';
    }


    $('#options').html(s);
    for (var i = 0; i < options.length; i++) {
        let id = options[i].action + i;
        $('#' + id).click(function () {
            window.handleChoice.call(this,
                $(this).attr('id').replace(/[0-9]/g, ''),
                JSON.parse($(this).attr('value')));
        });
    }
}


function chooseAction() {
    // choose from:
    // interrogate guest
    // investigate house
    // accuse guest

    // insert an ARRAY OF OBJECTS to attach a button/event listener to each object.
    showOptions([
        {
            title: 'Interrogate guest',
            action: 'interrogateGuest',
            param: {}
        },
        {
            title: "Investigate house",
            action: 'investigateHouse',
            param: {}
        },
        {
            title: 'Accuse guest',
            action: 'accuseGuest',
            param: {}
        }]);
}

window.handleChoice = function (action, param) {
    window[action].call(this, param);
};

// INTERROGATE GUEST //

window.interrogateGuest = function () {
    showMessage('Show a guest list here...');
    showOptions(interrogateGuestArray(guestArray));
};

window.interrogateGuestNow = function (guest) {
    showMessage('Ask ' + guest.name + ' a question.');
    showOptions([]);

};

// ACCUSE GUEST //

window.accuseGuest = function () {
    showMessage('Which guest would you like to accuse?  (Remember, if you get it wrong, you lose one strike.  Three strikes and you\'re fired!)');
    showOptions(accuseGuestArray(guestArray));

};

window.accuseGuestNow = function (guest) {
    for (let i = 0; i < accusedGuestArray.length; i++) {
        if (guest.name === accusedGuestArray[i].title) {
            showMessage('You have already accused ' + guest.name + '! Choose another guest below.');
            showOptions(accuseGuestArray(guestArray));
            return;
        }
    }

    showMessage('You accused ' + guest.name + '!');

    // Once a guest is accused, they are pushed to the accusedGuestArray (i.e. they cannot be accused again)
    accusedGuestArray.push(guest);

    showOptions([]);

};

// INVESTIGATE

window.investigateHouse = function () {
    showMessage('Which room would you like to investigate?');
    showOptions([LivingRoom]);

    /*
showOptions([
{
title: 'Dining Room',
action: 'investigateRoom',
param: {
    name: 'dining'
}
},
{
title: 'Kitchen',
action: 'investigateRoom',
param: {
    name: 'kitchen'
}
},
{
title: 'Solarium',
action: 'investigateRoom',
param: {
    name: 'solarium'
}
}]
);
*/
};

window.investigateRoom = function (room) {
    showMessage('You look around the ' + rooms.filter(function (v) {
        return v.id === room.id;
    })[0].title + ' and see a few clues.');
    showOptions([]);
};

