'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

function cuboid() {
    let aSide: number = 10;
    let bSide: number = 10;
    let cSide: number = 10;

    console.log("Surface Area: " + ((aSide * bSide + bSide * cSide + aSide * cSide) * 2));
    console.log("Volume: " + (aSide * bSide * cSide));
}

//cuboid();