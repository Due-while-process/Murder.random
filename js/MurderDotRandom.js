"use strict";

// all guest names are just place holders//
var guests;

//10 hometowns//
var homeTown = [""];

var gender = ["M","F"];

// 5 professions//
var profession = [];

var strikes = 3;

var clues = [];

var innocent = [];

var rooms = ["living room", "dining room"];

function createGame(){

}


function guilty(){

}


function accuse(accused) {
}

function guiltyRandomizer(guests) {
    guests = ["Jack", "Jill", "Pinky", "Brain", "Barack", "Vladimir", "Shaggy", "Morty", "Morgan", "Freeman"];
    var randomNumber = Math.floor(Math.random()*10);

    console.log(randomNumber);
    console.log(guests);

    console.log(guests[randomNumber]);

}

guiltyRandomizer();
