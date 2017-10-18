"use strict";

// all guest names are just place holders//
var guestArray = ["Jack", "Jill", "Pinky", "Brain", "Barack", "Vladimir", "Shaggy", "Morty", "Morgan", "Freeman"];

//10 hometowns//
var homeTown = [""];

var gender = ["M","F"];

// 5 professions//
var profession = [];

var strikes = 3;

var clues = [];

var innocent = [];

var rooms = ["Living room", "Dining room", "Master bedroom", "Kitchen", "Wine cellar", "Bathroom", "Hot tub", "Guest room", "Library", "Attic"];


function createGame(){

}


function guilty(){

}


function accuse(accused) {

}


function guiltyRandomizer(guests) {
    var randomNumber = Math.floor(Math.random()*10);

    var randomGuest = guests[randomNumber];
    return randomGuest;
}

document.write("A random guest: " + guiltyRandomizer(guestArray));

