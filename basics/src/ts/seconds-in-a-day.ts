'use strict';

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

function secondsInADay() {
    let currentHours: number = 14;
    let currentMinutes: number = 34;
    let currentSeconds: number = 42;

    let secondsPerDay: number = 24 * 60 * 60;
    let sumSeconds: number = ((currentHours * 60) + currentMinutes) * 60 + currentSeconds;
    console.log(secondsPerDay - sumSeconds);
}
//secondsInADay();