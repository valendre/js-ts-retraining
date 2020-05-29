'use strict';
function bmi() {
    var massInKg = 81.2;
    var heightInM = 1.78;
    var bMI = massInKg / (heightInM * heightInM);
    console.log(bMI);
}
function codingHours() {
    console.log(17 * 5 * 6);
    console.log(5 * 6 / 52 * 100);
}
function conditionalVariableMutation() {
    var a = 24;
    var out = 0;
    if (a % 2 == 1) {
        a++;
    }
    console.log(out);
    var b = 13;
    var out2 = '';
    if (b < 10) {
        out2 = "Less!";
    }
    else if (b > 20) {
        out2 = "More!";
    }
    else {
        out2 = "Sweet!";
    }
    console.log(out2);
    var c = 123;
    var credits = 100;
    var isBonus = false;
    if (credits >= 50 && !isBonus) {
        c -= 2;
    }
    else if (credits < 50 && !isBonus) {
        c--;
    }
    console.log(c);
    var d = 8;
    var time = 120;
    var out3 = '';
    if (d % 4 == 0 && time <= 200) {
        out3 = "check";
    }
    else if (time > 200) {
        out3 = "Time out";
    }
    else {
        out3 = "Run forest Run!";
    }
    console.log(out3);
}
function cuboid() {
    var aSide = 10;
    var bSide = 10;
    var cSide = 10;
    console.log("Surface Area: " + ((aSide * bSide + bSide * cSide + aSide * cSide) * 2));
    console.log("Volume: " + (aSide * bSide * cSide));
}
function defineBasicInfo() {
    var myName = "Valach Endre";
    var myAge = 37;
    var myHeight = 1.77;
    var married = false;
    console.log(myName);
    console.log(myAge);
    console.log(myHeight);
    console.log(married);
}
function favoriteNumbers() {
    var favoriteNumber = 8;
    console.log('My favorite number is: ' + favoriteNumber);
}
function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        var output = "";
        if (i % 3 == 0) {
            output += "Fizz";
        }
        if (i % 5 == 0) {
            output += "Buzz";
        }
        if (output == "") {
            output += i;
        }
        console.log(output);
    }
}
fizzBuzz();
function helloMe() {
    console.log('Hello, You!');
}
function helloOthers() {
    console.log("Hello, Esther!");
    console.log("Hello, Mary!");
    console.log("Hello, Joe!");
}
function humptyDumpty() {
    console.log('Humpty Dumpty sat on a wall,');
    console.log('Humpty Dumpty had a great fall.');
    console.log('All the king\'s horses and all the king\'s men');
    console.log('Couldn\'t put Humpty together again.');
}
function iWontCheatOnTheExam() {
    for (var i = 0; i < 100; i++) {
        console.log("I won't cheat on the exam!");
    }
}
function introduceYours() {
    console.log("Endre Valach");
    console.log(37);
    console.log(1.77);
}
function multiplicationTable() {
    var number = 15;
    for (var i = 1; i <= 10; i++) {
        console.log(i + " * " + number + " = " + (i * number));
    }
}
function parametricAverage() {
    var input = 5;
    var sum = 0;
    for (var i = 1; i <= input; i++) {
        sum += i;
    }
    console.log("Sum: " + sum + ", Average: " + (sum / input));
}
function printEven() {
    for (var i = 1; i < 500; i += 2) {
        console.log(i);
    }
}
function secondsInADay() {
    var currentHours = 14;
    var currentMinutes = 34;
    var currentSeconds = 42;
    var secondsPerDay = 24 * 60 * 60;
    var sumSeconds = ((currentHours * 60) + currentMinutes) * 60 + currentSeconds;
    console.log(secondsPerDay - sumSeconds);
}
function swap() {
    var a = 123;
    var b = 526;
    var c = a;
    a = b;
    b = c;
    console.log(a);
    console.log(b);
}
function twoNumbers() {
    console.log(13 + 22);
    console.log(13 - 22);
    console.log(22 * 13);
    console.log(22 / 13);
    console.log(22 % 13);
}
function variableMutation() {
    var a = 3;
    a += 10;
    console.log(a);
    var b = 100;
    b -= 7;
    console.log(b);
    var c = 44;
    c *= 2;
    console.log(c);
    var d = 125;
    d /= 5;
    console.log(d);
    var e = 8;
    e *= e;
    console.log(e);
    var f1 = 123;
    var f2 = 345;
    console.log(f1 > f2);
    var g1 = 350;
    var g2 = 200;
    console.log(g2 * 2 > g1);
    var h = 1357988018575474;
    console.log(h % 11 == 0);
    var i1 = 10;
    var i2 = 3;
    console.log(i1 > i2 * i2 && i1 < i2 * i2 * i2);
    var j = 1521;
    console.log(j % 3 == 0 || j % 5 == 0);
}
//# sourceMappingURL=tsc.js.map